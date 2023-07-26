const consoleLog = document.querySelector('#consoleLog');
const Alert = document.querySelector('#alert');
const Prompt = document.querySelector('#prompt');

consoleLog.addEventListener('click', () => {
    alert('Служит для вывода информации в консоль');
})
Alert.addEventListener('click', () => {
    alert('Отображает диалоговое окно с сообщением и кнопкой OK.');
})

Prompt.addEventListener('click', () => {
    alert('Отображает диалоговое окно с запросом на ввод текста.');
})