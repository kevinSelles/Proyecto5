let winsX = 0;
let winsO = 0;

export function getScore() {

  const score = document.createElement("div");
  score.classList.add("score-container");

  const scoreTitle = document.createElement("h3");
  scoreTitle.classList.add("score-title");
  scoreTitle.textContent = "Puntuación:";

  const imgX = document.createElement("img");
  imgX.src = "/assets/img/x.webp";
  imgX.classList.add("img-x");
  imgX.alt = "X";

  const imgO = document.createElement("img");
  imgO.src = "/assets/img/o.webp";
  imgO.classList.add("img-o");
  imgO.alt = "O";

  const scoreX = document.createElement("p");
  scoreX.textContent = winsX;

  const scoreO = document.createElement("p");
  scoreO.textContent = winsO;

  score.appendChild(scoreTitle);
  score.appendChild(imgX);
  score.appendChild(scoreX);
  score.appendChild(imgO);
  score.appendChild(scoreO);

  return score;
}

export function calculatingScore(winner) {

  if(winner === X) {
    winsX++;
  }
  if(winner === O) {
    winsO++;
  }
}