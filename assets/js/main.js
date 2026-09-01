/* ============================================
   PUTRI SHREYA — Main JS
   Handles: navbar, footer, active state, portfolio data, forms
   ============================================ */

const PORTFOLIO_DATA = [
  {
    role: 'Community Manager',
    project: 'SOCIETY',
    category: 'Web3 Community',
    badgeClass: 'badge-community',
    logo: 'assets/images/logo-society.png',
    description:
      'Lead end-to-end community operations for SOCIETY, ensuring all member initiatives align with the project\'s overarching vision. Direct and mentor the moderation team while fostering a cohesive, engaged, and goal-oriented community environment.',
    icon: '👥',
  },
  {
    role: 'Early Contributor & Content Creator',
    project: 'GoDark',
    category: 'DEX',
    badgeClass: 'badge-dex',
    logo: 'assets/images/logo-godark.jpg',
    description:
      'Created educational & promotional content on X (Twitter) that significantly boosted project visibility and brand awareness. Drove community growth through engaging Web3 campaigns and active ecosystem support.',
    icon: '🖊️',
  },
  {
    role: 'Early Contributor & Content Creator',
    project: 'NeoSoul',
    category: 'AI Agent Economy',
    badgeClass: 'badge-ai',
    logo: 'assets/images/logo-neosoul.jpg',
    description:
      'Produced creative social media content to boost brand visibility, drive user acquisition, and expand community awareness. Collaborated with teams to deliver clear project updates while positively representing the brand across the Web3 ecosystem.',
    icon: '⚡',
  },
  {
    role: 'Hype Herald',
    project: 'Polana Network',
    category: 'Layer 0',
    badgeClass: 'badge-layer0',
    logo: 'assets/images/logo-polana.png',
    description:
      'Delivered project updates, campaigns, and educational content on X (Twitter) to expand project reach. Built cross-community relationships and supported strategic initiatives to drive ecosystem growth and engagement.',
    icon: '📢',
  },
  {
    role: 'Community Management',
    project: 'MECCA',
    category: 'Crypto App',
    badgeClass: 'badge-crypto',
    logo: 'assets/images/logo-mecca.jpg',
    description:
      'Delivered project updates, campaigns, and educational content on X (Twitter) to expand project reach. Built cross-community relationships and supported strategic initiatives to drive ecosystem growth and engagement.',
    icon: '🌍',
  },
];

const KEY_FEATURES = [
  {
    title: 'Innovation',
    icon: '💡',
    description: 'Innovation through cutting-edge technologies and forward-thinking approaches in Web3 development.',
  },
  {
    title: 'Collaboration',
    icon: '🤝',
    description: 'Collaboration with diverse teams, fostering inclusive environments for meaningful project outcomes.',
  },
  {
    title: 'Creativity',
    icon: '✨',
    description: 'Creativity in crafting unique solutions that address complex challenges in the digital landscape.',
  },
];

// ---- Render Navbar ----
function renderNavbar() {
  const placeholder = document.getElementById('navbar-placeholder');
  if (!placeholder) return;

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  const navHTML = `
    <header class="navbar" role="banner">
      <div class="container">
        <a href="index.html" class="nav-logo" aria-label="Putri Shreya — Home">
          <div class="nav-monogram">PS</div>
          <span class="nav-logo-text">Putri Shreya</span>
        </a>
        <nav role="navigation" aria-label="Main navigation">
          <ul class="nav-links" id="nav-links">
            ${NAV_ITEMS.map(item => {
              const isActive = item.href === currentPage ||
                (currentPage === '' && item.href === 'index.html');
              return `<li><a href="${item.href}" class="${isActive ? 'active' : ''}">${item.label}</a></li>`;
            }).join('')}
          </ul>
        </nav>
        <button class="nav-toggle" id="nav-toggle" aria-label="Toggle mobile menu" aria-expanded="false">☰</button>
      </div>
    </header>
  `;

  placeholder.outerHTML = navHTML;

  // Init mobile menu after navbar is rendered
  initMobileMenu();
}

// ---- Render Footer ----
function renderFooter() {
  const placeholder = document.getElementById('footer-placeholder');
  if (!placeholder) return;

  const socialHTML = SOCIALS.map(s => `
    <a href="${s.url}" target="_blank" rel="noopener noreferrer" aria-label="${s.label}">${s.icon}</a>
  `).join('');

  const linksHTML = NAV_ITEMS.map(item =>
    `<li><a href="${item.href}">${item.label}</a></li>`
  ).join('');

  placeholder.outerHTML = `
    <footer class="footer">
      <div class="container">
        <div class="footer-left">
          <span class="footer-name">Putri Shreya</span>
          <span class="footer-copy">&copy; ${new Date().getFullYear()} — All rights reserved</span>
        </div>
        <ul class="footer-links">${linksHTML}</ul>
        <div class="footer-social">${socialHTML}</div>
      </div>
    </footer>
  `;
}

// ---- Render Portfolio Cards ----
function renderPortfolioCards() {
  const grid = document.getElementById('portfolio-grid');
  if (!grid) return;

  grid.innerHTML = PORTFOLIO_DATA.map((item, idx) => `
    <article class="portfolio-card animate-fade-up" style="animation-delay: ${idx * 0.08}s">
      <div class="portfolio-card-header">
        <div class="portfolio-logo-wrap">
          <img
            src="${item.logo}"
            alt="${item.project} logo"
            class="portfolio-logo"
            loading="lazy"
            onerror="this.style.display='none'"
          >
        </div>
        <div class="portfolio-badge ${item.badgeClass}">
          <span>${item.icon}</span>
          <span>${item.category}</span>
        </div>
      </div>
      <div class="portfolio-role">${item.role}</div>
      <h3>${item.project}</h3>
      <p>${item.description}</p>
    </article>
  `).join('');
}

// ---- Render Key Features ----
function renderKeyFeatures() {
  const container = document.getElementById('key-features');
  if (!container) return;

  container.innerHTML = KEY_FEATURES.map(item => `
    <div class="feature-card animate-fade-up">
      <span class="feature-icon">${item.icon}</span>
      <h4>${item.title}</h4>
      <p>${item.description}</p>
    </div>
  `).join('');
}

// ---- Mobile Menu ----
function initMobileMenu() {
  const toggle = document.getElementById('nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (!toggle || !navLinks) return;

  toggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.textContent = isOpen ? '✕' : '☰';
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.textContent = '☰';
    });
  });

  document.addEventListener('click', e => {
    if (!navLinks.contains(e.target) && !toggle.contains(e.target) && navLinks.classList.contains('open')) {
      navLinks.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.textContent = '☰';
    }
  });
}

// ---- Contact Form ----
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const fd = new FormData(form);
    const name = fd.get('name'), email = fd.get('email'), message = fd.get('message');

    if (!name || !email || !message) {
      showFormMessage('Please fill in all required fields.', 'error');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showFormMessage('Please enter a valid email address.', 'error');
      return;
    }
    showFormMessage(`Thanks ${name}! Your message has been sent. I'll get back to you soon 💜`, 'success');
    form.reset();
  });
}

function showFormMessage(text, type) {
  const existing = document.querySelector('.form-message');
  if (existing) existing.remove();
  const div = document.createElement('div');
  div.className = `form-message ${type}`;
  div.textContent = text;
  const form = document.getElementById('contact-form');
  form.appendChild(div);
  setTimeout(() => div.remove(), 5000);
}

// ---- Init ----
document.addEventListener('DOMContentLoaded', () => {
  renderNavbar();
  renderFooter();
  renderPortfolioCards();
  renderKeyFeatures();
  initContactForm();

  // Intersection Observer for scroll animations
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.animate-fade-up').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
});