let turn = 0;

export function getTurns() {

  const img = document.createElement("img");
  img.alt = "Ficha";

    if(turn % 2 === 0) {
      img.src = "/assets/img/x.webp";
      img.alt = "X";
    } else {
      img.src = "/assets/img/o.webp";
      img.alt = "O";
    }

  turn++;

  return img;
}