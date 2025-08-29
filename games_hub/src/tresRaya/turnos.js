let turn = 0;
let currentTurn = "X";

export function getTurns() {

  const img = document.createElement("img");

  if (currentTurn === "X") {
    img.src = "/assets/img/x.webp";
    img.alt = "X";
  } else {
      img.src = "/assets/img/o.webp";
      img.alt = "O";
    };

  if (currentTurn === "X") {
    currentTurn = "O";
  } else {
    currentTurn = "X";
    }

  turn++;

  return img;
}

export function resetTurn(startPlayer = "X") {
  turn = 0;
  currentTurn = startPlayer;
}