function formatDate(dateStr) {
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('tr-TR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
}

function renderBlock(block) {
  if (block.type === 'text') {
    const p = document.createElement('p');
    p.className = 'blog-text';
    p.textContent = block.content;
    return p;
  }

  if (block.type === 'image') {
    const figure = document.createElement('figure');
    figure.className = 'blog-figure';
    const img = document.createElement('img');
    img.className = 'blog-media';
    img.src = block.src;
    img.alt = block.alt || '';
    img.loading = 'lazy';
    figure.appendChild(img);
    return figure;
  }

  return null;
}

function renderPost(post) {
  const card = document.createElement('article');
  card.className = 'blog-post-card';

  const header = document.createElement('div');
  header.className = 'blog-post-header';

  const dateBadge = document.createElement('span');
  dateBadge.className = 'badge blog-date';
  dateBadge.textContent = formatDate(post.date);

  const title = document.createElement('h2');
  title.className = 'blog-post-title';
  title.textContent = post.title;

  header.appendChild(dateBadge);
  header.appendChild(title);
  card.appendChild(header);

  const body = document.createElement('div');
  body.className = 'blog-post-body';

  (post.blocks || []).forEach(block => {
    const el = renderBlock(block);
    if (el) body.appendChild(el);
  });

  card.appendChild(body);
  return card;
}

async function loadBlogPosts() {
  const container = document.getElementById('blog-posts');
  if (!container) return;

  try {
    const response = await fetch('../data/fromzero-blog.json');
    if (!response.ok) throw new Error('Failed to load');

    const data = await response.json();
    const posts = (data.posts || []).slice().sort((a, b) => b.date.localeCompare(a.date));

    if (posts.length === 0) {
      container.innerHTML = '<p class="blog-empty">henuz yazı yok galiba...</p>';
      return;
    }

    container.innerHTML = '';
    posts.forEach(post => container.appendChild(renderPost(post)));
  } catch (_) {
    container.innerHTML = '<p class="blog-empty">henuz yazı yok galiba...</p>';
  }
}

loadBlogPosts();
