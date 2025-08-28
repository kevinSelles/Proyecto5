import "./tresRaya.css";

import { getGameBoard } from "./tablero";
import { getScore } from "./marcador";

export function getTresRaya() {

  const tresRaya = document.createElement("article");
  tresRaya.classList.add("tres-raya");

  const boardAndTurns = getGameBoard();
  const scores = getScore();

  tresRaya.appendChild(boardAndTurns);
  tresRaya.appendChild(scores);

  return tresRaya;
}