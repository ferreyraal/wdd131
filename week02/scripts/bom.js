const input = document.querySelector('#favchap');
const button = document.querySelector('button'); 
const list = document.querySelector('#list');



button.addEventListener('click', function (e) {

    const value = input.value.trim(); 

    if (value !== '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');


        li.textContent = value + ' '; 
        deleteButton.textContent = '❌';
        deleteButton.className = 'delete';

        li.appendChild(deleteButton);
        list.appendChild(li);

        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });

        input.value = '';
    }

    input.focus();
});