const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listOfIngredientsEl = document.querySelector("#ingredients");

const markup = ingredients.map((ingredient) => {
  const newElement = document.createElement("li");
  newElement.textContent = ingredient;
  newElement.classList.add("item"); // newElement.setAttribute("class", "item");
  return newElement;
});

listOfIngredientsEl.append(...markup);

//======================= 2-й варіант =======================
// document.querySelector("#ingredients").append(
//   ...ingredients.map((ingredient) => {
//     const newElement = document.createElement("li");
//     newElement.textContent = ingredient;
//     newElement.classList.add("item");
//     return newElement;
//   })
// );

//======================= 3-й варіант =======================
// const markup = ingredients
//   .map((ingredient) => `<li class="item">${ingredient}</li>`)
//   .join("");
// document.querySelector("#ingredients").insertAdjacentHTML("beforeend", markup);
// // document.querySelector("#ingredients").innerHTML = markup;
