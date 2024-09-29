function increaseSize(event) {
  const circle = event.target;
  const step = 10;
  const currentWidth = parseFloat(window.getComputedStyle(circle).width);
  const currentHeight = parseFloat(window.getComputedStyle(circle).height);
  circle.style.width = currentWidth + step + "px";
  circle.style.height = currentHeight + step + "px";
}
document.querySelectorAll(".circle").forEach((circle) => {
  circle.addEventListener("click", increaseSize);
});
