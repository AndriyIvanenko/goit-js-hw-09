// import flatpickr from 'flatpickr';
// import 'flatpickr/dist/flatpickr.min.css';

const timer = document.querySelector('.timer');
const fields = document.querySelectorAll('.field');
const values = document.querySelectorAll('.value');
const labels = document.querySelectorAll('.label');
const datePicker = document.querySelector('#datetime-picker');
// console.log(datePicker);
const startBtn = document.querySelector('[data-start]');
// console.log(startBtn);

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
const currentDate = new Date();

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     console.log(selectedDates[0]);
//     if (selectedDates[0] <= currentDate) {
//       window.alert('Please choose a date in the future');
//     } else {
//       startBtn.disabled = false;
//       // console.log(this.defaultDate);
//     }
//   },
// };
// const selectedDate = flatpickr(datePicker, options);
// console.log(selectedDate.selectedDates[0]);
