//1. Create the element
const newH1 = document.createElement("h1");

//2. Add attributes/properties
newH1.textContent = "New Element inserted!";
newH1.id = "newH1";

//3.append or prepend the element to the DOM
//document.body.append(newH1);
//document.body.prepend(newH1);
//document.getElementById("Box1").append(newH1);
//document.getElementById("Box1").prepend(newH1);

//if want to enter in betweeen
// const box2 = document.getElementById("Box2");
// document.body.insertBefore(newH1, box2);

// we can also use query selector
// const boxes = document.querySelectorAll(".Box");
// document.body.insertBefore(newH1, boxes[2]);

//4. Remove HTML
document.body.removeChild(newH1);
