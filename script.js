//Needs to create playerSelection to get the player input
//playRound function will do the judge job to see win or not
//game function will be the main function that the game will take place
//

let scoreId = 0;
let showResult = document.getElementById("result");


//game logic
function playRound(playerSelection,computerSelection)
{

    if((playerSelection == "rock" && computerSelection == "Scissor")||(playerSelection == "paper" && computerSelection == "Rock") || (playerSelection == "scissor" && computerSelection == "Paper"))
    {
        scoreId = 1;
        return showResult.textContent = `You Win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}`;
    }
    else if((playerSelection == "rock" && computerSelection == "Paper") || (playerSelection == "paper" && computerSelection == "Scissor") || (playerSelection == "scissor" && computerSelection == "Rock"))
    {
        scoreId = 2;
        return showResult.textContent = `You Lose! ${computerSelection} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}`;
    }
    else if((playerSelection == "rock" && computerSelection == "Rock") || (playerSelection == "paper" && computerSelection == "Paper") || (playerSelection == "scissor" && computerSelection == "Scissor"))
    {
        scoreId = 3;
        return showResult.textContent = `Tie! You Both Chose ${computerSelection}`;
    }
    else{
        scoreId = 4;
        return showResult.textContent = "Plz choose rock paper or scissor";
    }
}
var randomVal = 
[
    "Rock",
    "Paper",
    "Scissor"
];

//randomize the computer input depends on array
function randomResult()
{
    return randomVal[Math.floor(Math.random() * randomVal.length)];
}
let computerSelect = randomResult();

let playerScore = 0 ,computerScore = 0;
let playerResult = document.getElementById("player-score");
let computerResult = document.getElementById("computer-score");
let inputBar = document.getElementById("selection");
let resultBtn = document.getElementById("answer");
let resetBtn = document.getElementById("reset");
let scoreContainer = document.getElementById("score-container");

function game()
{
    let playerInput = document.getElementById("selection").value;
    if(playerInput != "")
    {   
        var computerSelected = computerSelect;
        let playerWrite = playerInput.toLowerCase();
        playRound(playerWrite,computerSelected);
        // console.log(playRound(playerWrite,computerSelect));
        //Count Score depends on player or computer won
        if(scoreId == 1)
        {
            playerScore +=1 ;
            playerResult.textContent = playerScore.toString();
        }
        else if(scoreId == 2)
        {
            computerScore +=1;
            computerResult.textContent = computerScore.toString();
        }
        
        if(playerScore == 5 || computerScore == 5)
        {
            inputBar.classList = "hiddenInput";
            resultBtn.classList = "hiddenInput";
            resetBtn.className = "";
        }
        
        if(playerScore == 5)
        {
            showResult.textContent = `You Win and beat computer with the score of `;
        }
        else if(computerScore == 5){
            showResult.textContent = `You lose and computer beat you with the score of `;
        }
        document.getElementById("selection").value = "";
    }
}


