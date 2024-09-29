function generatePassword(
  passwordLength,
  includeLowerCase,
  includeUpperCase,
  includeNumbers,
  includeSymbols
) {
  const lowerCase = "abcdefghijklmnopqrtuvwxyz";
  const upperCase = "ABCDEFHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "+_|<?*&^%$#@!";

  let allowedChars = "";
  let password = "";

  allowedChars += includeLowerCase ? lowerCase : "";
  allowedChars += includeUpperCase ? upperCase : "";
  allowedChars += includeNumbers ? numbers : "";
  allowedChars += includeSymbols ? symbols : "";

  if (passwordLength <= 0) {
    resultLabel.textContent = "(password length must be at least 1)";
    return;
  }
  if (allowedChars.length === 0) {
    resultLabel.textContent =
      "(at least one set of characters must be selected)";
    return;
  }

  for (let i = 0; i < passwordLength; i++) {
    const random = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[random];
  }
  resultLabel.textContent = password;
}

const submitButton = document.getElementById("submit");

submitButton.onclick = function () {
  const passwordLength = parseInt(
    document.getElementById("passwordLength").value
  );
  const includeLowerCase = document.getElementById("lowercaseRadio").checked;
  const includeUpperCase = document.getElementById("uppercaseRadio").checked;
  const includeNumbers = document.getElementById("numberRadio").checked;
  const includeSymbols = document.getElementById(
    "specialCharactersRadio"
  ).checked;

  generatePassword(
    passwordLength,
    includeLowerCase,
    includeUpperCase,
    includeNumbers,
    includeSymbols
  );
};
