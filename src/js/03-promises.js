import { Notify } from 'notiflix';

const form = document.querySelector('.form');

form.addEventListener('submit', onCreatePromise);

function onCreatePromise(e) {
  e.preventDefault();
  const step = Number(form.elements.step.value);
  let delay = Number(form.elements.delay.value);
  const amount = form.elements.amount.value;

  for (let position = 1; position <= amount; position += 1) {
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delay += step;
  }
}

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
  return promise;
}
