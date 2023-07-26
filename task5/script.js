let duplicateField = document.querySelector('#duplicateField');
let button = document.querySelector('button');
let input = document.querySelector('#input');
oninput = function(){
duplicateField.textContent = input.value;
};
button.addEventListener('click', (event) => {
    console.log(input.value);
    input.value = ('');
    duplicateField.textContent = input.value;
    event.preventDefault();
});
