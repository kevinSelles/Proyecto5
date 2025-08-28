import { calculatingScore } from "./marcador";
import { getSetGameOver } from "./gameOver";

export function getWinner() {

  const b0 = document.querySelector(".button0 img");
  const b1 = document.querySelector(".button1 img");
  const b2 = document.querySelector(".button2 img");
  const b3 = document.querySelector(".button3 img");
  const b4 = document.querySelector(".button4 img");
  const b5 = document.querySelector(".button5 img");
  const b6 = document.querySelector(".button6 img");
  const b7 = document.querySelector(".button7 img");
  const b8 = document.querySelector(".button8 img");

  let winner = null;

  if(b0 && b1 && b2 && b0.src === b1.src && b0.src === b2.src) {
    winner = b0.alt;
  }
  if(b3 && b4 && b5 && b3.src === b4.src && b3.src === b5.src) {
    winner = b3.alt;
  }
  if(b6 && b7 && b8 && b6.src === b7.src && b6.src === b8.src) {
    winner = b6.alt;
  }
  if(b0 && b3 && b6 && b0.src === b3.src && b0.src === b6.src) {
    winner = b0.alt;
  }
  if(b1 && b4 && b7 && b1.src === b4.src && b1.src === b7.src) {
    winner = b1.alt;
  }
  if(b2 && b5 && b8 && b2.src === b5.src && b2.src === b8.src) {
    winner = b2.alt;
  }
  if(b0 && b4 && b8 && b0.src === b4.src && b0.src === b8.src) {
    winner = b0.alt;
  }
  if(b2 && b4 && b6 && b2.src === b4.src && b2.src === b6.src) {
    winner = b2.alt;
  }

  if(winner) {
    calculatingScore(winner);
    alert(`¡Ganaste ${winner}!`);
    getSetGameOver(true);
    return winner;
  };

  if(winner === null && b0 && b1 && b2 && b3 && b4 && b5 && b6 && b7 && b8) {
    alert("¡Empate!")
    getSetGameOver(true);
  }

  return null;
}
