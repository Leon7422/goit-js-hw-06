function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonCreate = document.querySelector("[data-create]");
const buttonDestroy = document.querySelector("[data-destroy]");
const inputDataQuantityBoxes = document.querySelector("input");
const placeForCreatedDivs = document.querySelector("#boxes");
let actualQuantityForCreateBoxes = 0;

inputDataQuantityBoxes.addEventListener("input", onInputValue);
buttonCreate.addEventListener("click", onButtonCreate);
buttonDestroy.addEventListener("click", onButtonDestroy);

function onInputValue() {
  actualQuantityForCreateBoxes = inputDataQuantityBoxes.value;
}

function onButtonCreate() {
  createDivs(actualQuantityForCreateBoxes);
}
/*
function createDivs(quantity) {
  for (let i = 0; i < quantity; i += 1) {
    const widthHeight = 30 + i * 10;
    const colorDiv = document.createElement("div");
    colorDiv.style.backgroundColor = getRandomHexColor();
    colorDiv.style.width = `${widthHeight}px`;
    colorDiv.style.height = `${widthHeight}px`;
    placeForCreatedDivs.append(colorDiv);
  }
}*/
// КОД зверху працює, але не подобається що для кожного діва викликається аппенд.

function createDivs(quantity) {
  let elements = "";
  for (let i = 0; i < quantity; i += 1) {
    const widthHeight = 30 + i * 10;
    const item = `<div style="background-color: ${getRandomHexColor()}; width: ${widthHeight}px; height: ${widthHeight}px;"></div>`;
    elements += item;
  }
  placeForCreatedDivs.innerHTML = elements;
  console.log(elements);
}

function onButtonDestroy() {
  placeForCreatedDivs.replaceChildren();
}
