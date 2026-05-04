# ✦ A Escolhida da Deusa — Site Completo + CMS

Site da Mariana Rosa com três camadas: página pública (SEO), área exclusiva protegida e painel de controle.

---

## Arquitetura do sistema

```
/public
├── index.html       ← Página pública (SEO, formulário de cadastro)
├── membros.html     ← Área exclusiva (protegida por Supabase Auth)
├── content.json     ← Fonte da verdade — todos os textos editáveis
└── src/assets/      ← Imagens do site

/admin
└── index.html       ← Painel de controle (CMS da cliente)

/api
├── save-content.js  ← Salva content.json no GitHub → dispara deploy
└── upload-image.js  ← Upload de imagens no GitHub
```

---

## Como funciona cada página

**index.html — Página pública**
Aparece para todo mundo e é indexada pelo Google. SEO completo com meta tags, Open Graph, Twitter Card e Schema.org. O formulário de email usa Supabase Auth Magic Link: ao cadastrar, o Supabase envia um email automático com link para membros.html. Textos carregados do content.json via fetch, editáveis pelo painel.

**membros.html — Área exclusiva**
Tem noindex (não aparece no Google). Ao abrir, verifica imediatamente a sessão do Supabase. Se não autenticado, mostra tela de bloqueio com instrução para cadastrar. Se autenticado, libera o conteúdo completo (blog, galeria, pigmentadoras, reinos). Email do usuário aparece no header com botão de logout. Conteúdo carregado do content.json.

**admin/index.html — Painel de controle**
Protegido por senha configurada como variável de ambiente no Vercel. Permite editar o hero da página principal, sinopse, tropes, link de compra, posts do diário, galeria, pigmentadoras e reinos. Ao salvar, faz commit no GitHub e o Vercel faz deploy automático em ~30 segundos.

---

## Deploy completo — passo a passo

### 1. Criar conta no Supabase (gratuito)

1. Acesse supabase.com e crie uma conta
2. Crie um novo projeto
3. Vá em Settings → API e copie:
   - **Project URL** (ex: `https://xyzxyz.supabase.co`)
   - **anon public key** (chave longa)

### 2. Configurar o Magic Link no Supabase

No painel do Supabase:
1. Vá em **Authentication → URL Configuration**
2. Em **Site URL**: `https://seudominio.vercel.app`
3. Em **Redirect URLs** adicione: `https://seudominio.vercel.app/membros.html`
4. Opcionalmente personalize o email em **Authentication → Email Templates → Magic Link**

### 3. Criar repositório no GitHub

1. Acesse github.com/new
2. Crie um repositório **privado** (ex: `mariana-rosa-site`)
3. Faça upload de todos os arquivos desta pasta

### 4. Gerar Token do GitHub

1. Acesse github.com/settings/tokens
2. Generate new token (classic)
3. Nome: `vercel-cms`, permissão: repo (marque tudo em repo)
4. Copie e guarde — aparece só uma vez

### 5. Conectar ao Vercel

1. Acesse vercel.com e faça login com GitHub
2. Add New Project → selecione o repositório
3. Clique em Deploy

### 6. Variáveis de ambiente no Vercel

Em Settings → Environment Variables, adicione:

| Variável         | Valor                          |
|------------------|--------------------------------|
| GITHUB_TOKEN     | Token gerado no passo 4        |
| GITHUB_OWNER     | Seu usuário GitHub             |
| GITHUB_REPO      | Nome do repositório            |
| ADMIN_PASSWORD   | Senha do painel CMS (você escolhe) |

Após adicionar, clique em Redeploy.

### 7. Atualizar credenciais nos arquivos HTML

Após o deploy, você terá uma URL como `https://mariana-rosa.vercel.app`.

**Em public/index.html** — localize e substitua:
```js
const SUPABASE_URL      = 'https://SEU-PROJETO.supabase.co';
const SUPABASE_ANON_KEY = 'sua-anon-key-aqui';
const MEMBROS_URL       = 'https://aescolhidadadeusa.com.br/membros.html';
```

**Em public/membros.html** — localize e substitua:
```js
const SUPABASE_URL      = 'https://SEU-PROJETO.supabase.co';
const SUPABASE_ANON_KEY = 'sua-anon-key-aqui';
```

**Em admin/index.html** — localize e substitua:
```js
const API_BASE = 'https://SEU-DOMINIO.vercel.app';
```

Faça commit dessas alterações. O Vercel fará um novo deploy automaticamente.

---

## SEO — O que já está configurado

O index.html já vem com title otimizado, meta description, meta keywords, Open Graph completo (Facebook, WhatsApp, LinkedIn), Twitter Card com imagem grande, Schema.org Book (Google pode mostrar rich results com estrelas e preço), Schema.org WebSite para Sitelinks e canonical URL.

**Para maximizar o SEO:**
- Substitua `https://aescolhidadadeusa.com.br` pelo domínio real em todos os meta tags do index.html
- Adicione uma imagem `og-cover.jpg` em `src/assets/` com tamanho 1200×630px
- Configure um domínio próprio no Vercel (Settings → Domains)

---

## Fluxo completo do usuário

```
Visitante acessa index.html
    → Lê a sinopse, conhece o livro
    → Digita o email no formulário
    → Supabase envia email com link mágico
    → Visitante clica no link no email
    → membros.html abre → Supabase valida o token
    → Conteúdo exclusivo é liberado ✓
```

---

## Troubleshooting

**"Acesso não encontrado" na página de membros**
O link do email expirou (válido por 1 hora por padrão). O visitante deve cadastrar o email novamente na index.

**Painel deu erro "Não autorizado"**
A senha digitada não bate com ADMIN_PASSWORD configurada no Vercel.

**As alterações não aparecem no site**
Aguarde 30 a 60 segundos. Acompanhe em tempo real na aba Deployments do Vercel.

**Email não chegou**
Verifique o spam. No Supabase, vá em Authentication → Users para confirmar se o email foi registrado.

**Imagens não aparecem**
Verifique se os caminhos em content.json (campos thumb e download) correspondem exatamente aos arquivos em `public/src/assets/gallery/`.

**Quero aumentar o tempo de expiração do link**
No Supabase, vá em Authentication → Settings → JWT expiry e aumente o valor.
