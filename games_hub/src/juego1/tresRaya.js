import "./tresRaya.css";

export function getTresRaya() {

  const tresRaya = document.createElement("div");
  tresRaya.classList.add("tres-raya");

  let turn = 0;

  for(let i = 0; i < 9; i++) {

    const button = document.createElement("button");
    button.classList.add(`button${i}`);

    button.addEventListener("click", () => {

      if(button.querySelector("img")) {
        return;
      };

      const img = document.createElement("img");
      img.alt = "Ficha";

      if(turn % 2 === 0) {
        img.src = "/assets/img/x.webp";
        img.alt = "X";
      } else {
        img.src = "/assets/img/o.webp";
        img.alt = "O";
      }

      turn++;

      button.appendChild(img);
    })

    tresRaya.appendChild(button);
  }

  return tresRaya;
}