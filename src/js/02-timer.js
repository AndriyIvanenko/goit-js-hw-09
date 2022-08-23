import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const timer = document.querySelector('.timer');
const fields = document.querySelectorAll('.field');
const values = document.querySelectorAll('.value');
const labels = document.querySelectorAll('.label');
const datePicker = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');

// --------------------- interface stylization ------------------------------------

timer.style.display = 'flex';
fields.forEach(field => {
  field.style.display = 'flex';
  field.style.flexDirection = 'column';
  field.style.alignItems = 'center';
  field.style.marginRight = '10px';
});
values.forEach(value => {
  value.style.fontSize = '35px';
});
labels.forEach(label => {
  label.style.fontSize = '14px';
  label.textContent = label.textContent.toUpperCase();
});

startBtn.disabled = true;
// let currentDate = new Date();
Notiflix.Notify.init({
  position: 'center-top',
});

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    // console.log(selectedDates[0]);
    if (selectedDates[0] <= new Date()) {
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      startBtn.disabled = false;
    }
  },
};
const selectedDate = flatpickr(datePicker, options);

startBtn.addEventListener('click', onStartClick);
function onStartClick() {
  startBtn.disabled = true;
  // currentDate = new Date();
  let timeLeft = selectedDate.selectedDates[0] - new Date();

  values[0].textContent = addLeadingZero(convertMs(timeLeft).days);
  values[1].textContent = addLeadingZero(convertMs(timeLeft).hours);
  values[2].textContent = addLeadingZero(convertMs(timeLeft).minutes);
  values[3].textContent = addLeadingZero(convertMs(timeLeft).seconds);

  const timerID = setInterval(() => {
    if (timeLeft < 1000) {
      clearInterval(timerID);
      startBtn.disabled = false;
    }
    values[0].textContent = addLeadingZero(convertMs(timeLeft).days);
    values[1].textContent = addLeadingZero(convertMs(timeLeft).hours);
    values[2].textContent = addLeadingZero(convertMs(timeLeft).minutes);
    values[3].textContent = addLeadingZero(convertMs(timeLeft).seconds);
    timeLeft = selectedDate.selectedDates[0] - new Date();
  }, 1000);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  let stringValue = value.toString();
  if (stringValue.length < 2) {
    stringValue = stringValue.padStart(2, '0');
  }
  return stringValue;
}
