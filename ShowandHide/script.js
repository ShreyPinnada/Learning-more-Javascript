const image = document.getElementById("myImg");
const myButton = document.getElementById("myButton");

myButton.addEventListener("click", (event) => {
  if (image.style.visibility === "hidden") {
    image.style.visibility = "visible";
    myButton.textContent = "Hide";
  } else {
    image.style.visibility = "hidden";
    myButton.textContent = "Show";
  }
});
