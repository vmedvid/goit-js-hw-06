const decrementBtnEl = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementBtnEl = document.querySelector(
  'button[data-action="increment"]'
);
const counterEl = document.querySelector("#value");

let counterValue = Number(counterEl.textContent);

const handleDecrementBtnClick = () => {
  counterValue -= 1;
  counterEl.textContent = counterValue;
};

const handleIncrementBtnClick = () => {
  counterValue += 1;
  counterEl.textContent = counterValue;
};

decrementBtnEl.addEventListener("click", handleDecrementBtnClick);
incrementBtnEl.addEventListener("click", handleIncrementBtnClick);