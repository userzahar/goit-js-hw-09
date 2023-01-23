const baseForm = document.querySelector('.form');
let position = 0;
let idInterval = null;

baseForm.addEventListener('submit', valueBaseForm)

function valueBaseForm(e) {
  e.preventDefault();
  const {
    elements: { delay, step, amount }
  } = e.currentTarget;
  intervalStep(Number(delay.value), Number(step.value), Number(amount.value));
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  } else {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  }
}

function intervalStep(delay, step, amount) {
  // delay += step;
 idInterval = setInterval(() => {
  position += 1;
  delay += step;
  if (position >= amount) {
    clearInterval(idInterval)
  }
  createPromise(position, delay);
},delay)
}
