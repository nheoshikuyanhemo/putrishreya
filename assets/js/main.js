/* ============================================
   PUTRI SHREYA — Main JS v2
   Handles: navbar, footer, active state, portfolio data, forms, dark mode, animations
   ============================================ */

// ---- Portfolio Experience Data (From CV) ----
const PORTFOLIO_DATA = [
  {
    role: 'Brand Ambassador',
    project: 'ShowToken',
    category: 'Blockchain × Entertainment',
    badgeClass: 'badge-community',
    logo: 'assets/images/showtoken.jpg',
    description: 'Represented ShowToken on X (Twitter) and Instagram by communicating the project’s vision, ecosystem, and ongoing development. Created educational and narrative-driven content explaining how ShowToken is building at the intersection of blockchain and entertainment. Translated Web3 concepts into accessible content for a broader audience. Shared product updates, initiatives, and ecosystem developments to strengthen project awareness and understanding.',
    icon: '🌟',
  },
  {
    role: 'Loyal Builder & KOC',
    project: 'NeoSoul | AI Agent Economy',
    category: 'AI Agent Economy',
    badgeClass: 'badge-ai',
    logo: 'assets/images/logo-neosoul.jpg',
    description: 'Promoted NeoSoul and its AI Agent ecosystem primarily through X (Twitter). Created and distributed content to increase project awareness, engagement, and community visibility. Amplified NeoSoul events, announcements, campaigns, and key updates through organic social activity. Engaged with the community and supported ongoing conversations around NeoSoul and its ecosystem.',
    icon: '⚡',
  },
  {
    role: 'Operational Community Leader',
    project: 'Society | All-in-One Crypto Community',
    category: 'Web3 Community',
    badgeClass: 'badge-community',
    logo: 'assets/images/logo-society.png',
    description: 'Managed day-to-day community operations to ensure activities, discussions, and initiatives run smoothly. Coordinated community activities covering Web3 projects, educational sessions, alpha sharing, and events. Maintained an organized and engaging environment by monitoring discussions, assisting members, and resolving operational issues. Supported planning and execution of community programs and events from preparation through execution. Contributed to content creation and social media initiatives to strengthen Society’s engagement and online presence. Collaborated with internal teams and community members to improve workflows and the overall community experience.',
    icon: '👥',
  },
  {
    role: 'Early Contributor & Content Creator',
    project: 'GoDark | Web3 Project',
    category: 'DEX',
    badgeClass: 'badge-dex',
    logo: 'assets/images/logo-godark.jpg',
    description: 'Created and published educational and promotional content on X (Twitter). Increased project visibility through engaging social media campaigns. Supported community growth and strengthened brand awareness within the Web3 ecosystem. Contributed ideas and feedback to improve community engagement strategies.',
    icon: '🖊️',
  },
  {
    role: 'Hype Herald',
    project: 'Polana Network',
    category: 'Layer 0',
    badgeClass: 'badge-layer0',
    logo: 'assets/images/logo-polana.png',
    description: 'Delivered project updates, campaigns, and educational content on X (Twitter) to expand project reach. Built cross-community relationships and supported strategic initiatives to drive ecosystem growth and engagement.',
    icon: '📢',
  },
  {
    role: 'Community Administrator',
    project: 'MECCA | Web3 Project',
    category: 'Crypto App',
    badgeClass: 'badge-crypto',
    logo: 'assets/images/logo-mecca.jpg',
    description: 'Managed Discord and Telegram communities. Answered community questions and provided timely support to members. Assisted in maintaining a positive, active, and informative community environment. Facilitated communication between the community and project team.',
    icon: '🌍',
  },
];

// ---- Core Skills ----
const SKILLS = [
  { name: 'Community Management (Discord & Telegram)', level: 95, category: 'community' },
  { name: 'Social Media Management (X/Twitter)', level: 90, category: 'social' },
  { name: 'Content Creation & Copywriting', level: 88, category: 'content' },
  { name: 'Community Engagement & Growth', level: 92, category: 'community' },
  { name: 'Ambassador & Advocacy Programs', level: 85, category: 'community' },
  { name: 'Blockchain & Web3 Ecosystems', level: 87, category: 'web3' },
  { name: 'On-Chain Participation', level: 80, category: 'web3' },
  { name: 'Project Promotion & Brand Awareness', level: 90, category: 'content' },
  { name: 'Communication & Problem Solving', level: 85, category: 'soft' },
  { name: 'Cross-Community Networking', level: 82, category: 'community' },
];

// ---- Key Features ----
const KEY_FEATURES = [
  {
    title: 'Innovation',
    icon: '💡',
    description: 'Driving innovation in Web3 through cutting-edge community strategies and ecosystem engagement.',
  },
  {
    title: 'Collaboration',
    icon: '🤝',
    description: 'Fostering collaboration across global Web3 communities and cross-functional teams.',
  },
  {
    title: 'Creativity',
    icon: '✨',
    description: 'Crafting unique content narratives that bridge complex blockchain concepts for broader audiences.',
  },
];

// ---- Achievements ----
const ACHIEVEMENTS = [
  { title: '10K+', subtitle: 'Community members managed', icon: '👥' },
  { title: '6+', subtitle: 'Global Web3 projects', icon: '🚀' },
  { title: '100+', subtitle: 'Content pieces created', icon: '🖊️' },
  { title: '5+', subtitle: 'Years in Web3', icon: '⭐' },
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
  initMobileMenu();
}

// ---- Render Footer ----
function renderFooter() {
  const placeholder = document.getElementById('footer-placeholder');
  if (!placeholder) return;

  const socialHTML = SOCIALS.map(s =>
    `<a href="${s.url}" target="_blank" rel="noopener noreferrer" aria-label="${s.label}">${s.icon}</a>`
  ).join('');

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
    <article class="portfolio-card animate-fade-up" style="animation-delay: ${idx * 0.1}s">
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
      <h3>${item.project.split(' | ')[0]}</h3>
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

// ---- Render Skills (About page) ----
function renderSkills() {
  const container = document.getElementById('skills-container');
  if (!container) return;

  container.innerHTML = SKILLS.map(skill => `
    <div class="skill-item animate-fade-up">
      <div class="skill-header">
        <span class="skill-name">${skill.name}</span>
        <span class="skill-level">${skill.level}%</span>
      </div>
      <div class="skill-bar">
        <div class="skill-progress" style="width: 0; transition: width 1s ease;" data-target="${skill.level}">
          <div class="skill-glow"></div>
        </div>
      </div>
    </div>
  `).join('');

  // Animate skill bars
  document.querySelectorAll('.skill-progress').forEach(bar => {
    const target = parseInt(bar.dataset.target);
    bar.style.width = target + '%';
  });
}

// ---- Render Achievements Hero ----
function renderAchievementStat(targetElement, start, end, duration = 2000) {
  if (!targetElement) return;
  let startTs = null;
  const step = (timestamp) => {
    if (!startTs) startTs = timestamp;
    const progress = Math.min((timestamp - startTs) / duration, 1);
    const value = Math.floor(start + (end - start) * progress);
    targetElement.textContent = value.toString();
    if (progress < 1) window.requestAnimationFrame(step);
  };
  window.requestAnimationFrame(step);
}

// ---- Dark Mode Toggle ----
function initDarkMode() {
  const toggle = document.getElementById('darkModeToggle');
  if (!toggle) return;

  const currentMode = localStorage.getItem('darkMode');
  if (currentMode === 'enabled') {
    document.body.classList.add('dark-mode');
  }

  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isEnabled = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isEnabled ? 'enabled' : 'disabled');
  });
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
    if (!/^[^\s@]+@[^\s@]+\.[^s@]+$/.test(email)) {
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
  renderSkills();
  initDarkMode();
  initContactForm();

  // Animate stat numbers on hero
  const statElements = document.querySelectorAll('[data-target]');
  const statObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.dataset.target);
        renderAchievementStat(entry.target, 0, target);
        statObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.8 });

  statElements.forEach(el => statObserver.observe(el));

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