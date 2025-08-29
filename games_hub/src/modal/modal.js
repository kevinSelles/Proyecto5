import "./modal.css";

import { getTresRaya } from "../tresRaya/tresRaya";
import { getQuiz } from "../quiz/quiz";

export function getModal() {

  const modal = document.createElement("div");
  modal.classList.add("modal");

  const closeButton = document.createElement("button");
  closeButton.classList.add("modal-close");
  closeButton.innerHTML = "&times;";

  modal.appendChild(closeButton);

  document.body.appendChild(modal);

  closeButton.addEventListener("click", () => {
    modal.style.display = "none";
    
    const existingGame = document.querySelectorAll(".tres-raya", ".quiz");
    if(existingGame) {
      existingGame.remove();
    }
  });

  modal.openTresRaya = () => {
    const tresRaya = getTresRaya();
    modal.appendChild(tresRaya);
    modal.style.display = "flex";
  };

  modal.openQuiz = () => {
    const quiz = getQuiz();
    modal.appendChild(quiz);
    modal.style.display = "flex";
  };

  return modal;
}