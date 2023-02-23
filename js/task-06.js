const inputEl = document.getElementById("validation-input");
const quantityOfSymbols = Number(inputEl.dataset.length);

const checkQuantityOfSymbols = (event) => {
  if (event.currentTarget.value.length === quantityOfSymbols) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
};

inputEl.addEventListener("blur", checkQuantityOfSymbols);
