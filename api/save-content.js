// api/save-content.js
// Função serverless Vercel — salva content.json no GitHub via API
// O Vercel detecta o push e faz deploy automático.

export default async function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(200).end();

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  // Autenticação simples via senha
  const authHeader = req.headers['authorization'];
  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!authHeader || authHeader !== `Bearer ${adminPassword}`) {
    return res.status(401).json({ error: 'Não autorizado' });
  }

  const { content } = req.body;
  if (!content) {
    return res.status(400).json({ error: 'Conteúdo ausente' });
  }

  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
  const GITHUB_OWNER = process.env.GITHUB_OWNER;
  const GITHUB_REPO  = process.env.GITHUB_REPO;
  const FILE_PATH    = 'public/content.json';

  try {
    // 1. Buscar SHA atual do arquivo (necessário para atualizar)
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

    // 2. Fazer commit do novo conteúdo
    const contentBase64 = Buffer.from(
      JSON.stringify(content, null, 2)
    ).toString('base64');

    const body = {
      message: `cms: atualiza conteúdo do site — ${new Date().toLocaleString('pt-BR')}`,
      content: contentBase64,
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
      throw new Error(err.message || 'Erro ao salvar no GitHub');
    }

    const result = await putRes.json();
    return res.status(200).json({
      ok: true,
      commit: result.commit?.html_url,
      message: 'Conteúdo salvo! O Vercel fará o deploy em instantes.',
    });

  } catch (err) {
    console.error('Erro save-content:', err);
    return res.status(500).json({ error: err.message });
  }
}
