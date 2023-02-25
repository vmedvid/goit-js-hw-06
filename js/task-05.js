const nameInputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

function handleNameInput(event) {
  event.currentTarget.value.trim() !== ""
    ? (outputEl.textContent = event.currentTarget.value)
    : (outputEl.textContent = "Anonymous");
}

nameInputEl.addEventListener("input", handleNameInput);