// a
const container = document.getElementById("container");

// b
document.querySelector("#container");

// c
document.querySelectorAll(".second");

// d
document.querySelector("ul .third");

// e
container.appendChild(document.createTextNode("Hola!")); 

//f
const footer = document.querySelector(".footer");
footer.classList.add("main");

// g
footer.classList.remove("main");

// h
const elementLi = document.createElement("li");

// i
elementLi.appendChild(document.createTextNode("four"));

// j
const ul = document.querySelector("#container ul");
ul.appendChild(elementLi);

// k
const ol = document.querySelectorAll("#container ol");
ol.forEach(item => item.style.backgroundColor = "green");


// i
const divFooter = document.querySelector(".footer");
divFooter.remove();
