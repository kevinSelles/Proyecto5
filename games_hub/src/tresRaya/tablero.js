import { getTurns } from "./turnos";
import { getWinner } from "./ganador";
import { resetTurn } from "./turnos";
import { getIsGameOver } from "./gameOver";
import { getSetGameOver } from "./gameOver";
import { getWins } from "./marcador";

export function getGameBoard() {

  const board = document.createElement("div");
  board.classList.add("board");

  for (let i = 0; i < 9; i++) {

    const button = document.createElement("button");
    button.classList.add(`button${i}`);

    button.addEventListener("click", () => {
      if(getIsGameOver()) {
        return;
      }
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

let lastStarter = "O";

export function resetBoard() {

  const buttons = document.querySelectorAll(".board button");

  for(const button of buttons) {

    const img = button.querySelector("img");

    if (img) {
      img.remove();
    };
  }

  const {winsX, winsO} = getWins();

  let starter;

  if(winsX < winsO) {
    starter = "X";
  } else if(winsO < winsX) {
    starter = "O";
  } else if(lastStarter === "X") {
    starter = "O";
  } else {
    starter = "X";
  }
  lastStarter = starter;

  resetTurn(starter);

  getSetGameOver(false);
}
