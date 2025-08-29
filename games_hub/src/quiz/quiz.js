import "./quiz.css";

import { questions } from "./preguntas";
import { getGameTest } from "./gameTest";
import { getMenu } from "./menu";

export function getQuiz() {

  const quiz = document.createElement("article");
  quiz.classList.add("quiz-container");

  const gameTest = getGameTest();
  const gameMenu = getMenu();

  quiz.appendChild(gameTest);
  quiz.appendChild(gameMenu);

  return quiz;
}