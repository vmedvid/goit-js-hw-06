const symbolsInputEl = document.getElementById("validation-input");

function changeСlasses(element, addClass, removeClass) {
  element.classList.add(addClass);
  element.classList.remove(removeClass);
}

const handleSymbolsInput = (event) => {
  if (
    event.currentTarget.value.length === Number(symbolsInputEl.dataset.length)
  ) {
    changeСlasses(symbolsInputEl, "valid", "invalid");
  } else {
    changeСlasses(symbolsInputEl, "invalid", "valid");
  }
};

symbolsInputEl.addEventListener("blur", handleSymbolsInput);