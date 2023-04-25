//choices
let playerChoice;
let computerChoice;
//score
let playerScore = 0;
let computerScore = 0;
let roundWinner = "";
let gameWinner = "";

function getComputerChoice() {
    let rng = Math.floor(Math.random() * 3);

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
    if (playerChoice === computerChoice) {
        roundWinner = "It's a draw";
    } if (playerChoice === "paper" && computerChoice === "rock" ||
        playerChoice === "scissors" && computerChoice === "paper" ||
        playerChoice === "rock" && computerChoice === "scissors") {

        roundWinner = "Player wins!";
        playerScore++;

    } if (playerChoice === "paper" && computerChoice === "scissors" ||
        playerChoice === "scissors" && computerChoice === "rock" ||
        playerChoice === "rock" && computerChoice === "paper") {

        roundWinner = "Computer wins!"
        computerScore++;
    }
}

function game() {

}