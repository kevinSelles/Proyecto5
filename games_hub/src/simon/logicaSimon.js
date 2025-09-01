import { getSimonButtons } from "./botonesSimon.js";
import { playSequence } from "./secuencia.js";
import { handleButtonClick } from "./logicaDeJuego.js";
import { resetScore } from "./contadorSimon.js";

export function getSimonGame(bottomDiv, counters) {
  const buttons = getSimonButtons(bottomDiv);
  const colors = Object.keys(buttons);
  const state = {
    sequence: [],
    playerIndex: { value: 0 },
    totalCorrect: 0,
    isPlayingSequence: false,
    buttons,
    counters,
    sequenceInterval: null
  };

  function startGame() {
    if (state.sequenceInterval) {
      clearInterval(state.sequenceInterval);
      state.sequenceInterval = null;
      state.isPlayingSequence = false;
    }

    state.sequence = [colors[Math.floor(Math.random() * colors.length)]];
    state.playerIndex.value = 0;
    state.totalCorrect = 0;
    resetScore(counters);

    const intervalId = playSequence(state.sequence, buttons, function(val) {
      state.isPlayingSequence = val;
    });

    state.sequenceInterval = intervalId;
  }

  for (let color of colors) {
    buttons[color].addEventListener("click", () => handleButtonClick(color, state));
  }

  return startGame;
}