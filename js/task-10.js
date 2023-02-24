function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector("#controls>input");
const createBtnEl = document.querySelector("button[data-create]");
const destroyBtnEl = document.querySelector("button[data-destroy]");
const newBoxesEl = document.querySelector("#boxes");

createBtnEl.addEventListener("click", createBoxes);

function createBoxes(amount) {
  amount = Number(inputEl.value);

  let newGallery = [];
  let lengthOfSides = 30;

  for (let i = 1; i <= amount; i += 1) {
    const newCardOnGallery = `<div class="boxes__card" style="
    width: ${lengthOfSides}px;
    height: ${lengthOfSides}px;
    border: dashed 1px gray;
    font-size: ${lengthOfSides / 3}px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${getRandomHexColor()}">${i}</div>
    `;
    newGallery.push(newCardOnGallery);
    lengthOfSides += 10;
  }
  newBoxesEl.innerHTML = newGallery.join("");
}

destroyBtnEl.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  newBoxesEl.innerHTML = "";
}