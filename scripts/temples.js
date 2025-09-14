

const webButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

webButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    webButton.classList.toggle('open');
});