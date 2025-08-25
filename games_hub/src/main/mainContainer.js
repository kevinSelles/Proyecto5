import "./mainContainer.css";

export function getMain() {

  const main = document.createElement("main");

  const categories = ["Estrategia", "Cultura", "Memoria"];

  for (let i = 0; i < categories.length; i++) {
  const title = document.createElement("h2");
  title.textContent = categories[i];
  title.classList.add("categories", `category${i + 1}`);

  main.appendChild(title);
};

  const games = [
    {title: "Tres en raya", img: "/assets/img/", text: "Pon a prueba tu estrategia contra otro jugador", alt: "Imagen del juego tres en raya", class: "game1"},
    {title: "Quiz", img: "/assets/img/", text: "¡Demuestra lo que sabes!", alt: "Imagen del juego quiz", class: "game2"},
    {title: "Simon", img: "/assets/img/", text: "¿Cuanto crees que puedes aguantar?", alt: "Imagen del Simon", class: "game3"}
  ];

  for(const game of games) {
    const section = document.createElement("section");
    section.classList = game.class;

    const name = document.createElement("h3");
    name.textContent = game.title;
    name.classList.add("game-title")

    const gameImg = document.createElement("img");
    gameImg.src = game.img;
    gameImg.alt = game.alt;
    gameImg.classList.add("game-img");

    const p = document.createElement("p");
    p.textContent = game.text;
    p.classList.add("game-p");

    section.appendChild(name);
    section.appendChild(gameImg);
    section.appendChild(p);

    main.appendChild(section);
  }

  document.body.appendChild(main);

  return main;
};