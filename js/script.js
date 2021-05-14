// let name = "Hakeem";
// let number = 0;
// function sayHello(name) {
//   alert("Hello " + name);
// }

//calling the function
// sayHello("Hemory");

let userScore = 0;
let computerScore = 0;
let userScore_span = document.getElementById("user-score");
let computerScore_span = document.getElementById("computer-score");
let scoreBoard_div = document.querySelector(".score-board");
let result_p = document.querySelector(".result > p");
let rock_div = document.getElementById("rock");
let paper_div = document.getElementById("paper");
let scissors_div = document.getElementById("scissors");

function getComputerChoice() {
  let choices = ["Rock", "Paper", "Scissors"];
  let ranNum = Math.floor(Math.random() * 3);
  return choices[ranNum];
}

function userWins(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore.toString();
  result_p.innerHTML =
    "<sup class='badge-two'>user</sup> " +
    userChoice +
    " beats " +
    "<sup class='comp-badge-two'>comp</sup> " +
    computerChoice +
    ". You win!";
}

function userLoses(userChoice, computerChoice) {
  computerScore++;
  computerScore_span.innerHTML = computerScore.toString();
  result_p.innerHTML =
    "<sup class='comp-badge-two'>comp</sup> " +
    computerChoice +
    " beats " +
    "<sup class='badge-two'>user</sup> " +
    userChoice +
    ". You lose!";
}

function tie(userChoice, computerChoice) {
  result_p.innerHTML =
    "<sup class='comp-badge-two'>comp</sup> " +
    computerChoice +
    " is the same as " +
    "<sup class='badge-two'>user</sup> " +
    userChoice +
    ". It's a tie!";
}

function scoreDecider(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "RockScissors":
    case "PaperRock":
    case "ScissorsPaper":
      userWins(userChoice, computerChoice);
      break;
    case "RockPaper":
    case "PaperScissors":
    case "ScissorsRock":
      userLoses(userChoice, computerChoice);
      break;
    case "RockRock":
    case "PaperPaper":
    case "ScissorsScissors":
      tie(userChoice, computerChoice);
      break;
  }
}

function main() {
  $(document).ready(function () {
    $(rock_div).click(function () {
      scoreDecider("Rock");
    });

    $(paper_div).click(function () {
      scoreDecider("Paper");
    });

    $(scissors_div).click(function () {
      scoreDecider("Scissors");
    });
  });
}

main();
