// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Create overlay element for mobile menu
    let overlay = document.querySelector('.nav-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'nav-overlay';
        document.body.appendChild(overlay);
    }

    // Hamburger menu for mobile navbar
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('open');
            navLinks.classList.toggle('open');
            overlay.classList.toggle('open');
        });

        // Close menu when clicking overlay
        overlay.addEventListener('click', () => {
            menuToggle.classList.remove('open');
            navLinks.classList.remove('open');
            overlay.classList.remove('open');
        });

        // Smooth scrolling for navigation links and close menu
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', (e) => {
                // Only handle if mobile menu is open
                if (window.innerWidth <= 700) {
                    e.preventDefault();
                    const targetId = link.getAttribute('href');
                    const targetSection = document.querySelector(targetId);

                    // Close menu
                    menuToggle.classList.remove('open');
                    navLinks.classList.remove('open');
                    overlay.classList.remove('open');

                    // Smooth scroll to section
                    if (targetSection) {
                        targetSection.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });
    }
});
