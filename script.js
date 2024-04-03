// Rock 2
// Paper 1
// Scissors 0

let playerScore = 0;
let computerScore = 0;

for (let i = 0; i <5; i++){

function getComputerChoice(){
    return (Math.random()*3)
}

function getPlayerChoice(playerValue){
    if (playerValue === "rock") {
        return (2);
       } else if (playerValue === "paper") {
      return (1);
       } else if (playerValue === "scissors") {
      return (0);
    }
}

function playRound(playerValue, computerSelection) {

    function getComputerChoice(){
        return (Math.random()*3)
    }
    
    computerSelection = Math.floor(getComputerChoice());

    let result = function checkIfWinner () {
        //playerValue Rock
    if ((playerValue > 1) && (computerSelection > 1)){
        return ("so did you, it's a draw!")
    } else if ((playerValue > 1) && (computerSelection === 1)){
        computerScore++
        return ("you lose")
    } else if ((playerValue > 1) && (computerSelection < 1)){
        playerScore++
        return ("you win")
        //playerValue Paper
    } else if ((playerValue === 1) && (computerSelection > 1)){
        playerScore++
        return ("you win")
    } else if ((playerValue === 1) && (computerSelection === 1)){
        return ("so did you, it's a draw!")
    } else if ((playerValue === 1) && (computerSelection < 1)){
        computerScore++
        return ("you lose")
        //playerValue Scissors
    } else if ((playerValue < 1) && (computerSelection > 1)){
        computerScore++
        return ("you lose")
    } else if ((playerValue < 1) && (computerSelection === 1)){
        playerScore++
        return ("you win")
    } else if ((playerValue < 1) && (computerSelection < 1)){
        return ("so did you, it's a draw!")
    }
    }
    
    if (computerSelection > 1) {
        return ("Computer picks Rock " + result());
    } else if (computerSelection === 1) {
        return ("Computer picks Paper " + result());
    }else if (computerSelection <1) {
        return ("Computer picks Scissors " + result());
    }
}

  const playerValue = prompt("Rock, paper or scissors?").toLowerCase();
  const playerSelection = getPlayerChoice(playerValue);
  const computerSelection = Math.floor(getComputerChoice());

  console.log(playRound(playerSelection, computerSelection));
}

if (playerScore > computerScore) {
    console.log("You win the best of 5!");
  } else if (playerScore < computerScore) {
    console.log("Computer wins the best of 5!");
  } else {
    console.log("It's a draw in the best of 5!");
  }