const fontSizeInputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

function handleFontSizeControlInput(event) {
  textEl.style.fontSize = `${event.currentTarget.value}px`;
}

fontSizeInputEl.addEventListener("input", handleFontSizeControlInput);
