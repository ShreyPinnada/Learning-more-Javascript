const myInput = document.getElementById("myInput");
const myButton = document.getElementById("myButton");
const result = document.getElementById("resultLabel");
let age;

myButton.onclick = function () {
  age = myInput.value;
  age = Number(age);

  if (age >= 100) result.textContent = "youre too old";
  else if (age == 0) result.textContent = "you cant enter this";
  else if (age >= 18) result.textContent = "you are old enough";
  else if (age < 0) result.textContent = "not valid input cant be < 0";
  else result.textContent = "you are not yet eligible";
};
