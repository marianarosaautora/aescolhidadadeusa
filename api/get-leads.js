// api/get-leads.js
// Função serverless Vercel — busca os usuários cadastrados via Supabase Admin API

export default async function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(200).end();

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  // Autenticação simples via senha
  const authHeader = req.headers['authorization'];
  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!authHeader || authHeader !== `Bearer ${adminPassword}`) {
    return res.status(401).json({ error: 'Não autorizado' });
  }

  const SUPABASE_URL = process.env.SUPABASE_URL;
  const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    return res.status(500).json({ error: 'Faltam variáveis SUPABASE_URL ou SUPABASE_SERVICE_ROLE_KEY no Vercel.' });
  }

  try {
    const supabaseRes = await fetch(`${SUPABASE_URL}/auth/v1/admin/users`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
        'apikey': SUPABASE_SERVICE_ROLE_KEY,
      }
    });

    if (!supabaseRes.ok) {
      const err = await supabaseRes.json();
      throw new Error(err.message || 'Erro ao buscar usuários no Supabase');
    }

    const data = await supabaseRes.json();
    const users = data.users || [];
    
    // Mapear apenas os dados necessários
    const leads = users.map(u => ({
      id: u.id,
      email: u.email,
      created_at: u.created_at,
      last_sign_in_at: u.last_sign_in_at
    }));

    // Ordenar do mais recente para o mais antigo
    leads.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

    return res.status(200).json({ leads });
  } catch (err) {
    console.error('Erro get-leads:', err);
    return res.status(500).json({ error: err.message });
  }
}
