const buttonChangeColour = document.querySelector(".change-color");
const actualColorText = document.querySelector(".color");
const colorBox = document.querySelector(".widget");
buttonChangeColour.addEventListener("click", onButtonChangeColour);

function onButtonChangeColour() {
  actualColorText.textContent = getRandomHexColor();
  colorBox.style.backgroundColor = actualColorText.textContent;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
