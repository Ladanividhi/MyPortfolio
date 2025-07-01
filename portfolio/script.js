// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');
  const navOverlay = document.querySelector('.nav-overlay');
  const navClose = document.querySelector('.nav-close');

  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  if (menuToggle && navLinks) {
    // ✅ Open mobile menu when hamburger icon is clicked
    menuToggle.addEventListener('click', () => {
      navLinks.classList.add('active');
      navOverlay?.classList.add('active');
      document.body.classList.add('menu-open'); // ✅ enables logo blur in CSS
      document.body.style.overflow = 'hidden';  // prevents scroll when open
    });

    // ✅ Close menu when clicking close icon inside nav
    navClose?.addEventListener('click', closeMenu);

    // ✅ Close menu when clicking on overlay
    navOverlay?.addEventListener('click', closeMenu);

    // ✅ Close menu when clicking any nav link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    // ✅ Close function (applies everywhere)
    function closeMenu() {
      navLinks.classList.remove('active');
      navOverlay?.classList.remove('active');
      document.body.classList.remove('menu-open'); // ✅ disables logo blur in CSS
      document.body.style.overflow = 'auto';        // enables scroll again
    }
  }
});
