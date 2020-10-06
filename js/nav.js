var menuRight = document.getElementById( 'slide-menu' );
var showMenu = document.getElementById( 'show-menu' );
var hideMenu = document.getElementById('hide-menu');
var navElements = document.querySelectorAll('arrow-anchor');
var arrowIcon = document.querySelectorAll('arrow-icon');
    
showMenu.addEventListener('click', (e) => {
    menuRight.classList.toggle('menu-open');
});

hideMenu.addEventListener('click', (e) => {
    menuRight.classList.toggle('menu-open');
});

