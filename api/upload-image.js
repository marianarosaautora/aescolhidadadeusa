// api/upload-image.js
// Recebe imagem em base64 e faz commit no GitHub dentro de /public/images/

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(200).end();

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  const authHeader = req.headers['authorization'];
  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!authHeader || authHeader !== `Bearer ${adminPassword}`) {
    return res.status(401).json({ error: 'Não autorizado' });
  }

  const { filename, base64, mimeType } = req.body;
  if (!filename || !base64) {
    return res.status(400).json({ error: 'filename e base64 são obrigatórios' });
  }

  // Sanitiza nome do arquivo
  const safeName = filename
    .toLowerCase()
    .replace(/[^a-z0-9.\-_]/g, '-')
    .replace(/-+/g, '-');

  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
  const GITHUB_OWNER = process.env.GITHUB_OWNER;
  const GITHUB_REPO  = process.env.GITHUB_REPO;
  const FILE_PATH    = `public/images/${safeName}`;

  try {
    // Verificar se já existe (para pegar sha)
    const getRes = await fetch(
      `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${FILE_PATH}`,
      {
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          Accept: 'application/vnd.github+json',
        },
      }
    );

    let sha = null;
    if (getRes.ok) {
      const fileData = await getRes.json();
      sha = fileData.sha;
    }

    const body = {
      message: `cms: upload de imagem — ${safeName}`,
      content: base64,
      branch: 'main',
    };
    if (sha) body.sha = sha;

    const putRes = await fetch(
      `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${FILE_PATH}`,
      {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          Accept: 'application/vnd.github+json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      }
    );

    if (!putRes.ok) {
      const err = await putRes.json();
      throw new Error(err.message || 'Erro ao fazer upload no GitHub');
    }

    // URL pública da imagem no repositório via jsDelivr CDN (mais rápido que raw.githubusercontent)
    const publicUrl = `https://cdn.jsdelivr.net/gh/${GITHUB_OWNER}/${GITHUB_REPO}@main/${FILE_PATH}`;

    return res.status(200).json({
      ok: true,
      url: publicUrl,
      path: FILE_PATH,
    });

  } catch (err) {
    console.error('Erro upload-image:', err);
    return res.status(500).json({ error: err.message });
  }
}
