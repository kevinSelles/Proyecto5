import "./footer.css";

export function getFooter() {

  const footer = document.createElement("footer");
  
  const footerP = document.createElement("p");
  footerP.innerHTML = "Games Hub created as an academic project by the student <a>Kevin Selles</a>";

  footer.appendChild(footerP);
  document.body.appendChild(footer);

  return footer;
}