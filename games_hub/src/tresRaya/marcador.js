const storageKey = "tresRaya-scores";

let winsX = 0;
let winsO = 0;

let finalWinX = null;
let finalWinO = null;

function loadStorageScores() {

  const storageScore = localStorage.getItem(storageKey);

  if(!storageScore) {
    return;
  };

  const parsedScore = JSON.parse(storageScore);
  winsX = parsedScore.winsX || 0;
  winsO = parsedScore.winsO || 0;
};

function saveScores() {

  const scoresToSave = {winsX: winsX, winsO: winsO};
  localStorage.setItem(storageKey, JSON.stringify(scoresToSave));
};

loadStorageScores();

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

  finalWinX = document.createElement("p");
  finalWinX.textContent = winsX;
  finalWinX.classList.add("score-x");

  finalWinO = document.createElement("p");
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

  finalWinX.textContent = winsX;
  finalWinO.textContent = winsO;

  saveScores();
};

export function resetScores() {

  winsX = 0;
  winsO = 0;

    finalWinX.textContent = winsX;
    finalWinO.textContent = winsO;

    saveScores();
}

export function getWins() {
  
  return {winsX, winsO};
};