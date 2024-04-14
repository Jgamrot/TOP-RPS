let playerScore = 0;
let computerScore = 0;


const buttons = document.querySelectorAll("button"); // node list for buttons

const displayResults = document.getElementById("resultsDiv");

const displayPlayerScore = document.getElementById("playerScore");
const displayComputerScore = document.getElementById("computerScore");


const displayWinner = document.getElementById("gameOver");


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
        displayPlayerScore.textContent = "Player Score: " + playerScore;
        displayComputerScore.textContent = "Computer Score: " +  computerScore;

        if (playerScore === 5) {
            displayWinner.textContent = "First to 5 points! You Win!";
        } else if (computerScore === 5) {
            displayWinner.textContent = "The computer got to 5 points before you. You Lose!";
        }
    });
});
