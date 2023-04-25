let playerChoice;
let computerChoice;

function getComputerChoice() {
    let rng = Math.floor(Math.random() * 3);
    let choice;

    if (rng === 0) {
        choice = "paper";
    } else if (rng === 1) {
        choice = "scissors";
    } else if (rng === 2) {
        choice = "rock";
    }
    return choice;
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === 'paper') {
        if (computerChoice === "paper") {
            return "It's a draw!";
        } else if (computerChoice === 'scissors') {
            return "You lose!, Scissors beats Paper";
        } else if (computerChoice === "rock") {
            return "You win!, Paper beats Rock";
        }
    }
    if (playerChoice === "scissors") {
        if (computerChoice === "paper") {
            return "You win!, Scissors beats Paper";
        } else if (computerChoice === 'scissors') {
            return "It's a draw!";
        } else if (computerChoice === "rock") {
            return "You lose!, Rock beats Scissors";
        }
    }
    if (playerChoice === "rock") {
        if (computerChoice === "paper") {
            return "You lose!, Paper beats Rock";
        } else if (computerChoice === 'scissors') {
            return "You win!, Rock beats Scissors";
        } else if (computerChoice === "rock") {
            return "It's a draw!";
        }
    }
}

function game() {
    let count = 0;


}