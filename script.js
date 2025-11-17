// function getComputerChoice to return computer choice
function getComputerChoice() {
    const randomNumber = Math.random();

    if (randomNumber <= 0.3) {
        return "rock";
    } else if (randomNumber <= 0.6) {
        return "paper";
    } else {
        return "scissors";
    } 
}

// function getHumanChoice to return human choice
function getHumanChoice() {
    const humanChoice = prompt("please enter rock, paper or scissors to play", '');
    return humanChoice;
}

function playGame() {

    let humanScore = 0; 
    let computerScore = 0; 
    
    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        if(humanChoice === computerChoice) {
            console.log(`it's a tie!`);
        } else if ( humanChoice === "rock" && computerChoice === "scissors" 
        || humanChoice === "scissors" && computerChoice === "paper"
        || humanChoice === "paper" && computerChoice === "rock") {
            humanScore++;
            console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
        } else {
            computerScore++;
            console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
        }
    }

    // ROUND #1
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    // ROUND #2
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    // ROUND #3
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    // ROUND #4
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    // ROUND #5
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);


    console.log("-----Final Scores-----");
    console.log("humanScore: " + humanScore + " - " + "computerScore: " + computerScore);
    console.log("-----The Winner-----");
    if(humanScore > computerScore) {
        console.log("You Win the Game!");
    } else if (humanScore < computerScore) {
        console.log("You Lose the Game!");
    } else {
        console.log("it's a Tie");
    }
}

playGame();





