let winsX = 0;
let winsO = 0;

let finalWinX = null;
let finalWinO = null;

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

  const finalWinX = document.createElement("p");
  finalWinX.textContent = winsX;
  finalWinX.classList.add("score-x");

  const finalWinO = document.createElement("p");
  finalWinO.textContent = winsO;
  finalWinO.classList.add("score-o");

  score.appendChild(scoreTitle);
  score.appendChild(imgX);
  score.appendChild(finalWinX);
  score.appendChild(imgO);
  score.appendChild(finalWinO);

  return score;
}

export function calculatingScore(winner) {

  if(winner === "X") {
    winsX++;
  } else if(winner === "O") {
    winsO++;
    } else {
      return;
      }

  if (finalWinX) {
    finalWinX.textContent = winsX;
  } else {
    const el = document.querySelector(".score-x");
    if (el) el.textContent = winsX;
  }
  if (finalWinO) {
    finalWinO.textContent = winsO;
  } else {
    const el = document.querySelector(".score-o");
    if (el) el.textContent = winsO;
  }
}

export function resetScores() {

  winsX = 0;
  winsO = 0;

  if(finalWinX) {
    finalWinX.textContent = winsX;
  } else {
    const el = document.querySelector(".score-x");
    if (el) el.textContent = winsX;
  }
  if(finalWinO) {
    finalWinO.textContent = winsO;
  } else {
    const el = document.querySelector(".score-o");
    if (el) el.textContent = winsO;
  }
}

export function getWins() {
  
  return {winsX, winsO};
};