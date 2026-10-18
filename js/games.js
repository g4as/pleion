/*
 * Yeni oyun:
 * 1) PLEION_GAMES listesine bir obje ekle.
 * 2) Kapak gorselini koy (image).
 *
 * Dev blog:
 * 1) Oyuna blog: true yaz. Kart otomatik blog/index.html?id=... acar.
 *    (href varsa kart o adrese gider; blog yine rozet olarak kalir.)
 * 2) data/{id}-blog.json icine yazi ekle. Gorseller data/{id}/ klasorunde (data/fromzero/attackripper.gif gibi).
 *
 *    { "posts": [{ "date": "2026-10-18", "title": "Baslik",
 *      "blocks": [{ "type": "text", "content": "yazi" },
 *                 { "type": "image", "src": "gorsel.gif", "alt": "" }] }] }
 *
 * Mystery kutulari: PLEION_MYSTERY_COUNT
 */

const PLEION_GAMES = [
  {
    id: 'fromzero',
    title: { tr: 'From ZeRo', en: 'From ZeRo' },
    desc: {
      tr: 'Dusmanlar uzerine geliyor peki neden? kimin umrunda ez gec!',
      en: 'enemies rushing at you but why? who cares, crush them!'
    },
    image: 'fromzero.gif',
    featured: true,
    blog: true
  },
  {
    id: 'AnathaAcademy',
    title: { tr: 'Anatha Academy', en: 'Anatha Academy' },
    desc: {
      tr: 'Anatha akademisinde 6 gece hayatta kalmaya çalış.',
      en: 'try to survive 6 nights at Anatha Academy.'
    },
    image: 'https://www.hxchector.com/wp-content/uploads/2013/10/another_haunted_hall.gif',
    featured: true,
    blog: true
  }
];

const PLEION_MYSTERY_COUNT = 1;

const PLEION_MYSTERY_COPY = [
  {
    title: { tr: '???', en: '???' },
    desc: {
      tr: 'yakinda... bi sey gelio ama simdilik sus. izle.',
      en: 'coming soon... something is cooking but we are not telling. watch.'
    }
  },
  {
    title: { tr: '???', en: '???' },
    desc: {
      tr: 'gizli proje. ne oldugunu bilen yok. stay tuned.',
      en: 'secret project. nobody knows what it is. stay tuned.'
    }
  }
];
