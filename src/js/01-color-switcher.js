const body = document.querySelector('body');
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

startBtn.addEventListener('click', onStartClick);
stopBtn.addEventListener('click', onStopClick);

stopBtn.disabled = true;
let timerId = null;

function onStartClick() {
  backgroundColorChange();
  timerId = setInterval(() => backgroundColorChange(), 1000);
  startBtn.disabled = true;
  stopBtn.disabled = false;
  // console.log('onStartClick');
}

function onStopClick() {
  clearInterval(timerId);
  stopBtn.disabled = true;
  startBtn.disabled = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function backgroundColorChange() {
  body.style.backgroundColor = getRandomHexColor();
}
