// Rock 2
// Paper 1
// Scissors 0

function getComputerChoice(){
    return (Math.random()*3)
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
        return ("you lose")
    } else if ((playerValue > 1) && (computerSelection < 1)){
        return ("you win")
        //playerValue Paper
    } else if ((playerValue === 1) && (computerSelection > 1)){
        return ("you win")
    } else if ((playerValue === 1) && (computerSelection === 1)){
        return ("so did you, it's a draw!")
    } else if ((playerValue === 1) && (computerSelection < 1)){
        return ("you lose")
        //playerValue Scissors
    } else if ((playerValue < 1) && (computerSelection > 1)){
        return ("you lose")
    } else if ((playerValue < 1) && (computerSelection === 1)){
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
function getPlayerChoice(playerValue){
    if (playerValue === "rock") {
        return (2);
       } else if (playerValue === "paper") {
      return (1);
       } else if (playerValue === "scissors") {
      return (0);
    }
}
  
  const playerValue = prompt("Rock, paper or scissors?").toLowerCase();
  const playerSelection = getPlayerChoice(playerValue);
  const computerSelection = Math.floor(getComputerChoice());

  console.log(playRound(playerSelection, computerSelection));
  