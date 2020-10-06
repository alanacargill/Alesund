var menuRight = document.querySelector( '.menu' );
var showMenu = document.getElementById( 'show-menu' );
var hideMenu = document.getElementById('hide-menu');

showMenu.addEventListener('click', (e) => {
    menuRight.classList.toggle('menu-open');
});

hideMenu.addEventListener('click', (e) => {
    menuRight.classList.toggle('menu-open');
});

