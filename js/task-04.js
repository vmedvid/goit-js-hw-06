const decrementBtnEl = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementBtnEl = document.querySelector(
  'button[data-action="increment"]'
);
const counterEl = document.querySelector("#value");

let counterValue = Number(counterEl.textContent);

const decrement = () => {
  counterValue -= 1;
  counterEl.textContent = counterValue;
};

const increment = () => {
  counterValue += 1;
  counterEl.textContent = counterValue;
};

decrementBtnEl.addEventListener("click", decrement);
incrementBtnEl.addEventListener("click", increment);
