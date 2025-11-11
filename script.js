// 1. write a function named getComputerChoice
// 2. inside the function getComputerChoice, we will use a Math.random method (Math.random method returns a random number greater than or equal to 0 and less than 1)
// 3. if 0 <= Math.random <= 0.3 the function should
// return the string "rock", if 0.3 < Math.random <= 0.6 the function should return the string "paper", if 0.6 < Math.random < 1 the function should
// return the string "scissors"


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

