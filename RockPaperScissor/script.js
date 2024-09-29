const result = document.getElementById("result");
const playerLabel = document.getElementById("myChoice");
const computerLabel = document.getElementById("computerChoice");
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");
let playerScores = 0;
let computerScores = 0;

function playgame(stroke) {
  const strokes = ["rock", "paper", "scissors"];
  const computer = Math.floor(Math.random() * 3);
  const computerGen = strokes[computer];

  playerLabel.textContent = `Player: ${stroke}`;
  computerLabel.textContent = `Computer: ${computerGen}`;

  if (
    (stroke === "rock" && computerGen === "scissor") ||
    (stroke === "paper" && computerGen === "rock") ||
    (stroke === "scissor" && computerGen === "paper")
  ) {
    result.textContent = "Player wins!";
    result.style.color = "green";
    playerScores++;
  } else if (
    (stroke === "scissor" && computerGen === "rock") ||
    (stroke === "rock" && computerGen === "paper") ||
    (stroke === "paper" && computerGen === "scissor")
  ) {
    result.textContent = "Computer wins!";
    result.style.color = "red";
    computerScores++;
  } else {
    result.textContent = "It's a tie!";
  }

  playerScore.textContent = `Player Score: ${playerScores}`;
  computerScore.textContent = `Computer Score: ${computerScores}`;
}
