import "./mainButtons.css";

export function getMainButtons(modal, gameName) {

  const mainButtons = document.createElement("button");
  mainButtons.textContent = "Jugar";
  mainButtons.classList.add("main-buttons");

  mainButtons.addEventListener("click", () => {
    if(gameName === "Tres en raya") {
      modal.openTresRaya();
    } else if(gameName === "Quiz") {
      modal.openQuiz();
    } else if(gameName === "Simon") {
      modal.openSimon();
    };
  })

  return mainButtons;
}