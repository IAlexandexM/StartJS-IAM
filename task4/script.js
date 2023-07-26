const  textChange = document.querySelector('#textChange');

textChange.addEventListener('click', function(event) {
    event.preventDefault();
    this.textContent = prompt('Текст ссылки изменится на ');    
})