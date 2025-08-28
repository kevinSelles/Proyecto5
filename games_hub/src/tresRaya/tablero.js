import { getTurns } from "./turnos";
import { getWinner } from "./ganador";

export function getGameBoard() {

  const board = document.createElement("div");
  board.classList.add("board");

  for (let i = 0; i < 9; i++) {

    const button = document.createElement("button");
    button.classList.add(`button${i}`);

    button.addEventListener("click", () => {
      if (button.querySelector("img")) {
        return;
      };

      const img = getTurns();

      img.addEventListener("load", () => {
        getWinner();
      });

      button.appendChild(img);
    })

    board.appendChild(button);
  }

  return board;
}
