const hamMenu = document.querySelector('.ham-menu');
const offScreen = document.querySelector('.off-screen');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreen.classList.toggle('active');
})

document.querySelector('#copyright_s').textContent = new Date().getFullYear();
document.querySelector('#lastmod_s').textContent = `Last Modified: ${document.lastModified}`
document.querySelector('#copyright_l').textContent = new Date().getFullYear();
document.querySelector('#lastmod_l').textContent = `Last Modified: ${document.lastModified}`