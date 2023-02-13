// let menuActiv = document.querySelector('.menu-all');
// let headerMenu = document.querySelector('.header-icon1');
// // let menuClose = document.querySelector('.menu-close');

// function toggleMenu() {
//     menuActiv.classList.toggle('hidden');
// }

// headerMenu.addEventListener('click', toggleMenu);


const open_btn = document.querySelector('.header-icon1');
const close_btn = document.querySelector('.close-btn');
const nav = document.querySelectorAll('.nav');

open_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.add('visible'));
});

close_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.remove('visible'));
});

