export function playSequence(sequence, buttons, setPlaying) {
  
  let i = 0;
  setPlaying(true);

  const interval = setInterval(() => {
    if (i >= sequence.length) {
      clearInterval(interval);
      setPlaying(false);
      return;
    }
    const color = sequence[i];
    buttons[color].classList.add("active");
    setTimeout(() => buttons[color].classList.remove("active"), 500);
    i++;
  }, 800);

  return interval;
};