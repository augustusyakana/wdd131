const hamMenu = document.querySelector('.ham-menu');
const offScreen = document.querySelector('.off-screen');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreen.classList.toggle('active');
})