// ? rock paper scissor
let userScore = 0;
let computerScore = 0;
let choices = ["rock", "paper", "scissor"];
let resultDisplay = document.getElementById("resultDisplay");
let computerChoiceDisplay = document.querySelector(".computerChoice");
const userScoreDisplay = document.getElementById("userScore");
const computerScoreDisplay = document.getElementById("computerScore");


function playGame(userChoice) {
  let computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = "";
  computerChoiceDisplay.textContent = computerChoice;

  if (userChoice === computerChoice) {
    result = "TIE!";
  } else {
    switch (userChoice) {
      case "rock":
        result = computerChoice === "scissor" ? "YOU WIN!" : "YOU LOSE!";
        break;
      case "paper":
        result = computerChoice === "rock" ? "YOU WIN!" : "YOU LOSE!";
        break;
      case "scissor":
        result = computerChoice === "paper" ? "YOU WIN!" : "YOU LOSE!";
        break;
    }
  }
  resultDisplay.textContent = result;
  switch (result) {
    case "YOU WIN!":
      resultDisplay.style.color = "green";
      userScore++;
      userScoreDisplay.textContent = `User Score: ${userScore}`;
      userScoreDisplay.classList.toggle("transition");
      break;
    case "YOU LOSE!":
      resultDisplay.style.color = "red";
      computerScore++;
      computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
      computerScoreDisplay.classList.toggle("transition");
      break;
    default:
      resultDisplay.style.color = "white";
  }
  if (userScore === 5) {
    resultDisplay.textContent = "YOU WIN THE ROUND";
    setTimeout(function () {
      window.location.reload();
    }, 2000); // Delay in milliseconds
  }
  if (computerScore === 5) {
    resultDisplay.textContent = "YOU LOSE THE ROUND";
    setTimeout(function () {
      window.location.reload();
    }, 2000);
  }
}
