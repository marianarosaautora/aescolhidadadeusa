const fs = require('fs');

let html = fs.readFileSync('public/membros.html', 'utf8');

// 1. Replace hardcoded blog HTML with a dynamic container
// We find <div class="blog-feat"> until the end of the blog section.
// Actually, the blog section ends just before:
//    <section id="personagens" class="membros-section">
// Or we can just replace <div class="blog-feat">...</div> and <div class="blog-grid">...</div>
// Let's be safer and replace from <div class="blog-feat"> up to <div class="blog-modal-overlay"
const blogRegex = /<div class="blog-feat">[\s\S]*?(?=<div class="blog-modal-overlay" id="blogModal">)/;
const newBlogHtml = `<div id="dynamicBlogContainer"></div>\n          `;
html = html.replace(blogRegex, newBlogHtml);

// 2. Replace hardcoded JS arrays with fetch logic
const dataRegex = /\/\/ ══ DADOS DO SITE ══[\s\S]*?(?=\/\/ ══ SUPABASE CONFIG E AUTENTICAÇÃO ══)/;

const newDataJs = `// ══ DADOS DO SITE (FETCH) ══
      let BLOG_POSTS = [];
      let GALLERY_ITEMS = [];
      let PIGMENTADORAS = [];
      let REINOS_DATA = [];

      async function loadSiteData() {
        try {
          const res = await fetch('/content.json');
          const data = await res.json();
          BLOG_POSTS = data.membros.blog;
          GALLERY_ITEMS = data.membros.gallery;
          PIGMENTADORAS = data.membros.pigmentadoras;
          REINOS_DATA = data.membros.reinos;

          renderBlog();
          renderGallery();
          renderPigmentadoras();
          renderReinos();
          
          // Re-observe elements for animations
          if(typeof observer !== 'undefined') {
            document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
          }
        } catch (err) {
          console.error("Failed to load content.json", err);
        }
      }

      function renderBlog() {
        const container = document.getElementById("dynamicBlogContainer");
        if (!container) return;

        const featured = BLOG_POSTS.find(p => p.featured) || BLOG_POSTS[0];
        const others = BLOG_POSTS.filter(p => p !== featured);

        let htmlStr = '<div class="blog-feat">' +
          '<div class="blog-feat-content reveal">' +
            '<div class="blog-feat-tag">' +
              '<span class="blog-tag featured">Exclusivo</span>' +
              '<span class="blog-tag">' + featured.cat + '</span>' +
            '</div>' +
            '<h3 class="blog-feat-title">' + featured.title + '</h3>' +
            '<p class="blog-feat-excerpt">' + featured.excerpt + '</p>' +
            '<a href="#" class="btn-gold" onclick="openBlogModal(' + featured.id + '); return false;">Ler Diário</a>' +
          '</div>' +
          '<div class="blog-feat-particles" id="featParticles"></div>' +
        '</div>' +
        '<div class="blog-grid">';

        others.forEach((p, i) => {
          const delay = (i + 1) * 0.1;
          const numStr = (i + 2).toString().padStart(2, '0');
          htmlStr += '<div class="blog-card reveal" style="transition-delay: ' + delay + 's">' +
            '<div class="blog-card-num">' + numStr + '</div>' +
            '<div class="blog-card-cat">' + p.cat + '</div>' +
            '<h3 class="blog-card-title">' + p.title + '</h3>' +
            '<p class="blog-card-excerpt">' + p.excerpt + '</p>' +
            '<a href="#" class="blog-card-link" onclick="openBlogModal(' + p.id + '); return false;">Ler mais &rarr;</a>' +
          '</div>';
        });

        htmlStr += '</div>';
        container.innerHTML = htmlStr;

        // Re-init particles
        const fp = document.getElementById("featParticles");
        if(fp) {
          for (let i = 0; i < 20; i++) {
            const pEl = document.createElement("div");
            pEl.className = "fp";
            const fx = (Math.random() - 0.5) * 60, fy = -(20 + Math.random() * 60);
            pEl.style.cssText = 'left:' + (Math.random() * 100) + '%;top:' + (Math.random() * 100) + '%;--d:' + (4 + Math.random() * 6) + 's;--dl:' + (Math.random() * 4) + 's;--fx:' + fx + 'px;--fy:' + fy + 'px;--oa:' + (0.1 + Math.random() * 0.3) + ';--ob:' + (0.5 + Math.random() * 0.5) + ';';
            fp.appendChild(pEl);
          }
        }
      }

      `;

html = html.replace(dataRegex, newDataJs);

// 3. Remove the initial render calls inside INICIALIZAÇÃO since loadSiteData handles it
// We need to remove GALLERY RENDER, PIGMENTADORAS RENDER, REINOS RENDER
const renderRegex = /\/\/ ══ GALLERY RENDER ══[\s\S]*?(?=\/\/ ══ SMOOTH NAV ══)/;

const newRenderJs = `// ══ RENDER FUNCTIONS ══
        function renderGallery() {
          const grid = document.getElementById("galleryGrid");
          if(!grid) return;
          grid.innerHTML = "";
          GALLERY_ITEMS.forEach((it, i) => {
            const div = document.createElement("div");
            div.className = "gallery-item reveal";
            div.style.transitionDelay = (i * 0.1) + "s";
            div.innerHTML = '<img src="' + it.thumb + '" alt="' + it.title + '"><div class="gallery-overlay"><div class="gallery-item-title">' + it.title + '</div><button class="gallery-download-btn" onclick="triggerDownload(\\'' + it.download + '\\',\\'' + it.title + '\\')"><span>⬇</span> Download</button></div>';
            grid.appendChild(div);
          });
        }

        function renderPigmentadoras() {
          const carousel = document.getElementById("pigmentCarousel");
          if(!carousel) return;
          carousel.innerHTML = "";
          PIGMENTADORAS.forEach((p, i) => {
            const card = document.createElement("div");
            card.className = "pigment-card reveal";
            card.style.cssText = '--pc:' + (p.color || p.pc) + ';--pc-bg:' + (p.colorBg || p.pcBg) + ';--pc-stroke:' + (p.color || p.pc) + '55;--pc-glow:' + (p.color || p.pc) + '33;transition-delay:' + (i * 0.06) + 's;';
            card.innerHTML = '<div class="pigment-card-top"><div class="pigment-card-bg"></div><div class="pigment-card-rune">' + p.name.charAt(0) + '</div><div class="pigment-card-number">' + p.num + '</div><div class="pigment-card-gem"><svg viewBox="0 0 24 24"><use href="#gem"/></svg></div></div><div class="pigment-card-body"><div class="pigment-card-realm">' + p.realm + '</div><div class="pigment-card-name">' + p.name + '</div><div class="pigment-card-power">' + p.power + '</div><p class="pigment-card-desc">' + p.desc + '</p></div>';
            carousel.appendChild(card);
          });
        }

        function renderReinos() {
          const reinosGrid = document.getElementById("reinosGridExclusivo");
          if(!reinosGrid) return;
          reinosGrid.innerHTML = "";
          REINOS_DATA.forEach((r, i) => {
            const delay = i * 0.1 + 's';
            const div = document.createElement("div");
            div.className = "reino-card-exclusivo reveal";
            div.style.cssText = '--rc:' + r.rc + ';--rc-bg:' + r.rcBg + ';--rc-border:' + r.rc + '22;--card-delay:' + delay + ';transition-delay:' + delay + ';';
            let loreHtml = r.lore.map((l) => '<div class="reino-lore-item"><span class="lore-icon">' + l.icon + '</span><p class="lore-texto">' + l.texto + '</p></div>').join("");
            div.innerHTML = '<div class="reino-visual"><div class="reino-visual-bg"></div><div class="reino-visual-pattern"></div><div class="reino-sigla">' + r.sigla + '</div><div class="reino-numero">' + r.num + '</div><div class="reino-gem-icon"><svg viewBox="0 0 24 24"><use href="#gem"/></svg></div></div><div class="reino-corpo"><div class="reino-nome">' + r.nome + '</div><div class="reino-gema">' + r.gema + '</div><div class="reino-pigmentadora">✦ ' + r.pigmentadora + '</div><p class="reino-descricao">' + r.descricao + '</p><div class="reino-lore"><div class="reino-lore-titulo">Lore exclusivo</div>' + loreHtml + '</div></div>';
            reinosGrid.appendChild(div);
          });
        }

        loadSiteData();
        
        `;

html = html.replace(renderRegex, newRenderJs);

fs.writeFileSync('public/membros.html', html, 'utf8');
console.log('membros.html updated successfully.');
