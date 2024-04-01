document.addEventListener('DOMContentLoaded', function() {
    // Get menu icon and menu items
    const menuIcon = document.querySelector('.menu-icon');
    const menuItems = document.querySelector('.menu-items');

    // Toggle menu items on clicking menu icon for mobile
    menuIcon.addEventListener('click', function() {
        if (window.innerWidth <= 600) {
            toggleMenu();
        }
    });

    // Function to toggle menu items visibility
    function toggleMenu() {
        if (menuItems.style.display === 'none' || menuItems.style.display === '') {
            menuItems.style.display = 'block';
        } else {
            menuItems.style.display = 'none';
        }
    }

    // Hide menu items initially for mobile
    if (window.innerWidth <= 500) {
        menuItems.style.display = 'none';
    }

    // Show menu items by default for desktop
    if (window.innerWidth > 1200) {
        menuItems.style.display = 'flex';
    }
});
