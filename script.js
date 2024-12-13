// JavaScript for future interactivity can be added here

document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const nav = document.querySelector('nav');

    if (mobileMenuButton && nav) {
        mobileMenuButton.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }
});
