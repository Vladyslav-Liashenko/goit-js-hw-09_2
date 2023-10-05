import Notiflix from "notiflix";
const submitBtn = document.querySelector('button[type="submit"]');
const delayInput = document.querySelector('input[name="delay"]');
const stepInput = document.querySelector('input[name="step"]');
const amountInput = document.querySelector('input[name="amount"]');

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const delay = +delayInput.value;
  const step = +stepInput.value;
  const amount = +amountInput.value;

  function createSinglePromise(position, delay) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const shouldResolve = Math.random() > 0.3;
        if (shouldResolve) {
          resolve(Notiflix.Notify.success(
         `✅ Fulfilled promise ${position} in ${delay}ms`));
        } else {
          reject(Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`));
        }
      }, delay);
    });
  }

  for (let i = 1; i <= amount; i++) {
    createSinglePromise(i, delay + (i - 1) * step).then(resp => resp).catch( e => console.log(e));
  }
});

