// JavaScript for future interactivity can be added here

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    // Load header
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        fetch('header.html')
            .then(response => response.text())
            .then(data => {
                headerPlaceholder.innerHTML = data;
                setupMobileMenu();
            });
    } else {
        setupMobileMenu();
    }
});

function setupMobileMenu() {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileNav = document.querySelector('.mobile-nav');

    if (mobileMenuButton && mobileNav) {
        mobileMenuButton.addEventListener('click', function() {
            mobileNav.classList.toggle('active');
            mobileMenuButton.classList.toggle('active');
        });
    }
}
