const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

function changeFontSize(event) {
  textEl.style.fontSize = `${event.currentTarget.value}px`;
}

inputEl.addEventListener("input", changeFontSize);
