let computerSelection;
let playerSelection;

function computerMath(){
  return Math.floor(Math.random() * 3);
}

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

let player = 0;
let computer = 0;

function playRound(playerSelection, computerSelection){
  if (playerSelection === "rock"){
    if(computerSelection === "rock"){
      return "Tie.";
    }
    if(computerSelection === "paper"){
      computer++;
      return "You lose! Paper beats Rock.";
    }
    if(computerSelection === "scissors"){
      player++;
      return "You win! Rock beats Scissors.";
    }
  }
  else if (playerSelection ==="paper"){
    if (computerSelection === "rock"){
      player++
      return "You win! Paper beats Rock.";
    }
    if (computerSelection === "paper"){
      return "Tie.";
    }
    if (computerSelection === "scissors"){
      computer++;
      return "You lose! Scissors beats Paper.";
    }
  }
  else if (playerSelection === "scissors") {
    if (computerSelection === "rock"){
      computer++;
      return "You lose! Rock beats Scissors.";
    }
    if (computerSelection === "paper"){
      player++;
      return "You win! Scissors beats paper.";
    }
    if (computerSelection === "scissors"){
      return "Tie.";
  }
  else { console.log("Invalid") }
  }
}


const rock = document.createElement("button");
rock.innerHTML = "Rock";
const paper = document.createElement("button");
paper.innerHTML = "Paper";
const scissors = document.createElement("button");
scissors.innerHTML = "Scissors";
const reset = document.createElement("button");
reset.innerHTML = "Reset";

let buttons = document.querySelectorAll(".buttons");
let body = document.querySelector("body");

const h1 = document.querySelector(".h1");
h1.setAttribute("style", "color: white; text-align: center;")

const div1 = document.querySelector(".buttons");
div1.setAttribute("style", 
"margin-bottom: 5px; text-align: center;");

const div2 = document.querySelector(".terminal");
div2.setAttribute("style", 
"color: white; background-color: gray; height: 150px; width: 300px; white-space: pre-wrap; margin-left: auto; margin-right: auto; padding: 10px;");

const div3 = document.querySelector(".score");
div3.setAttribute("style", "color: white; background-color: gray; width: 300px; margin-left: auto; margin-right: auto; padding: 10px; margin-bottom: 10px; margin-top: 10px;")
div3.textContent = "Player: 0 | Computer: 0"

const p = document.querySelector("p");
p.setAttribute("style", "color: white; text-align: center;");

div1.appendChild(rock);
div1.appendChild(paper);
div1.appendChild(scissors);
div1.appendChild(reset);

let clicks = 0;

rock.addEventListener("click", () => {
  getComputerChoice(computerMath());
  let result = playRound("rock", computerSelection);
  div2.textContent += `${result.toString()}\n`;

  //Over
  clicks += 1;
  if(clicks === 5){
    if(computer > player){
      div2.textContent += "\nYou Lose!\n";
      scissors.disabled = true;
      rock.disabled = true;
      paper.disabled = true;
    }
    else if (computer < player){
      div2.textContent += "\nYou Win!\n";
      scissors.disabled = true;
      rock.disabled = true;
      paper.disabled = true;
    }
    else{
      div2.textContent += "\nTie!\n";
      scissors.disabled = true;
      rock.disabled = true;
      paper.disabled = true;
    }
  }

  div3.textContent = `Player: ${player} | Computer ${computer}`;
});

paper.addEventListener("click", () => {
  getComputerChoice(computerMath());
  let result = playRound("paper", computerSelection);
  div2.textContent += `${result.toString()}\n`;

  //Over
  clicks += 1;
  if(clicks === 5){
    if(computer > player){
      div2.textContent += "\nYou Lose!\n";
      scissors.disabled = true;
      rock.disabled = true;
      paper.disabled = true;
    }
    else if (computer < player){
      div2.textContent += "\nYou Win!\n";
      scissors.disabled = true;
      rock.disabled = true;
      paper.disabled = true;
    }
    else{
      div2.textContent += "\nTie!\n";
      scissors.disabled = true;
      rock.disabled = true;
      paper.disabled = true;
    }
  }

  div3.textContent = `Player: ${player} | Computer ${computer}`;
});

scissors.addEventListener("click", () => {
  getComputerChoice(computerMath());
  let result = playRound("scissors", computerSelection);
  div2.textContent += `${result.toString()}\n`;

  //Over
  clicks += 1;
  if(clicks === 5){
    if(computer > player){
      div2.textContent += "\nYou Lose!\n";
      scissors.disabled = true;
      rock.disabled = true;
      paper.disabled = true;
    }
    else if (computer < player){
      div2.textContent += "\nYou Win!\n";
      scissors.disabled = true;
      rock.disabled = true;
      paper.disabled = true;
    }
    else{
      div2.textContent += "\nTie!\n";
      scissors.disabled = true;
      rock.disabled = true;
      paper.disabled = true;
    }
  }

  div3.textContent = `Player: ${player} | Computer ${computer}`;
});

reset.addEventListener("click", () => {
  player = 0;
  computer = 0;
  clicks = 0;
  div2.textContent = "";
  scissors.disabled = false;
  rock.disabled = false;
  paper.disabled = false;
  div3.textContent = "Player: 0 | Computer: 0";
});