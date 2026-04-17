// Casa Banaras — interactions

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

// Smooth nav highlight on click (small touch)
document.querySelectorAll('.nav-links a').forEach((a) => {
  a.addEventListener('click', (e) => {
    const href = a.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});
