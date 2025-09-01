export function initQuizPreguntas(bottomDiv, scoreCounter) {
  
  let currentQuestions = [];
  let currentIndex = 0;
  let timer = null;
  const timeLimit = 25;
  let timeLeft = timeLimit;

  const startQuiz = (filteredQuestions) => {
    currentQuestions = filteredQuestions;
    currentIndex = 0;
    scoreCounter.resetScore();
    showQuestion();
  };

  const showQuestion = () => {
    bottomDiv.textContent = "";

    if (currentIndex >= currentQuestions.length) {
      bottomDiv.textContent = "Has completado esta dificultad!";
      return;
    }

    const q = currentQuestions[currentIndex];

    const questionText = document.createElement("p");
    questionText.textContent = q.question;
    questionText.classList.add("question-text");
    bottomDiv.appendChild(questionText);

    for (let i = 0; i < q.options.length; i++) {
      const optionBtn = document.createElement("button");
      optionBtn.textContent = q.options[i];
      optionBtn.classList.add("option-button");
      bottomDiv.appendChild(optionBtn);

      optionBtn.addEventListener("click", () => {
        if (i === q.correctIndex) {
          scoreCounter.incrementScore(1);
        }
        nextQuestion();
      });
    }

    const countdown = document.createElement("p");
    countdown.classList.add("countdown");
    countdown.textContent = "Tiempo: " + timeLeft + "s";
    bottomDiv.appendChild(countdown);

    clearInterval(timer);
    timeLeft = timeLimit;
    timer = setInterval(() => {
      timeLeft -= 1;
      countdown.textContent = "Tiempo: " + timeLeft + "s";
      if (timeLeft <= 0) {
        nextQuestion();
      }
    }, 1000);
  };

  const nextQuestion = () => {
    clearInterval(timer);
    currentIndex += 1;
    timeLeft = timeLimit;
    showQuestion();
  };

  return startQuiz;
}