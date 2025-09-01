export function getDifficultyButtons(questions, showQuestionCallback) {
  const container = document.createElement("div");
  container.classList.add("difficulty-container");

  const difficulties = [
    { text: "Fácil", color: "green", class: "easy" },
    { text: "Normal", color: "yellow", class: "normal" },
    { text: "Difícil", color: "red", class: "hard" }
  ];

  for (let i = 0; i < difficulties.length; i++) {
    const button = document.createElement("button");
    button.textContent = difficulties[i].text;
    button.classList.add("difficulty-button", difficulties[i].class);
    button.style.backgroundColor = difficulties[i].color;
    container.appendChild(button);
  }

  const buttons = container.querySelectorAll(".difficulty-button");
  for (const button of buttons) {
    button.addEventListener("click", () => {
      let difficulty = "";
      if (button.classList.contains("easy")) {
        difficulty = "easy";
      } else if (button.classList.contains("normal")) {
        difficulty = "medium";
      } else {
        difficulty = "hard";
      }

      const filteredQuestions = [];
      for (const q of questions) {
        if (q.difficulty === difficulty) {
          filteredQuestions.push(q);
        }
      }

      showQuestionCallback(filteredQuestions);
    });
  }

  return container;
};