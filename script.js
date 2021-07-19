const shareBtn = document.querySelector('.admin__button');
const newElement = document.querySelector('.openShare');
const buttonShare = document.querySelector('.buttonShare');



shareBtn.addEventListener('click', () => {
    newElement.classList.add('clicked');
});

buttonShare.addEventListener('click', () => {
    newElement.classList.remove('clicked');
});