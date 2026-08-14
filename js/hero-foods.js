const heroFoods = [
  {
    name: 'Simit',
    svg: `<svg viewBox="0 0 320 280" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="160" cy="150" rx="100" ry="100" fill="#FFE66D" stroke="#2D3436" stroke-width="4"/>
      <ellipse cx="160" cy="150" rx="55" ry="55" fill="#FFFFFF" stroke="#2D3436" stroke-width="4"/>
      <circle cx="120" cy="110" r="6" fill="#D4A574" stroke="#2D3436" stroke-width="2"/>
      <circle cx="200" cy="120" r="5" fill="#D4A574" stroke="#2D3436" stroke-width="2"/>
      <circle cx="160" cy="200" r="6" fill="#D4A574" stroke="#2D3436" stroke-width="2"/>
      <circle cx="100" cy="170" r="5" fill="#D4A574" stroke="#2D3436" stroke-width="2"/>
      <circle cx="220" cy="175" r="6" fill="#D4A574" stroke="#2D3436" stroke-width="2"/>
      <circle cx="180" cy="90" r="5" fill="#D4A574" stroke="#2D3436" stroke-width="2"/>
    </svg>`
  },
  {
    name: 'Lahmacun',
    svg: `<svg viewBox="0 0 320 280" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="160" cy="155" rx="120" ry="70" fill="#FDCB6E" stroke="#2D3436" stroke-width="4"/>
      <ellipse cx="160" cy="150" rx="105" ry="58" fill="#E17055" stroke="#2D3436" stroke-width="3"/>
      <circle cx="130" cy="140" r="8" fill="#FFE66D" stroke="#2D3436" stroke-width="2"/>
      <circle cx="190" cy="135" r="7" fill="#55EFC4" stroke="#2D3436" stroke-width="2"/>
      <circle cx="160" cy="165" r="6" fill="#FF7675" stroke="#2D3436" stroke-width="2"/>
      <circle cx="110" cy="155" r="5" fill="#FFE66D" stroke="#2D3436" stroke-width="2"/>
      <circle cx="210" cy="160" r="6" fill="#55EFC4" stroke="#2D3436" stroke-width="2"/>
      <path d="M60 155 Q160 100 260 155" stroke="#2D3436" stroke-width="3" fill="none" stroke-linecap="round"/>
    </svg>`
  },
  {
    name: 'Baklava',
    svg: `<svg viewBox="0 0 320 280" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="70" y="120" width="180" height="100" rx="8" fill="#FDCB6E" stroke="#2D3436" stroke-width="4"/>
      <line x1="70" y1="145" x2="250" y2="145" stroke="#2D3436" stroke-width="2"/>
      <line x1="70" y1="170" x2="250" y2="170" stroke="#2D3436" stroke-width="2"/>
      <line x1="70" y1="195" x2="250" y2="195" stroke="#2D3436" stroke-width="2"/>
      <line x1="115" y1="120" x2="115" y2="220" stroke="#2D3436" stroke-width="2"/>
      <line x1="160" y1="120" x2="160" y2="220" stroke="#2D3436" stroke-width="2"/>
      <line x1="205" y1="120" x2="205" y2="220" stroke="#2D3436" stroke-width="2"/>
      <circle cx="115" cy="145" r="5" fill="#D4A574" stroke="#2D3436" stroke-width="2"/>
      <circle cx="160" cy="170" r="5" fill="#D4A574" stroke="#2D3436" stroke-width="2"/>
      <circle cx="205" cy="195" r="5" fill="#D4A574" stroke="#2D3436" stroke-width="2"/>
      <path d="M100 120 L160 90 L220 120" fill="#FFE66D" stroke="#2D3436" stroke-width="3"/>
    </svg>`
  },
  {
    name: 'Doner',
    svg: `<svg viewBox="0 0 320 280" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="145" y="50" width="30" height="180" rx="6" fill="#636E72" stroke="#2D3436" stroke-width="4"/>
      <ellipse cx="160" cy="140" rx="55" ry="70" fill="#E17055" stroke="#2D3436" stroke-width="4"/>
      <path d="M110 100 Q160 90 210 100" stroke="#D63031" stroke-width="8" fill="none" stroke-linecap="round"/>
      <path d="M108 130 Q160 118 212 130" stroke="#FDCB6E" stroke-width="8" fill="none" stroke-linecap="round"/>
      <path d="M110 160 Q160 148 210 160" stroke="#E17055" stroke-width="8" fill="none" stroke-linecap="round"/>
      <path d="M108 190 Q160 178 212 190" stroke="#D63031" stroke-width="8" fill="none" stroke-linecap="round"/>
      <rect x="60" y="220" width="200" height="20" rx="6" fill="#FFE66D" stroke="#2D3436" stroke-width="3"/>
    </svg>`
  },
  {
    name: 'Cay',
    svg: `<svg viewBox="0 0 320 280" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M120 80 L140 220 Q160 235 180 220 L200 80 Z" fill="#FFFFFF" stroke="#2D3436" stroke-width="4"/>
      <path d="M130 100 L145 200 Q160 210 175 200 L190 100 Z" fill="#C0392B" stroke="#2D3436" stroke-width="2"/>
      <ellipse cx="160" cy="80" rx="42" ry="12" fill="#FFFFFF" stroke="#2D3436" stroke-width="4"/>
      <path d="M200 140 Q240 130 245 160 Q240 190 200 180" fill="none" stroke="#2D3436" stroke-width="4"/>
      <ellipse cx="160" cy="220" rx="50" ry="10" fill="#FFE66D" stroke="#2D3436" stroke-width="3"/>
      <path d="M150 70 Q160 55 170 70" stroke="#95E1D3" stroke-width="3" fill="none" stroke-linecap="round"/>
      <path d="M155 60 Q160 45 165 58" stroke="#95E1D3" stroke-width="2" fill="none" stroke-linecap="round"/>
    </svg>`
  },
  {
    name: 'Kofte',
    svg: `<svg viewBox="0 0 320 280" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="160" cy="210" rx="110" ry="25" fill="#FFE66D" stroke="#2D3436" stroke-width="4"/>
      <ellipse cx="160" cy="195" rx="100" ry="18" fill="#FFFFFF" stroke="#2D3436" stroke-width="3"/>
      <circle cx="110" cy="170" r="28" fill="#8B5E3C" stroke="#2D3436" stroke-width="4"/>
      <circle cx="160" cy="155" r="30" fill="#A0522D" stroke="#2D3436" stroke-width="4"/>
      <circle cx="210" cy="170" r="28" fill="#8B5E3C" stroke="#2D3436" stroke-width="4"/>
      <path d="M100 160 Q110 150 120 160" stroke="#6D4C2A" stroke-width="2" fill="none"/>
      <path d="M150 145 Q160 135 170 145" stroke="#6D4C2A" stroke-width="2" fill="none"/>
      <path d="M200 160 Q210 150 220 160" stroke="#6D4C2A" stroke-width="2" fill="none"/>
      <rect x="130" y="120" width="60" height="8" rx="3" fill="#55EFC4" stroke="#2D3436" stroke-width="2" transform="rotate(-10 160 124)"/>
    </svg>`
  },
  {
    name: 'Menemen',
    svg: `<svg viewBox="0 0 320 280" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="160" cy="190" rx="120" ry="35" fill="#636E72" stroke="#2D3436" stroke-width="4"/>
      <path d="M70 190 Q160 130 250 190" fill="#FF7675" stroke="#2D3436" stroke-width="4"/>
      <ellipse cx="160" cy="175" rx="90" ry="25" fill="#FFE66D" stroke="#2D3436" stroke-width="3"/>
      <circle cx="130" cy="165" r="12" fill="#E17055" stroke="#2D3436" stroke-width="2"/>
      <circle cx="190" cy="160" r="10" fill="#E17055" stroke="#2D3436" stroke-width="2"/>
      <circle cx="160" cy="175" r="8" fill="#E17055" stroke="#2D3436" stroke-width="2"/>
      <rect x="250" y="150" width="15" height="60" rx="4" fill="#636E72" stroke="#2D3436" stroke-width="3"/>
      <path d="M80 130 Q160 110 240 130" stroke="#95E1D3" stroke-width="4" fill="none" stroke-linecap="round" opacity="0.6"/>
    </svg>`
  },
  {
    name: 'Pide',
    svg: `<svg viewBox="0 0 320 280" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M60 180 Q160 80 260 180 L240 210 Q160 230 80 210 Z" fill="#FDCB6E" stroke="#2D3436" stroke-width="4"/>
      <path d="M80 175 Q160 100 240 175 L225 200 Q160 215 95 200 Z" fill="#E17055" stroke="#2D3436" stroke-width="3"/>
      <ellipse cx="160" cy="165" rx="40" ry="15" fill="#FFE66D" stroke="#2D3436" stroke-width="2"/>
      <circle cx="130" cy="170" r="6" fill="#55EFC4" stroke="#2D3436" stroke-width="2"/>
      <circle cx="190" cy="168" r="5" fill="#55EFC4" stroke="#2D3436" stroke-width="2"/>
      <line x1="160" y1="130" x2="160" y2="195" stroke="#D4A574" stroke-width="3"/>
    </svg>`
  },
  {
    name: 'Lokum',
    svg: `<svg viewBox="0 0 320 280" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="80" y="160" width="160" height="20" rx="4" fill="#FFFFFF" stroke="#2D3436" stroke-width="3"/>
      <rect x="90" y="130" width="45" height="35" rx="6" fill="#FF6B9D" stroke="#2D3436" stroke-width="3"/>
      <rect x="140" y="125" width="45" height="40" rx="6" fill="#4ECDC4" stroke="#2D3436" stroke-width="3"/>
      <rect x="190" y="130" width="45" height="35" rx="6" fill="#FFE66D" stroke="#2D3436" stroke-width="3"/>
      <circle cx="112" cy="147" r="4" fill="#FFFFFF" opacity="0.6"/>
      <circle cx="162" cy="145" r="4" fill="#FFFFFF" opacity="0.6"/>
      <circle cx="212" cy="147" r="4" fill="#FFFFFF" opacity="0.6"/>
      <path d="M100 120 L112 130 M160 115 L162 125 M220 120 L212 130" stroke="#D4A574" stroke-width="2"/>
    </svg>`
  },
  {
    name: 'Manti',
    svg: `<svg viewBox="0 0 320 280" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="160" cy="200" rx="110" ry="30" fill="#FFE66D" stroke="#2D3436" stroke-width="4"/>
      <ellipse cx="160" cy="188" rx="100" ry="22" fill="#FFFFFF" stroke="#2D3436" stroke-width="3"/>
      <path d="M160 188 Q160 150 160 130" stroke="#FF7675" stroke-width="6" fill="none" stroke-linecap="round"/>
      <circle cx="110" cy="175" r="18" fill="#FDCB6E" stroke="#2D3436" stroke-width="3"/>
      <circle cx="160" cy="168" r="20" fill="#FDCB6E" stroke="#2D3436" stroke-width="3"/>
      <circle cx="210" cy="175" r="18" fill="#FDCB6E" stroke="#2D3436" stroke-width="3"/>
      <path d="M110 175 Q110 160 110 155" stroke="#2D3436" stroke-width="2" fill="none"/>
      <path d="M160 168 Q160 150 160 145" stroke="#2D3436" stroke-width="2" fill="none"/>
      <path d="M210 175 Q210 160 210 155" stroke="#2D3436" stroke-width="2" fill="none"/>
      <circle cx="100" cy="130" r="5" fill="#E17055" stroke="#2D3436" stroke-width="2"/>
      <circle cx="220" cy="125" r="4" fill="#E17055" stroke="#2D3436" stroke-width="2"/>
    </svg>`
  }
];

function initHeroFood() {
  const container = document.getElementById('heroFood');
  if (!container) return;

  const food = heroFoods[Math.floor(Math.random() * heroFoods.length)];
  container.innerHTML = food.svg + `<span class="hero-food-label">${food.name}</span>`;
}

initHeroFood();
