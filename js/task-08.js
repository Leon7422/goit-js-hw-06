const form = document.querySelector(".login-form");
const buttonSubmit = form.querySelector("button");
const emailInput = form.querySelector('[type = "email"]');
const passwordInput = form.querySelector('[type = "password"]');
form.addEventListener("submit", submitRegistraion);

function submitRegistraion(e) {
  e.preventDefault();

  if (emailInput.value === "" || passwordInput.value === "") {
    return alert("Заповніть будь ласка поле Логіну та/або Паролю");
  }

  const formData = new FormData(e.currentTarget);
  const userData = {
    email: "",
    password: "",
  };
  formData.forEach((value, type) => {
    userData[type] = value;
  });

  console.log(userData);
}
