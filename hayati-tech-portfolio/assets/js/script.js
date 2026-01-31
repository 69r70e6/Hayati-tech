// This file is ready for your custom JavaScript.
// For example, you could add:
// - Form validation for the contact form.
// - A "sticky" header that stays at the top on scroll.
// - Code to highlight the active page in the navigation bar.

document.addEventListener('DOMContentLoaded', () => {
    // Example: Highlight active navigation link
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});