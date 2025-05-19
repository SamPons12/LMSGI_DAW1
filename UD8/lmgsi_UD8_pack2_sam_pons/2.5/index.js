const btnAfegir = document.querySelector("#introduir")
const btnPrimer = document.querySelector("#primer")
const btnUltim = document.querySelector("#darrer")
const llista = document.querySelector(".llista");


btnAfegir.addEventListener("click", () => {
  const text = prompt("Escriu el nou element");
  const element = document.createElement("li");
  element.textContent = text;
  llista.appendChild(element);
});

btnPrimer.addEventListener("click", () => {
  llista.firstElementChild.remove();
});

btnUltim.addEventListener("click", () => {
  llista.lastElementChild.remove();
});

