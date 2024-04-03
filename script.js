//function getComputerChoice(){}

/* high level plan 

3 variables (rock, scissor, paper) - maybe not need this
? could I gave the variables a number, then use Maths between 0 - 4, round it down, use this for the computer choice?
1 variable - computer choice
1 variable - player choice

-- then 
play a round (take the parameters) and turn a win or lose string
! any case !

then return into the console log

function playRound(playerSelection, computerSelection) {
  // your code here!
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));


-- then

function playGame(){ inside this goes the previous function to play the round
function playRound(){} }
maybe use a loop for 5 rounds or repeat it for 5 times. /*

/* attempt at some pseduocode

create a variable for computerChoice (string)
create a variable for playerChoice (string)

ask the user for input (string) and put in playerChoice variable

(randomly generate a computerChoice)

(how do I determine is the computerChoice is better than the player choice?)
Rock beats scissor
scissor beats paper
paper beats rock


computerChoice 
if C > 1  return Rock (run the computerChoseRockCheckIfWin function)
else if C = 1 return Paper
else if C < 1 return Scissor


computerChoseRockCheckIfWin (if this only runs after the computerChoice function could remove the c = part)
if C = > 1 and P =>1 then draw
else is C = > 1 and P = 1 then lose
else is C = > 1 and P < 1 then win

computerChosePaperCheckIfWin
if C = 1 and P = >1 then win
else is C = 1 and P = 1 then draw
else is C = 1 and P < 1 then lose

computerChoseScissorCheckIfWin
if C = < 1 and P = >1 then lose
else is C = < 1 and P = 1 then win
else is C = < 1 and P < 1 then draw

?could run this as one big formula?


*/
/*
let playerSelection = 3
let computerChoice;

function getComputerChoice(){
    return (Math.random()*3)
}
//computer choice
computerChoice = Math.floor(getComputerChoice());
//computer choice logs
console.log(computerChoice);
if (computerChoice > 1) {
    console.log("Computer picks Rock");
} else if (computerChoice === 1) {
    console.log("Computer picks Paper");
}else if (computerChoice <1) {
    console.log("Computer picks Scissors");
}
//Rock >1
// Paper = 1
// Scissor < 1

//checking who won is basically playing a round right?
let result = function checkIfWinner () {
    //playerSelection Rock
if ((playerSelection > 1) && (computerChoice > 1)){
    return ("so did you, it's a draw!")
} else if ((playerSelection > 1) && (computerChoice === 1)){
    return ("you lose")
} else if ((playerSelection > 1) && (computerChoice < 1)){
    return ("you win")
    //playerSelection Paper
} else if ((playerSelection === 1) && (computerChoice > 1)){
    return ("you win")
} else if ((playerSelection === 1) && (computerChoice === 1)){
    return ("so did you, it's a draw!")
} else if ((playerSelection === 1) && (computerChoice < 1)){
    return ("you lose")
    //playerSelection Scissors
} else if ((playerSelection < 1) && (computerChoice > 1)){
    return ("you lose")
} else if ((playerSelection < 1) && (computerChoice === 1)){
    return ("you win")
} else if ((playerSelection < 1) && (computerChoice < 1)){
    return ("so did you, it's a draw!")
}
}
console.log(result());

//Messing around trying to get the result in one log output

console.log(computerChoice);
if (computerChoice > 1) {
    console.log("Computer picks Rock " + result());
} else if (computerChoice === 1) {
    console.log("Computer picks Paper " + result());
}else if (computerChoice <1) {
    console.log("Computer picks Scissors " + result());
}
*/



//trying the code below

function getComputerChoice(){
    return (Math.random()*3)
}

function playRound(playerSelection, computerSelection) {

    function getComputerChoice(){
        return (Math.random()*3)
    }
    
    computerSelection = Math.floor(getComputerChoice());

    // console.log(computerSelection); this only logs the number
    /* if (computerSelection > 1) {
        console.log("Computer picks Rock");
    } else if (computerSelection === 1) {
        console.log("Computer picks Paper");
    }else if (computerSelection <1) {
        console.log("Computer picks Scissors");
    } 
    this displays what the item was the computer picked - not required*/
 
    let result = function checkIfWinner () {
        //playerSelection Rock
    if ((playerSelection > 1) && (computerSelection > 1)){
        return ("so did you, it's a draw!")
    } else if ((playerSelection > 1) && (computerSelection === 1)){
        return ("you lose")
    } else if ((playerSelection > 1) && (computerSelection < 1)){
        return ("you win")
        //playerSelection Paper
    } else if ((playerSelection === 1) && (computerSelection > 1)){
        return ("you win")
    } else if ((playerSelection === 1) && (computerSelection === 1)){
        return ("so did you, it's a draw!")
    } else if ((playerSelection === 1) && (computerSelection < 1)){
        return ("you lose")
        //playerSelection Scissors
    } else if ((playerSelection < 1) && (computerSelection > 1)){
        return ("you lose")
    } else if ((playerSelection < 1) && (computerSelection === 1)){
        return ("you win")
    } else if ((playerSelection < 1) && (computerSelection < 1)){
        return ("so did you, it's a draw!")
    }
    }
    // console.log(result()); only says if the player wins or loses, not required
    
    //Messing around trying to get the result in one log output
    
   /* if (computerSelection > 1) {
        console.log("Computer picks Rock " + result());
    } else if (computerSelection === 1) {
        console.log("Computer picks Paper " + result());
    }else if (computerSelection <1) {
        console.log("Computer picks Scissors " + result());
    }
    Not needed if I use returns instead */

    if (computerSelection > 1) {
        return ("Computer picks Rock " + result());
    } else if (computerSelection === 1) {
        return ("Computer picks Paper " + result());
    }else if (computerSelection <1) {
        return ("Computer picks Scissors " + result());
    }
  }
  
  const playerSelection = 1; //need to turn rock (any case) into a number
  const computerSelection = Math.floor(getComputerChoice());

  console.log(playRound(playerSelection, computerSelection));
  