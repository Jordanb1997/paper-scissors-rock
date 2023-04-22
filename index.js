let playerChoice;

console.log("player: " + playerChoice);
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

