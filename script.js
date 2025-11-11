// 1. write a function named getComputerChoice
// 2. inside the function getComputerChoice, we will use a Math.random method (Math.random method returns a random number greater than or equal to 0 and less than 1)
// 3. if 0 <= Math.random <= 0.3 the function should
// return the string "rock", if 0.3 < Math.random <= 0.6 the function should return the string "paper", if 0.6 < Math.random < 1 the function should
// return the string "scissors"

const humanScore = 0;
const computerScore = 0;

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

// 1.write a function named getHumanChoice, this function will return a string based on what the user typed on the prompt.
// 2. we will create a variable and call it humanChoice, this variable will hold the input from whatever the user enters through the prompt message.

function getHumanChoice() {
    const humanChoice = prompt("please enter rock, paper or scissors to play", '');
    return humanChoice;
}

