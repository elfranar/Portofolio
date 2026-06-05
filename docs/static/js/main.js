// EDR Portfolio — main.js
document.addEventListener('DOMContentLoaded', () => {

  // Active nav link on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  if (sections.length && navLinks.length) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          navLinks.forEach(l => l.classList.remove('active'));
          const link = document.querySelector(`.nav-link[href="#${e.target.id}"]`);
          if (link) link.classList.add('active');
        }
      });
    }, { threshold: 0.4 });
    sections.forEach(s => observer.observe(s));
  }

  // Subtle scroll-fade for project sections
  const fadels = document.querySelectorAll('.proj-section, .kpi-card, .skill-card, .project-card, .reflect-card, .ana-card');
  if ('IntersectionObserver' in window) {
    fadels.forEach(el => { el.style.opacity = '0'; el.style.transform = 'translateY(14px)'; el.style.transition = 'opacity .4s ease, transform .4s ease'; });
    const fadeObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.opacity = '1';
          e.target.style.transform = 'translateY(0)';
          fadeObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    fadels.forEach(el => fadeObs.observe(el));
  }

});
