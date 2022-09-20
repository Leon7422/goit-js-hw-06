const input = document.querySelector("#validation-input");
const maxSymbols = Number(input.dataset.length);

input.addEventListener("blur", maxSybolsValidationCheck);

function maxSybolsValidationCheck() {
  input.removeAttribute("class");

  if (input.value.length === maxSymbols) {
    input.classList.add("valid");
  } else {
    input.classList.add("invalid");
  }
}
