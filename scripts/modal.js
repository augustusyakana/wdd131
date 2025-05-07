const modal = document.querySelector('dialog');

document.querySelector('.open').addEventListener('click', () => {
    modal.showModal();
})

document.querySelector('.close').addEventListener('click', () => {
    modal.close();
})