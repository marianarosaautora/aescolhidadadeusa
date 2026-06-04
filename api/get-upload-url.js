// api/get-upload-url.js
// Gera uma URL assinada (Presigned URL) para o upload de arquivos direto ao Supabase Storage.

export default async function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(200).end();

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  // Autenticação simples via senha admin (mesmo token usado nas outras rotas)
  const authHeader = req.headers['authorization'];
  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!authHeader || authHeader !== `Bearer ${adminPassword}`) {
    return res.status(401).json({ error: 'Não autorizado' });
  }

  const { filename, bucket } = req.body;
  if (!filename || !bucket) {
    return res.status(400).json({ error: 'filename e bucket são obrigatórios' });
  }

  // Sanitiza nome do arquivo para evitar caracteres incompatíveis na URL do storage
  const ext = filename.substring(filename.lastIndexOf('.')).toLowerCase();
  const safeBaseName = filename
    .substring(0, filename.lastIndexOf('.'))
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '-')
    .replace(/-+/g, '-');
  const safeFilename = `${safeBaseName}${ext}`;

  const SUPABASE_URL = process.env.SUPABASE_URL;
  const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    return res.status(500).json({ error: 'Faltam variáveis SUPABASE_URL ou SUPABASE_SERVICE_ROLE_KEY no Vercel.' });
  }

  try {
    // Chamada direta para a API REST do Supabase Storage para gerar a URL de upload assinada
    const signUrl = `${SUPABASE_URL}/storage/v1/object/upload/sign/${bucket}/${safeFilename}`;
    const supabaseRes = await fetch(signUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
        'apikey': SUPABASE_SERVICE_ROLE_KEY,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({})
    });

    if (!supabaseRes.ok) {
      const errText = await supabaseRes.text().catch(() => '');
      throw new Error(`Erro do Supabase Storage: ${supabaseRes.status} ${supabaseRes.statusText} — ${errText}`);
    }

    const data = await supabaseRes.json();
    if (!data.url) {
      throw new Error('O Supabase Storage não retornou uma URL de upload válida.');
    }

    // Monta a URL assinada completa (data.url já começa com /)
    const signedUrl = `${SUPABASE_URL}${data.url}`;

    // A URL pública para download / exibição posterior no site
    const publicUrl = `${SUPABASE_URL}/storage/v1/object/public/${bucket}/${safeFilename}`;

    return res.status(200).json({
      ok: true,
      signedUrl: signedUrl,
      publicUrl: publicUrl,
      filename: safeFilename
    });

  } catch (err) {
    console.error('Erro get-upload-url:', err);
    return res.status(500).json({ error: err.message });
  }
}
