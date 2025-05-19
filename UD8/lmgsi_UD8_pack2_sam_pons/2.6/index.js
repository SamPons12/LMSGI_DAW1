const btnAdd = document.querySelector("#add-task");
const taskList = document.querySelector("#task-list");
const filterSelect = document.querySelector("#filter");

btnAdd.addEventListener("click", () => {
  const text = document.getElementById("task-input");
  if(text.value === ""){
    console.log("Buit");
  }else{
    
    const element = document.createElement("li");
    const elementEliminar = document.createElement("button")
    elementEliminar.textContent = "Eliminar";
    element.textContent = text.value;
    element.classList.add("pending")
    taskList.appendChild(element);
    element.appendChild(elementEliminar);
    text.value = "";

    element.addEventListener("click", () => {
      if(element.classList.contains("pending")){
          element.classList.remove("pending")
          element.classList.add("completed");
      }else if (element.classList.contains("completed")){
        element.classList.remove("completed")
          element.classList.add("pending");
      }
    });

    elementEliminar.addEventListener("click", () =>{
      elementEliminar.parentElement.remove();
    });
    
    
    filterSelect.addEventListener("change", (e) => {
      if (element.classList.contains(filterSelect.value) || filterSelect.value === "all"){
        element.style.display = "list-item";
      }else{
        element.style.display = "none";
      }
    });
  }

  
});






