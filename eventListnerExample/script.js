// eventListner = Listen for specific events to create interactive web pages

// events: click , mouseover , mouseout

// .addEventListener(event,callback)

const myBox = document.getElementById("box");

// function changeColor(event) {
//   event.target.style.backgroundColor = "tomato";
//   event.target.textContent = "Ouch! 🤒";
// }
// myBox.addEventListener("click", changeColor);

myBox.addEventListener("click", (event) => {
  event.target.style.backgroundColor = "tomato";
  event.target.textContent = "Ouch! 🤒";
});

myBox.addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = "yellow";
});

myBox.addEventListener("mouseleave", (event) => {
  event.target.style.backgroundColor = "lightgreen";
});
