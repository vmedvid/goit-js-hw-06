const decrementBtnEl = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementBtnEl = document.querySelector(
  'button[data-action="increment"]'
);
const counterEl = document.querySelector("#value");

let counterValue = Number(counterEl.textContent);

const onDecrementBtnClick = () => {
  counterValue -= 1;
  counterEl.textContent = counterValue;
};

const onIncrementBtnClick = () => {
  counterValue += 1;
  counterEl.textContent = counterValue;
};

decrementBtnEl.addEventListener("click", onDecrementBtnClick);
incrementBtnEl.addEventListener("click", onIncrementBtnClick);
