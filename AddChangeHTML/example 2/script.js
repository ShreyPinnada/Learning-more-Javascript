//1. creating a new html elememt
const newListItem = document.createElement("li");

//2. add attributes to the new created element
newListItem.textContent = "coconut";

//3 append or prepend the new element in the DOM
//document.body.append(newListItem);
//document.getElementById("fruits").appen9(newListItem);
//document.getElementById("fruits").prepend(newListItem);

// const orange = document.getElementById("orange");
// document.getElementById("fruits").insertBefore(newListItem, orange);

// const fruits = document.querySelectorAll("#fruits li");
// document.getElementById("fruits").insertBefore(newListItem, fruits[3]);

//4. Remnove HTML Element
document.body.removeChild(newListItem);
document.getElementById("fruits").removeChild(newListItem);
