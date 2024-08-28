window.onscroll = function() { toggleNavbarVisibility() };

function toggleNavbarVisibility() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 10) {
        navbar.classList.add('visible');
    } else {
        navbar.classList.remove('visible');
    }
}
