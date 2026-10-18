function getBlogGameId() {
  return new URLSearchParams(window.location.search).get('id') || '';
}

function getBlogGame() {
  const id = getBlogGameId();
  if (!id || typeof PLEION_GAMES === 'undefined') return null;
  return PLEION_GAMES.find((game) => game.id === id) || null;
}

function isAbsoluteUrl(src) {
  return /^(https?:)?\/\//i.test(src) || src.startsWith('data:');
}

function resolveSiteAsset(src) {
  if (!src) return '';
  if (isAbsoluteUrl(src) || src.startsWith('/') || src.startsWith('../')) return src;
  return `../${src}`;
}

function resolveBlogMedia(src, game) {
  if (!src) return '';
  if (isAbsoluteUrl(src) || src.startsWith('/') || src.startsWith('../')) return src;
  const dir = (game && game.blogMedia) || `data/${(game && game.id) || getBlogGameId()}`;
  return `../${dir}/${src}`;
}

function applyBlogPage() {
  const game = getBlogGame();
  const titleEl = document.getElementById('blogTitle');
  const subEl = document.getElementById('blogSubtitle');
  const imgEl = document.getElementById('blogHeroLogo');
  if (!titleEl) return;

  const name = game ? catalogText(game.title) : '';
  const title = game
    ? (catalogText(game.blogTitle) || translations[currentLang]['blog.title'].replace('{name}', name))
    : translations[currentLang]['blog.title'].replace('{name}', '');
  const subtitle = game
    ? (catalogText(game.blogSubtitle) || translations[currentLang]['blog.subtitle'])
    : translations[currentLang]['blog.subtitle'];

  titleEl.textContent = title.trim() || 'Dev Blog';
  if (subEl) subEl.textContent = subtitle;
  document.title = `${titleEl.textContent} — Pleion Games`;

  if (imgEl) {
    const src = game ? resolveSiteAsset(game.image) : '';
    if (src) {
      imgEl.src = src;
      imgEl.alt = name;
      imgEl.hidden = false;
    } else {
      imgEl.removeAttribute('src');
      imgEl.hidden = true;
    }
  }
}

function formatDate(dateStr) {
  const date = new Date(dateStr + 'T00:00:00');
  const locale = currentLang === 'en' ? 'en-US' : 'tr-TR';
  return date.toLocaleDateString(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
}

function renderBlock(block, game) {
  if (block.type === 'text') {
    const p = document.createElement('p');
    p.className = 'blog-text';
    p.textContent = catalogText(block.content) || '';
    return p;
  }

  if (block.type === 'image') {
    const figure = document.createElement('figure');
    figure.className = 'blog-figure';
    const img = document.createElement('img');
    img.className = 'blog-media';
    img.src = resolveBlogMedia(block.src, game);
    img.alt = catalogText(block.alt) || '';
    img.loading = 'lazy';
    figure.appendChild(img);
    return figure;
  }

  return null;
}

function renderPost(post, game) {
  const card = document.createElement('article');
  card.className = 'blog-post-card';

  const header = document.createElement('div');
  header.className = 'blog-post-header';

  const dateBadge = document.createElement('span');
  dateBadge.className = 'badge blog-date';
  dateBadge.textContent = formatDate(post.date);

  const title = document.createElement('h2');
  title.className = 'blog-post-title';
  title.textContent = catalogText(post.title);

  header.appendChild(dateBadge);
  header.appendChild(title);
  card.appendChild(header);

  const body = document.createElement('div');
  body.className = 'blog-post-body';

  (post.blocks || []).forEach((block) => {
    const el = renderBlock(block, game);
    if (el) body.appendChild(el);
  });

  card.appendChild(body);
  return card;
}

function showBlogEmpty(container) {
  container.innerHTML = `<p class="blog-empty">${escapeHtml(translations[currentLang]['blog.empty'])}</p>`;
}

let cachedBlogPosts = null;
let cachedBlogGame = null;

function renderCachedPosts() {
  const container = document.getElementById('blog-posts');
  if (!container) return;

  if (!cachedBlogPosts || cachedBlogPosts.length === 0) {
    showBlogEmpty(container);
    return;
  }

  container.innerHTML = '';
  cachedBlogPosts.forEach((post) => container.appendChild(renderPost(post, cachedBlogGame)));
}

async function loadBlogPosts() {
  const container = document.getElementById('blog-posts');
  if (!container) return;

  const game = getBlogGame();
  const id = (game && game.id) || getBlogGameId();
  if (!id) {
    cachedBlogPosts = [];
    cachedBlogGame = null;
    renderCachedPosts();
    return;
  }

  const jsonPath = (game && game.blogJson) || `../data/${id}-blog.json`;

  try {
    const response = await fetch(jsonPath);
    if (!response.ok) throw new Error('Failed to load');

    const data = await response.json();
    cachedBlogPosts = (data.posts || []).slice().sort((a, b) => b.date.localeCompare(a.date));
    cachedBlogGame = game;
    renderCachedPosts();
  } catch (_) {
    cachedBlogPosts = [];
    cachedBlogGame = game;
    renderCachedPosts();
  }
}

applyBlogPage();
loadBlogPosts();
