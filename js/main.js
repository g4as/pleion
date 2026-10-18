const heartSvg = '<svg class="inline-heart" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#FF6B9D" stroke="#2D3436" stroke-width="1.5"/></svg>';

const translations = {
  tr: {
    'nav.home': 'Ana Sayfa',
    'nav.games': 'Oyunlar',
    'nav.extensions': 'Eklentiler',
    'nav.about': 'Hakkimizda',
    'nav.contact': 'Iletisim',
    'hero.title': 'oyun oyundur dimi?',
    'hero.subtitle': 'az is cok laf gercek bir pleion ruhu..',
    'hero.cta': 'Oyunlara Bak',
    'games.title': 'Oyunlar',
    'games.subtitle': 'Simdilik {n} oyun projemiz var bitirince digerlerinede baslicaz sabir biraz..',
    'games.featured': 'Yeni',
    'games.mystery': '???',
    'games.game2.title': '???',
    'games.game2.desc': 'yakinda... bi sey gelio ama simdilik sus. izle.',
    'games.game3.title': '???',
    'games.game3.desc': 'gizli proje. ne oldugunu bilen yok. stay tuned.',
    'extensions.title': 'GDevelop Eklentileri',
    'extensions.subtitle': 'gdevelop eklentileri yapiyoruz. blog yok, githubda acik kaynak. sabir biraz..',
    'extensions.github': 'GitHub',
    'about.title': 'Biz Kimiz',
    'about.p1': `Birileri degiliz.. ama olmak icin elimizden geleni yapmaya calisiyoruz umarim bir gun ${heartSvg}<br>not: kedim kayboldu gordun mu?`,
    'about.statGames': 'Oyun',
    'about.statPlayers': 'Oyuncu',
    'about.statYear': 'Kurulus',
    'contact.title': 'Iletisim',
    'contact.subtitle': 'annem yabancilarla konusma dedi ama istersen mail atabilirsin',
    'contact.name': 'Ismin',
    'contact.email': 'E-posta',
    'contact.message': 'Ne Yazcan',
    'contact.send': 'Gonder',
    'contact.success': 'gitti mesajin! en kisa surede doneriz.',
    'contact.nobody': 'burayi kim kullaniyor ki?',
    'footer.slogan': 'sosyal medyalarimiz',
    'footer.rights': 'tum haklar sakli.',
    'blog.back': '← Siteye Don',
    'blog.title': '{name} Dev Blog',
    'blog.subtitle': 'gelistirme gunlugu. ne yaptik ne bozduk hepsi burada.',
    'blog.empty': 'henuz yazı yok galiba...',
    'games.blogHint': 'Dev Blog →'
  },
  en: {
    'nav.home': 'Home',
    'nav.games': 'Games',
    'nav.extensions': 'Extensions',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'hero.title': 'a game is a game right?',
    'hero.subtitle': 'No game no life',
    'hero.cta': 'Check Games',
    'games.title': 'Games',
    'games.subtitle': '{n} project for now, rest comes after we ship. patience.',
    'games.featured': 'New',
    'games.mystery': '???',
    'games.game2.title': '???',
    'games.game2.desc': 'coming soon... something is cooking but we are not telling. watch.',
    'games.game3.title': '???',
    'games.game3.desc': 'secret project. nobody knows what it is. stay tuned.',
    'extensions.title': 'GDevelop Extensions',
    'extensions.subtitle': 'we make gdevelop extensions. no blog, open source on github. patience..',
    'extensions.github': 'GitHub',
    'about.title': 'Who We Are',
    'about.p1': `we are not somebody yet.. but we try our best to become one someday ${heartSvg}<br>ps: my cat went missing, seen it?`,
    'about.statGames': 'Games',
    'about.statPlayers': 'Players',
    'about.statYear': 'Founded',
    'contact.title': 'Contact',
    'contact.subtitle': 'mom said dont talk to strangers but you can email if you want',
    'contact.name': 'Your Name',
    'contact.email': 'Email',
    'contact.message': 'Your Message',
    'contact.send': 'Send',
    'contact.success': 'message sent! we will hit you back soon.',
    'contact.nobody': 'who even uses this tho',
    'footer.slogan': 'our socials',
    'footer.rights': 'all rights reserved.',
    'blog.back': '← Back to Site',
    'blog.title': '{name} Dev Blog',
    'blog.subtitle': 'dev diary. what we built, what we broke — all here.',
    'blog.empty': 'no posts yet i guess...',
    'games.blogHint': 'Dev Blog →'
  }
};

let currentLang = localStorage.getItem('pleion-lang') || 'tr';

function catalogText(field) {
  if (!field) return '';
  if (typeof field === 'string') return field;
  return field[currentLang] || field.tr || field.en || '';
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function gameBlogHref(game) {
  if (game.blog && game.id) return `blog/index.html?id=${encodeURIComponent(game.id)}`;
  return '';
}

function gameCardHref(game) {
  if (game.href) return game.href;
  return gameBlogHref(game);
}

function createGameCard(game) {
  const title = catalogText(game.title);
  const desc = catalogText(game.desc);
  const featuredClass = game.featured ? ' game-card--featured' : '';
  const featuredBadge = game.featured
    ? `<span class="badge badge-hot">${escapeHtml(translations[currentLang]['games.featured'])}</span>`
    : '';
  const blogLabel = game.blogHint
    ? catalogText(game.blogHint)
    : (game.blog ? translations[currentLang]['games.blogHint'] : '');
  const blogBadge = blogLabel
    ? `<span class="badge badge-blog">${escapeHtml(blogLabel)}</span>`
    : '';
  const image = game.image
    ? `<img src="${escapeHtml(game.image)}" alt="${escapeHtml(title)}" class="game-logo">`
    : '';
  const href = gameCardHref(game);

  const article = `
    <article class="game-card${featuredClass}">
      <div class="game-card-img game-card-img--media">
        ${image}
        ${featuredBadge}
        ${blogBadge}
      </div>
      <div class="game-card-body">
        <h3>${escapeHtml(title)}</h3>
        <p>${escapeHtml(desc)}</p>
      </div>
    </article>
  `;

  if (href) {
    const wrap = document.createElement('a');
    wrap.href = href;
    wrap.className = 'game-card-link';
    wrap.innerHTML = article;
    return wrap;
  }

  const wrap = document.createElement('div');
  wrap.innerHTML = article;
  return wrap.firstElementChild;
}

function createMysteryCard(copy, variant) {
  const title = catalogText(copy.title);
  const desc = catalogText(copy.desc);
  const wrap = document.createElement('div');
  wrap.innerHTML = `
    <article class="game-card game-card--mystery">
      <div class="game-card-img game-card-img-${variant}">
        <div class="mystery-clouds" aria-hidden="true">
          <span class="cloud cloud-1"></span>
          <span class="cloud cloud-2"></span>
          <span class="cloud cloud-3"></span>
        </div>
        <span class="badge badge-mystery">${escapeHtml(translations[currentLang]['games.mystery'])}</span>
      </div>
      <div class="game-card-body game-card-body--mystery">
        <h3>${escapeHtml(title)}</h3>
        <p>${escapeHtml(desc)}</p>
      </div>
    </article>
  `;
  return wrap.firstElementChild;
}

function renderGames() {
  const grid = document.getElementById('gamesGrid');
  if (!grid || typeof PLEION_GAMES === 'undefined') return;

  grid.innerHTML = '';
  PLEION_GAMES.forEach((game) => grid.appendChild(createGameCard(game)));

  const mysteryCount = typeof PLEION_MYSTERY_COUNT === 'number' ? PLEION_MYSTERY_COUNT : 2;
  const copies = typeof PLEION_MYSTERY_COPY !== 'undefined' ? PLEION_MYSTERY_COPY : [];
  for (let i = 0; i < mysteryCount; i++) {
    const copy = copies[i % Math.max(copies.length, 1)] || { title: '???', desc: '' };
    grid.appendChild(createMysteryCard(copy, (i % 2) + 2));
  }

  const countEl = document.getElementById('statGamesCount');
  if (countEl) countEl.textContent = String(PLEION_GAMES.length);
}

function interpolateI18n(key, text) {
  if (key !== 'games.subtitle') return text;
  const n = typeof PLEION_GAMES !== 'undefined' ? PLEION_GAMES.length : 0;
  return text.replace('{n}', String(n));
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('pleion-lang', lang);
  document.documentElement.lang = lang;
  renderGames();

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.textContent = interpolateI18n(key, translations[lang][key]);
    }
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  document.querySelectorAll('[data-tr][data-en]').forEach(el => {
    el.textContent = lang === 'en' ? el.getAttribute('data-en') : el.getAttribute('data-tr');
  });

  const active = document.querySelector('.lang-active');
  const inactive = document.querySelector('.lang-inactive');
  if (lang === 'tr') {
    active.textContent = 'TR';
    inactive.textContent = 'EN';
  } else {
    active.textContent = 'EN';
    inactive.textContent = 'TR';
  }

  if (typeof applyBlogPage === 'function') applyBlogPage();
  if (typeof renderCachedPosts === 'function') renderCachedPosts();
}

document.querySelector('.lang-toggle').addEventListener('click', () => {
  setLanguage(currentLang === 'tr' ? 'en' : 'tr');
});

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.classList.toggle('active');
  menuToggle.setAttribute('aria-expanded', isOpen);
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

document.getElementById('contactForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
});

/* Scramble stat — unreadable animation */
const scrambleChars = '?0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%&*';
const statPlayers = document.getElementById('statPlayers');

if (statPlayers) {
  setInterval(() => {
    statPlayers.textContent = Array.from(
      { length: 3 },
      () => scrambleChars[Math.floor(Math.random() * scrambleChars.length)]
    ).join('');
  }, 70);
}

/* Logo click x5 — cat runs away */
let logoClicks = 0;
let catRunning = false;

const catSvg = `<svg width="80" height="60" viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="40" cy="38" rx="28" ry="20" fill="#FFE66D" stroke="#2D3436" stroke-width="3"/>
  <circle cx="40" cy="22" r="18" fill="#FFE66D" stroke="#2D3436" stroke-width="3"/>
  <polygon points="24,12 20,2 32,10" fill="#FFE66D" stroke="#2D3436" stroke-width="2"/>
  <polygon points="56,12 60,2 48,10" fill="#FFE66D" stroke="#2D3436" stroke-width="2"/>
  <circle cx="34" cy="20" r="3" fill="#2D3436"/>
  <circle cx="46" cy="20" r="3" fill="#2D3436"/>
  <path d="M36 26 Q40 30 44 26" stroke="#2D3436" stroke-width="2" fill="none"/>
  <path d="M12 38 Q8 30 14 26" stroke="#2D3436" stroke-width="2" fill="none"/>
  <path d="M68 38 Q72 30 66 26" stroke="#2D3436" stroke-width="2" fill="none"/>
</svg>`;

function playMeow() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const t = ctx.currentTime;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.frequency.setValueAtTime(720, t);
    osc.frequency.exponentialRampToValueAtTime(380, t + 0.12);
    osc.frequency.exponentialRampToValueAtTime(520, t + 0.22);
    osc.frequency.exponentialRampToValueAtTime(300, t + 0.38);

    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.exponentialRampToValueAtTime(0.35, t + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.42);

    osc.start(t);
    osc.stop(t + 0.42);
  } catch (_) {}
}

function spawnCat() {
  if (catRunning) return;
  catRunning = true;

  playMeow();

  const logo = document.getElementById('pleionLogo');
  const rect = logo.getBoundingClientRect();

  const cat = document.createElement('div');
  cat.className = 'escape-cat';
  cat.innerHTML = catSvg;
  cat.style.left = `${rect.left + rect.width / 2 - 40}px`;
  cat.style.top = `${rect.top + rect.height / 2 - 30}px`;
  document.body.appendChild(cat);

  cat.addEventListener('animationend', () => {
    cat.remove();
    catRunning = false;
  });
}

const pleionLogo = document.getElementById('pleionLogo');

pleionLogo?.addEventListener('click', () => {
  pleionLogo.classList.remove('logo-shake');
  void pleionLogo.offsetWidth;
  pleionLogo.classList.add('logo-shake');

  logoClicks++;
  if (logoClicks >= 5) {
    spawnCat();
    logoClicks = 0;
  }
});

/* Runaway X button */
const runawayX = document.querySelector('.runaway-x');
let xOffsetX = 0;
let xOffsetY = 0;

function fleeX() {
  const range = 120;
  xOffsetX += (Math.random() - 0.5) * range * 2;
  xOffsetY += (Math.random() - 0.5) * range * 2;
  xOffsetX = Math.max(-180, Math.min(180, xOffsetX));
  xOffsetY = Math.max(-80, Math.min(80, xOffsetY));
  runawayX.style.transform = `translate(${xOffsetX}px, ${xOffsetY}px)`;
}

runawayX?.addEventListener('mouseenter', fleeX);
runawayX?.addEventListener('click', (e) => {
  e.preventDefault();
  fleeX();
});

setLanguage(currentLang);
