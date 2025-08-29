export function getGameTest() {
  
  const questionsContainer = document.createElement("div");
  questionsContainer.classList.add("questions-container");

  const questionTitle = document.createElement("h3");
  questionTitle.textContent = "";
  questionTitle.classList.add("question-title");

  const optionsContainer = document.createElement("div");
  optionsContainer.classList.add("options-container");

  const options = ["option0", "option1", "option2", "option3"];

  for(let i = 0; i < options.length; i++) {
    const option = document.createElement("p");
    option.textContent = options[i];
    option.classList.add(`option-${i}`);

    optionsContainer.appendChild(option);
  };

  questionsContainer.appendChild(questionTitle);
  questionsContainer.appendChild(optionsContainer);

  return questionsContainer;
}