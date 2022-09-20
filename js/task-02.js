const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulOfIngridients = document.querySelector("#ingredients");

const ingridientsList = ingredients.map((item) => {
  const vegetable = document.createElement("li");
  vegetable.textContent = item;
  vegetable.classList.add("ingredients__item");
  return vegetable;
});

ulOfIngridients.append(...ingridientsList);
