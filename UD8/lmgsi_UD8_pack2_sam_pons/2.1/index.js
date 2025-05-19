const btn = document.querySelector(".resize");

window.addEventListener("load", finestra);
window.addEventListener("resize", finestra);

btn.addEventListener("click", finestra);

function finestra() {
  let ample = window.innerWidth;
  let alt = window.innerHeight;

  document.querySelector(".ample").textContent = ample;
  document.querySelector(".alt").textContent = alt;
}
