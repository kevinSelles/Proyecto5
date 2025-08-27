import "./modal.css";

import { getTresRaya } from "../juego1/tresRaya";

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
    const existingGame = document.querySelector(".tres-raya");
    if(existingGame) {
      existingGame.remove();
    }
  });

  modal.openTresRaya = () => {
    const tresRaya = getTresRaya();
    modal.appendChild(tresRaya);
    modal.style.display = "flex";
  }

  return modal;
}