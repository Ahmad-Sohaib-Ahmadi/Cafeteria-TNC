const iconMenu = document.querySelector('.icon_menu');
const navMobile = document.querySelector('.nav_mov_tab');
const iconClose = document.querySelector('.icon_close');

// Open the menu
iconMenu.addEventListener('click', () => {
    navMobile.classList.add('visible');
});

// Close the menu
iconClose.addEventListener('click', () => {
    navMobile.classList.remove('visible');
});

// Close the menu when clicking outside of it
document.addEventListener('click', (event) => {
    // Check if the click is outside the navMobile and iconMenu
    if (!navMobile.contains(event.target) && !iconMenu.contains(event.target)) {
        navMobile.classList.remove('visible');
    }
});
