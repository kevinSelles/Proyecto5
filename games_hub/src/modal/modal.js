import "./modal.css";

import { getTresRaya } from "../tresRaya/tresRaya";
import { getQuiz } from "../quiz/quiz";
import { getSimon } from "../simon/simon";

export function getModal() {

  const modal = document.createElement("div");
  modal.classList.add("modal");

  const closeButton = document.createElement("button");
  closeButton.classList.add("modal-close");
  closeButton.innerHTML = "&times;";

  modal.appendChild(closeButton);

  document.body.appendChild(modal);

  const removeExistingGames = () => {

    const existingGames = modal.querySelectorAll(".tres-raya");
    for(const games of existingGames) {
      games.remove();
    };

    const existingQuiz = modal.querySelectorAll(".quiz");
    for (const game of existingQuiz) {
      game.remove();
    };

    const existingSimon = modal.querySelectorAll(".simon");
    for (const game of existingSimon) {
      game.remove();
    };
  };

  closeButton.addEventListener("click", () => {
    modal.style.display = "none";
    removeExistingGames();
  });

  modal.openTresRaya = () => {
    removeExistingGames();
    const tresRaya = getTresRaya();
    modal.appendChild(tresRaya);
    modal.style.display = "flex";
  };

  modal.openQuiz = () => {
    removeExistingGames();
    const quiz = getQuiz();
    modal.appendChild(quiz);
    modal.style.display = "flex";
  };

  modal.openSimon = function() {
    removeExistingGames();
    const simon = getSimon();
    modal.appendChild(simon);
    modal.style.display = "flex";
  };

  return modal;
}