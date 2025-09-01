export function getScoreCounter() {
  
  const counter = document.createElement("p");
  counter.classList.add("score-counter");
  counter.textContent = "Puntuación: ";

  const value = document.createElement("span");
  value.classList.add("score-value");

  const savedScore = localStorage.getItem("quizLastScore");
  if (savedScore) {
    value.textContent = savedScore;
  } else {
    value.textContent = "0";
  }

  counter.appendChild(value);

  counter.incrementScore = function(amount) {
    let current = parseInt(value.textContent);
    current += amount;
    value.textContent = current;
    localStorage.setItem("quizLastScore", current);
  }

  counter.resetScore = function() {
    value.textContent = "0";
    localStorage.setItem("quizLastScore", 0);
  }

  return counter;
}