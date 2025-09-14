

const webButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

webButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    webButton.classList.toggle('open');
});






const currentYear = new Date().getFullYear();

const yearSpan = document.getElementById('year');

yearSpan.textContent = currentYear;

const lastModifiedElement = document.getElementById("lastModified");
lastModifiedElement.textContent = document.lastModified;