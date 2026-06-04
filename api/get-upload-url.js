// api/get-upload-url.js
// Gera uma URL assinada (Presigned URL) para o upload de arquivos direto ao Supabase Storage.

import { createClient } from '@supabase/supabase-js';

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

  // Inicializa o cliente do Supabase com a chave mestra de serviço (bypassa RLS)
  const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

  try {
    // Gera URL assinada de upload que é válida por 15 minutos (900s)
    const { data, error } = await supabase.storage
      .from(bucket)
      .createSignedUploadUrl(safeFilename);

    if (error) {
      throw new Error(error.message || 'Erro ao gerar URL assinada de upload');
    }

    // A URL pública para download / exibição posterior no site
    const publicUrl = `${SUPABASE_URL}/storage/v1/object/public/${bucket}/${safeFilename}`;

    return res.status(200).json({
      ok: true,
      signedUrl: data.signedUrl,
      publicUrl: publicUrl,
      filename: safeFilename
    });

  } catch (err) {
    console.error('Erro get-upload-url:', err);
    return res.status(500).json({ error: err.message });
  }
}
