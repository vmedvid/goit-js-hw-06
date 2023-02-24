function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtnEl = document.querySelector("button.change-color");
const randomColor = document.querySelector("span.color");

function onChangeColorBtnClick(event) {
  randomColor.textContent = document.body.style.backgroundColor =
    getRandomHexColor();
}

changeColorBtnEl.addEventListener("click", onChangeColorBtnClick);
