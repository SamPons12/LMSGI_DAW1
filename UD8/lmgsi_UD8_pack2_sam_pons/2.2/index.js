let time = 0;

function temporitzador(){
  document.querySelector(".temporitzador").textContent = time;
  setInterval(() => {
    time++;
    document.querySelector(".temporitzador").textContent = time;
  }, 1000);
}

window.addEventListener("load", temporitzador)
document.querySelector(".reset").addEventListener("click", () => {
  time = -1;
})