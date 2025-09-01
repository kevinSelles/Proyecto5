export function getSimonButtons(bottomDiv) {
  const colors = ["yellow", "red", "blue", "green"];
  const buttons = {};
  const allButtons = bottomDiv.querySelectorAll(".simon-button");
  for (let i = 0; i < allButtons.length; i++) {
    const btn = allButtons[i];
    for (let j = 0; j < colors.length; j++) {
      if (btn.classList.contains(colors[j])) {
        buttons[colors[j]] = btn;
      }
    }
  }
  return buttons;
}