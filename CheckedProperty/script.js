const myCheckBox = document.getElementById("myCheckBox");
const myVisa = document.getElementById("myvisa");
const myMasterCard = document.getElementById("mymastercard");
const mySubResult = document.getElementById("subResult");
const myRadioResult = document.getElementById("cardResult");
const submit = document.getElementById("mySubmit");
let selected = false;
submit.onclick = function () {
  if (myCheckBox.checked) mySubResult.textContent = "Subscribed";
  else mySubResult.textContent = "Not Subscribed";

  if (myVisa.checked) myRadioResult.textContent = "Visa Selected";
  else if (myMasterCard.checked)
    myRadioResult.textContent = "MasterCard Selected";
  else myRadioResult.textContent = "You must select a payment method";
};
