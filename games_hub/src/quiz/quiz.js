import "./quiz.css";
import { getDifficultyButtons } from "./botonesDificultad.js";
import { getScoreCounter } from "./contadorPuntuacion.js";
import { questions } from "./preguntas.js";
import { initQuizPreguntas } from "./quizPreguntas.js";

export function getQuiz() {
  const article = document.createElement("article");
  article.classList.add("quiz");

  const topDiv = document.createElement("div");
  topDiv.classList.add("quiz-top");

  const bottomDiv = document.createElement("div");
  bottomDiv.classList.add("quiz-bottom");
  bottomDiv.textContent = "Seleccione dificultad";

  const scoreCounter = getScoreCounter();

  const startQuiz = initQuizPreguntas(bottomDiv, scoreCounter);

  const difficultyButtonsContainer = getDifficultyButtons(questions, startQuiz);

  topDiv.appendChild(difficultyButtonsContainer);
  topDiv.appendChild(scoreCounter);
  article.appendChild(topDiv);
  article.appendChild(bottomDiv);

  return article;
}