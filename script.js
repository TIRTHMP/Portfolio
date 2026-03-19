// Matrix background effect
function createMatrixRain() {
    const matrixBg = document.getElementById('matrixBg');
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    
    for (let i = 0; i < 20; i++) {
        const column = document.createElement('div');
        column.className = 'matrix-column';
        column.style.left = Math.random() * 100 + '%';
        column.style.animationDuration = (Math.random() * 10 + 10) + 's';
        column.style.animationDelay = Math.random() * 5 + 's';
        
        let text = '';
        for (let j = 0; j < 30; j++) {
            text += chars[Math.floor(Math.random() * chars.length)] + '<br>';
        }
        column.innerHTML = text;
        matrixBg.appendChild(column);
    }
}

// Scroll reveal animation
function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 0;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ── Hamburger menu ──
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

if (hamburger && mobileMenu) {
    function toggleMenu(open) {
        hamburger.classList.toggle('open', open);
        mobileMenu.classList.toggle('open', open);
        mobileMenu.setAttribute('aria-hidden', String(!open));
        hamburger.setAttribute('aria-expanded', String(open));
        document.body.style.overflow = open ? 'hidden' : '';
    }

    hamburger.addEventListener('click', () => {
        const isOpen = hamburger.classList.contains('open');
        toggleMenu(!isOpen);
    });

    document.querySelectorAll('.mobile-nav-link, .mobile-resume-btn').forEach(link => {
        link.addEventListener('click', () => toggleMenu(false));
    });

    mobileMenu.addEventListener('click', (e) => {
        if (e.target === mobileMenu) toggleMenu(false);
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && hamburger.classList.contains('open')) toggleMenu(false);
    });
}

// ── Scroll indicator ──
const scrollIndicator = document.getElementById('scrollIndicator');
if (scrollIndicator) {
    // Click scrolls to #about
    scrollIndicator.addEventListener('click', () => {
        const about = document.getElementById('about');
        if (about) about.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    // Hide once user scrolls past hero
    window.addEventListener('scroll', () => {
        const heroHeight = document.querySelector('.hero').offsetHeight;
        scrollIndicator.classList.toggle('hidden', window.scrollY > heroHeight * 0.25);
    }, { passive: true });
}

// Init
createMatrixRain();
window.addEventListener('scroll', reveal);
reveal();

document.addEventListener('DOMContentLoaded', () => {

  // ── Scroll Indicator ──────────────────────────────
  const scrollIndicator = document.getElementById('scroll-indicator');
  if (scrollIndicator) {
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      scrollIndicator.style.width = pct + '%';
    }, { passive: true });
  }

  // ── Hamburger Menu ────────────────────────────────
  const hamburger  = document.getElementById('hamburger');
  const navContent = document.querySelector('.nav-content');
  const navOverlay = document.getElementById('navOverlay');

  function openMenu() {
    navContent.classList.add('open');
    navOverlay.classList.add('open');
    hamburger.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    navContent.classList.remove('open');
    navOverlay.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', () => {
    navContent.classList.contains('open') ? closeMenu() : openMenu();
  });

  navOverlay.addEventListener('click', closeMenu);

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeMenu();
  });

});
