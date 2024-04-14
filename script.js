// Rock 2
// Paper 1
// Scissors 0

let playerScore = 0;
let computerScore = 0;


const buttons = document.querySelectorAll("button"); // node list for buttons

const displayResults = document.getElementById("resultsDiv");

function getPlayerChoice(playerValue){
    if (playerValue === "rock") {
        return (2);
       } else if (playerValue === "paper") {
      return (1);
       } else if (playerValue === "scissors") {
      return (0);
    }
}

function getComputerChoice(){
    return Math.floor(Math.random() * 3);
}


function checkIfWinner (playerValue, computerSelection) {
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
    
function playRound(playerValue, computerSelection) {
    const result = checkIfWinner(playerValue, computerSelection);
        if (computerSelection > 1) {
            return ("Computer picks Rock " + result);
        } else if (computerSelection === 1) {
            return ("Computer picks Paper " + result);
        }else if (computerSelection <1) {
            return ("Computer picks Scissors " + result);
        }
    }


buttons.forEach((button) => {
    button.addEventListener("click", () => { //tell it to playROund within the arrow function
        let playerValue = getPlayerChoice(button.id);
        let computerSelection = getComputerChoice();
        let roundResult = playRound(playerValue, computerSelection);
        console.log(roundResult);
        displayResults.textContent = roundResult;
    });
});

/*

if (playerScore > computerScore) {
    console.log("You win the best of 5!");
  } else if (playerScore < computerScore) {
    console.log("Computer wins the best of 5!");
  } else {
    console.log("It's a draw in the best of 5!");
  }
  */