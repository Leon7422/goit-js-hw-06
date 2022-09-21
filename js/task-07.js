const rangeBar = document.querySelector("#font-size-control");
const textSpanContent = document.querySelector("#text");
rangeBar.addEventListener("input", returnActualValue);
textSpanContent.style.fontSize = `${rangeBar.value}px`;

function returnActualValue(e) {
  textSpanContent.style.fontSize = `${rangeBar.value}px`;
}
