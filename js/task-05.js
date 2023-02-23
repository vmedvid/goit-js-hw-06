const nameInputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

nameInputEl.addEventListener("input", (event) => {
  event.currentTarget.value !== ""
    ? (outputEl.textContent = event.currentTarget.value)
    : (outputEl.textContent = "Anonymous");
});
