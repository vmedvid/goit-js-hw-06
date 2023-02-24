const symbolsInputEl = document.getElementById("validation-input");

const handleSymbolsInput = (event) => {
  if (
    event.currentTarget.value.length === Number(symbolsInputEl.dataset.length)
  ) {
    symbolsInputEl.classList.add("valid");
    symbolsInputEl.classList.remove("invalid");
  } else {
    symbolsInputEl.classList.add("invalid");
    symbolsInputEl.classList.remove("valid");
  }
};

symbolsInputEl.addEventListener("blur", handleSymbolsInput);