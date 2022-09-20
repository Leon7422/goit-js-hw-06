const items = document.querySelectorAll(".item");

console.log(`Number of categories: ${items.length}`);
console.log("");

items.forEach((item) => {
  const liHeader = item.querySelector("h2");
  const countOfElements = item.querySelectorAll("li");

  console.log(`Category: ${liHeader.textContent}`);
  console.log(`Elements: ${countOfElements.length}`);
  console.log("");
});
