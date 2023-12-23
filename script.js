function getComputerChoice() {
    const randInt = Math.floor(Math.random() * 3);
    switch (randInt) {
        case 0:
            return "rock";
        case 1: 
            return "paper";
        case 2:
            return "scissors";
        default:
            return "error";
    }
}

function getPlayerChoice() {
    let playerChoice;
    while (!(["rock", "paper", "scissors"].includes(playerChoice))) {
        playerChoice = prompt("Make your selection: ").toLowerCase();
    }
    return playerChoice;
}

function playRound(player, computer) {

    console.log(computer);

    if (player === computer) {
        return "It's a tie!";
    }

    switch (player) {
        case "rock":
            return computer === "paper" ? "You lose! Paper beats rock." : "You win! Rock beats scissors.";
        case "paper":
            return computer === "scissors" ? "You lose! Scissors beats paper." : "You win! Paper beats rock.";
        case "scissors":
            return computer === "rock" ? "You lose! Rock beats scissors." : "You win! Scissors beats paper.";
        default:
            return "error";
    }
}


console.log(playRound(getPlayerChoice(), getComputerChoice()));