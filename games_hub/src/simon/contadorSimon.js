
export function getSimonCounters() {
  const container = document.createElement("div");
  container.classList.add("simon-counters");

  const current = document.createElement("span");
  current.classList.add("current-value");
  current.textContent = "0";

  const high = document.createElement("span");
  high.classList.add("high-value");

  const savedHigh = localStorage.getItem("simonHighScore");
  high.textContent = savedHigh ? savedHigh : "0";

  container.appendChild(document.createTextNode("Puntos: "));
  container.appendChild(current);

  container.appendChild(document.createTextNode(" | Récord: "));
  container.appendChild(high);

  return container;
}

export function resetScore(counters) {
  const currentValue = counters.querySelector(".current-value");
  currentValue.textContent = "0";
}

export function addPoint(counters) {
  const currentValue = counters.querySelector(".current-value");
  let value = parseInt(currentValue.textContent, 10);
  value++;
  currentValue.textContent = value;
  return value;
}

export function updateHighScore(counters, value) {
  const highValue = counters.querySelector(".high-value");
  const currentHigh = parseInt(highValue.textContent, 10) || 0;
  if (value > currentHigh) {
    highValue.textContent = value;
    localStorage.setItem("simonHighScore", value);
  }
}