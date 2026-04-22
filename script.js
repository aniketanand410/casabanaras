// Casa Banaras — interactions

const navPanel = document.getElementById('nav-panel');
const navMenuBtn = document.getElementById('nav-menu-btn');

function setNavOpen(open) {
  if (!navPanel || !navMenuBtn) return;
  navPanel.classList.toggle('is-open', open);
  navMenuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  navMenuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  document.body.classList.toggle('nav-open', open);
}

if (navMenuBtn && navPanel) {
  navMenuBtn.addEventListener('click', () => {
    const open = !navPanel.classList.contains('is-open');
    setNavOpen(open);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setNavOpen(false);
  });

  window.addEventListener('resize', () => {
    if (window.matchMedia('(min-width: 901px)').matches) setNavOpen(false);
  });
}

// Floating CTA appears after hero
const floatCta = document.querySelector('.float-cta');
const hero = document.querySelector('.hero');

const heroObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      floatCta.classList.remove('show');
    } else {
      floatCta.classList.add('show');
    }
  });
}, { threshold: 0.2 });

if (hero) heroObserver.observe(hero);

// Scroll reveal for sections
const revealEls = document.querySelectorAll(
  '.about-text, .about-ornament, .g-item, .amenity, .place, .review, .contact-left, .contact-right'
);

revealEls.forEach((el) => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, i * 60);
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
);

revealEls.forEach((el) => revealObserver.observe(el));

// Smooth in-page nav (desktop + mobile overlay)
document.querySelectorAll('.nav-links a').forEach((a) => {
  a.addEventListener('click', (e) => {
    const href = a.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      setNavOpen(false);
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});
