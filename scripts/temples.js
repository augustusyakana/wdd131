const hamMenu = document.querySelector('.ham-menu');
const offScreen = document.querySelector('.off-screen');

const copyright = document.querySelector('#copyright');
const lastmod = document.querySelector('#lastmodified');

copyright.textContent = new Date().getFullYear();
lastmod.textContent = document.lastModified;

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreen.classList.toggle('active');
})