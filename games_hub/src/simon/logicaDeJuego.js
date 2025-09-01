import { addPoint, updateHighScore, resetScore } from "./contadorSimon.js";
import { playSequence } from "./secuencia.js";

export function handleButtonClick(colorName, state) {
  const { sequence, playerIndex, buttons, counters } = state;
  const isPlayingSequence = state.isPlayingSequence;

  if (isPlayingSequence || sequence.length === 0) return;

  if (sequence[playerIndex.value] === colorName) {
    playerIndex.value++;
    state.totalCorrect = addPoint(counters);

    if (playerIndex.value === sequence.length) {
      updateHighScore(counters, state.totalCorrect);
      setTimeout(() => {
        sequence.push(Object.keys(buttons)[Math.floor(Math.random() * 4)]);
        playerIndex.value = 0;
        const intervalId = playSequence(sequence, buttons, function(val) {
          state.isPlayingSequence = val;
        });
        state.sequenceInterval = intervalId;
      }, 1000);
    }
  } else {
    updateHighScore(counters, state.totalCorrect);
    alert("Fallaste! Empieza de nuevo.");

    if (state.sequenceInterval) {
      clearInterval(state.sequenceInterval);
      state.sequenceInterval = null;
    }
    state.isPlayingSequence = false;

    playerIndex.value = 0;
    state.totalCorrect = 0;
    resetScore(counters);
    sequence.length = 0;
  };
};