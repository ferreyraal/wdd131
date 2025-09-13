
document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav ul');

    const menuApp = document.createElement('button');
    menuApp.innerHTML = '&#9776;'; 
    menuApp.classList.add('menuApp');
    menuApp.setAttribute('aria-label', 'Toggle Navigation');


    const header = document.querySelector('header');
    header.insertBefore(menuApp, nav);


    menuApp.addEventListener('click', () => {
        nav.classList.toggle('show');

        if (nav.classList.contains('show')) {
            menuApp.innerHTML = '&times;'; 
        } else {
            menuApp.innerHTML = '&#9776;';
        }
    });
});
