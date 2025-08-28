import "./tresRaya.css";

import { getGameBoard } from "./tablero";
import { resetBoard } from "./tablero";
import { getScore } from "./marcador";
import { resetScores } from "./marcador";
import { getCurrentPlayer } from "./turnos";

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

  const turnIndicator = document.createElement("div");
  turnIndicator.classList.add("turn-indicator");
  turnIndicator.textContent = `Turno: ${getCurrentPlayer()}`;

  boardAndTurns.addEventListener("click", () => {
    turnIndicator.textContent = `Turno: ${getCurrentPlayer()}`;
  })

  tresRaya.appendChild(boardAndTurns);
  tresRaya.appendChild(scores);
  tresRaya.appendChild(turnIndicator);

  return tresRaya;
}