let btn = document.querySelector("main button");
let btnAccept = document.querySelector("#modal div button");
let btnCancel = document.querySelector("#modal div button:nth-child(2)");

btn.addEventListener("click", () => {
  const modal = document.getElementById("modal-background");
  modal.style.display = "flex";
});

btnAccept.addEventListener("click", () => {
  alert("Confirmacio")
  const modal = document.getElementById("modal-background");
  modal.style.display = "none";

});

btnCancel.addEventListener("click", () => {
  const modal = document.getElementById("modal-background");
  modal.style.display = "none";

});
