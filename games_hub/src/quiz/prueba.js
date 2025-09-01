import { questions } from "./preguntas";

export function getGameTest() {

  let current = 0;
  let score = 0;
  
  const questionsContainer = document.createElement("div");
  questionsContainer.classList.add("questions-container");

  const questionTitle = document.createElement("h3");
  questionTitle.classList.add("question-title");
  questionsContainer.appendChild(questionTitle);

  const optionsContainer = document.createElement("div");
  optionsContainer.classList.add("options-container");
  questionsContainer.appendChild(optionsContainer);

  const optionButtons = [];

  for(let i = 0; i < 4; i++) {
    const option = document.createElement("button");
    option.classList.add("option");
    optionsContainer.appendChild(option);
    optionButtons.push(option);

    option.addEventListener("click", () => {
      const question = questions[current];

      if(i === question.correctIndex) {
        option.classList.add("correct");
        score++;
      } else {
        option.classList.add("wrong");
      }

      const points = document.querySelector(".puntuacion");
      if(points) {
        points.textContent = String(score);
      }
      const scores = document.querySelector(".marcador");
      if(scores) {
        scores.textContent = "Puntuacion";
      }

      for(const btn of optionButtons) {
        btn.disabled = true;
      };

      setTimeout(() => {
        for(const button of optionButtons) {
          button.classList.remove("correct", "wrong");
          button.disabled = false;
        }

        current++;

        if(current >= questions.length) {
          questionTitle.textContent = "Fin del quiz";
          for(const button of optionButtons) {
            button.disabled = true;
            button.textContent = "";
          } 
          }
          else {
            loadQuestion(current);
        }
      },700)
    });
  };

  function loadQuestion(index) {
    const question = questions[index];

    if(!question) return;
    questionTitle.textContent = question.question;

    for(let j = 0; j < 4; j++) {
      if (question.options[j]) {
        optionButtons[j].textContent = question.options[j];
      } else {
        optionButtons[j].textContent = "";
        };
    }
  }

  loadQuestion(current);

  return questionsContainer;
}