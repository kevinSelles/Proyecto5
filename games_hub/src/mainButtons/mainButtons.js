import "./mainButtons.css";

export function getMainButtons(modal) {

  const mainButtons = document.createElement("button");
  mainButtons.textContent = "Jugar";
  mainButtons.classList.add("main-buttons");

  mainButtons.addEventListener("click", () => {
    modal.openTresRaya();
  })

  return mainButtons;
}