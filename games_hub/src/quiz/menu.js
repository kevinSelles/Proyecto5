export function getMenu() {

  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");

  const menuButtons = ["Facil", "Normal", "Difícil"];

  for(const button of menuButtons) {
    const menuButton = document.createElement("button");
    menuButton.textContent = button;
    menuButton.classList.add(button);

    menuContainer.appendChild(menuButton);
  }

  const scoreTitle = document.createElement("h3");
  scoreTitle.textContent = "Puntuación";

  const scoreNumber = document.createElement("p");
  

  return menuContainer;
}