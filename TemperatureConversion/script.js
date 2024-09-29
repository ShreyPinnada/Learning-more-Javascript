const mytextBox = document.getElementById("TextBox");
const celsiusBox = document.getElementById("toCelsius");
const farenheitBox = document.getElementById("toFarenheit");
const result = document.getElementById("result");
let temp;
function convert() {
  if (farenheitBox.checked) {
    temp = Number(mytextBox.value);
    temp = (temp * 9) / 5 + 32;
    result.textContent = temp + "F";
  } else if (celsiusBox.checked) {
    temp = Number(mytextBox.value);
    temp = (temp - 32) * (5 / 9);
    result.textContent = temp + "C";
  } else {
    result.textContent = "select a unit to convert to";
  }
}
