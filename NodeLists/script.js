const buttons = document.querySelectorAll(".myButton");

buttons.forEach((button) => {
  button.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "lightpink";
  });
});

buttons.forEach((button) => {
  button.addEventListener("mouseout", (event) => {
    event.target.style.backgroundColor = "lightblue";
  });
});

//Node list are static and any changes will not immediately reflect to the DOM
// we have to call it again

// lets create a new button
const newButton = document.createElement("button");

newButton.textContent = "Button 5";
newButton.classList = "myButton";
document.body.appendChild(newButton);

// if i console log now i will see only 4 buttons in the buttons query selector as the changes have not been reflected yet
// that is why i will call the query selector again

buttons = document.querySelectorAll(".myButton");
console.log(buttons);

//even while removeing elements, say for every click we remove the button if we dont call
//query selector for every remove , there will still be the same no of elements
