import "./header.css";

export function getHeader() {

  const header = document.createElement("header");
  header.style.display = "none";

  const background = document.createElement("div");
  background.classList.add("header-background");

  const clouds = document.createElement("div");
  clouds.classList.add("clouds");

  const mario = document.createElement("div");
  mario.classList.add("mario");

  const title = document.createElement("h1");
  title.textContent = "KevinFy Games";

  header.appendChild(background);
  header.appendChild(clouds);
  header.appendChild(mario);
  header.appendChild(title);

  document.body.prepend(header);

  return header;
}