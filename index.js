let playerChoice;
let computerChoice;
let playerScore;
let computerScore;

function getComputerChoice() {
    let rng = Math.floor(Math.random() * 3);
    let choice;

    switch (rng) {
        case 0:
            return "paper";
        case 1:
            return "scissors"
        case 2:
            return "rock"

    }
}

function playRound(playerChoice, computerChoice) {
    let result = ""

    if (playerChoice === 'paper') {
        if (computerChoice === "paper") {
            result = "It's a draw!";

        } else if (computerChoice === 'scissors') {
            result = "You lose!, Scissors beats Paper";
        } else if (computerChoice === "rock") {
            result = "You win!, Paper beats Rock";
        }
    }
    if (playerChoice === "scissors") {
        if (computerChoice === "paper") {
            result = "You win!, Scissors beats Paper";
        } else if (computerChoice === 'scissors') {
            result = "It's a draw!";
        } else if (computerChoice === "rock") {
            result = "You lose!, Rock beats Scissors";
        }
    }
    if (playerChoice === "rock") {
        if (computerChoice === "paper") {
            result = "You lose!, Paper beats Rock";
        } else if (computerChoice === 'scissors') {
            result = "You win!, Rock beats Scissors";
        } else if (computerChoice === "rock") {
            result = "It's a draw!";
        }
    }
    playerChoice = null;
    return result
}

function game() {
    let count = 0;

    if (count < 5) {

    }

}