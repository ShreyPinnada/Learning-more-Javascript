const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while (running) {
  guess = window.prompt(`guess a number between ${minNum} & ${maxNum}`);
  guess = Number(guess);
  console.log(typeof guess, guess);

  if (isNaN(guess)) window.alert("please enter a valid number");
  else if (guess < minNum || guess > maxNum)
    window.alert("please enter a number within the given range");
  else {
    attempts++;
    if (guess < answer) {
      window.alert("TOO LOW! Try Again");
    } else if (guess > answer) {
      window.alert("TOO HIGH! Try Again");
    } else {
      window.alert("Correct Answer");
      running = false;
    }
  }
}
