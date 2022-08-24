import Notiflix from 'notiflix';

const promiseDelay = document.querySelector('[name="delay"]');
const promiseDelayStep = document.querySelector('[name="step"]');
const promisesAmount = document.querySelector('[name="amount"]');
const form = document.querySelector('.form');
// console.log(typeof promiseDelay.value);
// console.log(promiseDelay);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

form.addEventListener('submit', onCreatePromisesBtnClick);

function onCreatePromisesBtnClick(event) {
  event.preventDefault();
  let delayValue = Number(promiseDelay.value);
  const delayStep = Number(promiseDelayStep.value);
  const amount = Number(promisesAmount.value);

  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delayValue)
      .then(({ position, delay }) => {
        // console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
        Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        // console.log(`❌ Rejected promise ${position} in ${delay}ms`);
        Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
      });
    delayValue += delayStep;
    // console.log(delayValue);
  }
}
