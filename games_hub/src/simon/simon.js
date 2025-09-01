import "./simon.css";

import { getSimonCounters } from "./contadorSimon";
import { getSimonGame } from "./logicaSimon.js";

export function getSimon() {

  const article = document.createElement("article");
  article.classList.add("simon");

  const topDiv = document.createElement("div");
  topDiv.classList.add("simon-top");

  const bottomDiv = document.createElement("div");
  bottomDiv.classList.add("simon-bottom");

  const counters = getSimonCounters();
  topDiv.appendChild(counters);

  const startButton = document.createElement("button");
  startButton.textContent = "Empezar";
  startButton.classList.add("simon-start-button");
  topDiv.appendChild(startButton);

  article.appendChild(topDiv);
  article.appendChild(bottomDiv);

  const colors = ["yellow", "red", "blue", "green"];
  for (let i = 0; i < colors.length; i++) {
    const btn = document.createElement("button");
    btn.classList.add("simon-button", colors[i]);
    bottomDiv.appendChild(btn);
  }

  const startGame = getSimonGame(bottomDiv, counters);

  startButton.addEventListener("click", function() {
    startGame();
  });

  return article;
}