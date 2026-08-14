const heartSvg = '<svg class="inline-heart" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#FF6B9D" stroke="#2D3436" stroke-width="1.5"/></svg>';

const translations = {
  tr: {
    'nav.home': 'Ana Sayfa',
    'nav.games': 'Oyunlar',
    'nav.about': 'Hakkimizda',
    'nav.contact': 'Iletisim',
    'hero.title': 'oyun oyundur dimi?',
    'hero.subtitle': 'az is cok laf gercek bir pleion ruhu..',
    'hero.cta': 'Oyunlara Bak',
    'games.title': 'Oyunlar',
    'games.subtitle': 'Simdilik 1 oyun projemiz var bitirince digerlerinede baslicaz sabir biraz..',
    'games.featured': 'Yeni',
    'games.mystery': '???',
    'games.game1.title': 'From ZeRo',
    'games.game1.desc': 'Dusmanlar uzerine geliyor peki neden? kimin umrunda ez gec!',
    'games.game1.blogHint': 'Dev Blog →',
    'games.game2.title': '???',
    'games.game2.desc': 'yakinda... bi sey gelio ama simdilik sus. izle.',
    'games.game3.title': '???',
    'games.game3.desc': 'gizli proje. ne oldugunu bilen yok. stay tuned.',
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
    'blog.title': 'From ZeRo Dev Blog',
    'blog.subtitle': 'gelistirme gunlugu. ne yaptik ne bozduk hepsi burada.'
  },
  en: {
    'nav.home': 'Home',
    'nav.games': 'Games',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'hero.title': 'a game is a game right?',
    'hero.subtitle': 'No game no life',
    'hero.cta': 'Check Games',
    'games.title': 'Games',
    'games.subtitle': 'one project for now, rest comes after we ship. patience.',
    'games.featured': 'New',
    'games.mystery': '???',
    'games.game1.title': 'From ZeRo',
    'games.game1.desc': 'enemies rushing at you but why? who cares, crush them!',
    'games.game1.blogHint': 'Dev Blog →',
    'games.game2.title': '???',
    'games.game2.desc': 'coming soon... something is cooking but we are not telling. watch.',
    'games.game3.title': '???',
    'games.game3.desc': 'secret project. nobody knows what it is. stay tuned.',
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
    'blog.title': 'From ZeRo Dev Blog',
    'blog.subtitle': 'dev diary. what we built, what we broke — all here.'
  }
};

let currentLang = localStorage.getItem('pleion-lang') || 'tr';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('pleion-lang', lang);
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
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
