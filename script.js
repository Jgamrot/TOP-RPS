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

let playerSelection = 1
let computerChoice = 0.4;

  computerChoice = (function randomNumber(){
    return (Math.random()*4)
})
//need to make this an int 0, 1 or 2. a floating point will almost never be exactly 1.
console.log(computerChoice());
//I think I need the randomNumber to be store to a var once the function is called. 
//Then I want to display that.
//then check if that beats the player selection

let result = function checkIfWinner () {
if ((playerSelection => 1) && (computerChoice > 1)){
    return ("draw")
} else if ((playerSelection => 1) && (computerChoice === 1)){
    return ("lose")
} else if ((playerSelection => 1) && (computerChoice < 1)){
    return ("win")
}
}
console.log(result());
//I know this bit works, if I can get the random number bit to work



