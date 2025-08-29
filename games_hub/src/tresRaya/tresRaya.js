import "./tresRaya.css";

import { getGameBoard } from "./tablero";
import { resetBoard } from "./tablero";
import { getScore } from "./marcador";
import { resetScores } from "./marcador";

export function getTresRaya() {

  const tresRaya = document.createElement("article");
  tresRaya.classList.add("tres-raya");

  const boardAndTurns = getGameBoard();
  const scores = getScore();

  const buttonResetBoard = document.createElement("button");
  buttonResetBoard.classList.add("button-reset-board");
  buttonResetBoard.textContent = "Reiniciar tablero";
  buttonResetBoard.addEventListener("click", () => {
    resetBoard();
  })

  const buttonResetScores = document.createElement("button");
  buttonResetScores.classList.add("button-reset-scores");
  buttonResetScores.textContent = "Reiniciar marcador";
  buttonResetScores.addEventListener("click", () => {
    resetScores();
    resetBoard();
  })

  scores.appendChild(buttonResetBoard);
  scores.appendChild(buttonResetScores);

  tresRaya.appendChild(boardAndTurns);
  tresRaya.appendChild(scores);

  return tresRaya;
}