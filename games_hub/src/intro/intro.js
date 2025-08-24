import "./intro.css";

export function getIntro() {

  const intro = document.createElement("section");
  intro.classList.add("intro");

  const topText = document.createElement("p");
  topText.textContent = "Cargando juegos";
  topText.classList.add("intro-text", "intro-top");

  const introVideo = document.createElement("video");
  introVideo.autoplay = true;
  introVideo.muted = true;
  introVideo.playsInline = true;
  introVideo.id = "intro-video";
  introVideo.src = "assets/video/loading.webm";

  const bottomText = document.createElement("p");
  bottomText.textContent = "Por favor, espere";
  bottomText.classList.add("intro-text", "intro-bottom");

  intro.appendChild(topText);
  intro.appendChild(introVideo);
  intro.appendChild(bottomText);
  document.body.appendChild(intro);

  return intro;
}