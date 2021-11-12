const shoppingListBody = document.querySelector(".shopping-list-body");
const inputElement = document.querySelector(".shopping-list-input");
let inputValue = "";
inputElement.addEventListener("input", (event) => {
  inputValue = event.target.value;
});

const buttonClick = document.querySelector(".footer-button");
buttonClick.addEventListener("click", () => {
  const shoppingList = document.createElement("div");
  shoppingList.style.margin = "0 30px";
  shoppingList.style.height = "40px";
  shoppingList.style.display = "flex";
  shoppingList.style.justifyContent = "space-between";
  const shoppingText = document.createElement("span");
  shoppingText.textContent = inputValue;
  shoppingList.appendChild(shoppingText);
  const shoppingImage = document.createElement("span");
  shoppingImage.setAttribute("id", "image");
  shoppingImage.textContent = "Trash";
  shoppingImage.style.cursor = "pointer";
  shoppingList.appendChild(shoppingImage);
  shoppingListBody.appendChild(shoppingList);
  inputElement.value = "";
});
window.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "Enter":
      const shoppingList = document.createElement("div");
      shoppingList.style.margin = "0 30px";
      shoppingList.style.height = "40px";
      shoppingList.style.display = "flex";
      shoppingList.style.justifyContent = "space-between";
      const shoppingText = document.createElement("span");
      shoppingText.textContent = inputValue;
      shoppingList.appendChild(shoppingText);
      const shoppingImage = document.createElement("span");
      shoppingImage.textContent = "Trash";
      shoppingImage.style.cursor = "pointer";
      shoppingList.appendChild(shoppingImage);
      shoppingListBody.appendChild(shoppingList);
      inputElement.value = "";
      break;
    default:
      return "Error";
  }
});
