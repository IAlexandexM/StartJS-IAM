const trafficLightEl = document.querySelector('#trafficLight');
const trafficLightE2 = document.querySelector('#trafficLight2');
const trafficLightE3 = document.querySelector('#trafficLight3');

function makeGreen() {
    trafficLightEl.style.background = ('green');
    trafficLightEl.removeEventListener('click', makeGreen);
    trafficLightEl.addEventListener('click', makeYellow);

    trafficLightE2.style.background = ('black');
    trafficLightE2.removeEventListener('click', makeGreen);
    trafficLightE2.addEventListener('click', makeYellow);

    trafficLightE3.style.background = ('black');
    trafficLightE3.removeEventListener('click', makeGreen);
    trafficLightE3.addEventListener('click', makeYellow);
}
function makeYellow() {
    trafficLightEl.style.background = ('black');
    trafficLightEl.removeEventListener('click', makeYellow);
    trafficLightEl.addEventListener('click', makeRed);

    trafficLightE2.style.background = ('yellow');
    trafficLightE2.removeEventListener('click', makeYellow);
    trafficLightE2.addEventListener('click', makeRed);

    trafficLightE3.style.background = ('black');
    trafficLightE3.removeEventListener('click', makeYellow);
    trafficLightE3.addEventListener('click', makeRed);
}
function makeRed() {
    trafficLightEl.style.background = ('black');
    trafficLightEl.removeEventListener('click', makeRed);
    trafficLightEl.addEventListener('click', makeGreen);

    trafficLightE2.style.background = ('black');
    trafficLightE2.removeEventListener('click', makeRed);
    trafficLightE2.addEventListener('click', makeGreen);

    trafficLightE3.style.background = ('red');
    trafficLightE3.removeEventListener('click', makeRed);
    trafficLightE3.addEventListener('click', makeGreen);
}

trafficLightEl.addEventListener('click', makeGreen);
trafficLightE2.addEventListener('click', makeGreen);
trafficLightE3.addEventListener('click', makeGreen);
