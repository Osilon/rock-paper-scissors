
let computerMath = Math.floor(Math.random() * 3);

let computerSelection;
let playerSelection;

function getComputerChoice(choice){
  if(choice === 0) {
    computerSelection = "rock";
  }
  else if(choice === 1) {
    computerSelection = "paper";
  }
  else {
    computerSelection = "scissors";
  }
}

getComputerChoice(computerMath);

function playRound(playerSelection, computerSelection){
  if (playerSelection === "rock"){
    if(computerSelection === "rock"){
      return "Tie.";
    }
    if(computerSelection === "paper"){
      return "You lose! Paper beats Rock.";
    }
    if(computerSelection === "scissors"){
      return "You win! Rock beats Scissors.";
    }
  }
  else if (playerSelection ==="paper"){
    if (computerSelection === "rock"){
      return "You win! Paper beats Rock.";
    }
    if (computerSelection === "paper"){
      return "Tie.";
    }
    if (computerSelection === "scissors"){
      return "You lose! Scissors beats Paper.";
    }
  }
  else if (playerSelection === "scissors") {
    if (computerSelection === "rock"){
      return "You lose! Rock beats Scissors.";
    }
    if (computerSelection === "paper"){
      return "You win! Scissors beats paper.";
    }
    if (computerSelection === "scissors"){
      return "Tie.";
  }
  else { console.log("Invalid") }
  }
}

function game(){
  return playRound(playerSelection, computerSelection);
}

for (let i = 0; i < 5; i++){
  playerSelection = prompt("Rock/Paper/Scissors", "Write here.");
  playerSelection = playerSelection.toLowerCase();
  console.log(game());
}

console.log("The END.");