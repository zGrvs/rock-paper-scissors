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

function game() {

    let playerScore = 0;
    let computerScore = 0;

    console.log("Let's play rock, paper, scissors! First to five points wins!")

    while (playerScore < 5 && computerScore < 5) {
        function playRound(player, computer) {

                console.log(`Computer chose: ${computer}`);

                if (player === computer) {
                    return "It's a tie!";
                }

                switch (player) {
                    case "rock":
                        return computer === "paper" ? "You lose! Paper covers rock." : "You win! Rock smashes scissors.";
                    case "paper":
                        return computer === "scissors" ? "You lose! Scissors cutss paper." : "You win! Paper covers rock.";
                    case "scissors":
                        return computer === "rock" ? "You lose! Rock smashes scissors." : "You win! Scissors cuts paper.";
                    default:
                        return "error";
                }
        }

        let winner = playRound(getPlayerChoice(), getComputerChoice());
        console.log(winner)
        if (winner.includes("win")) {
            playerScore++;
        } else if (winner.includes("lose")) {
            computerScore++;
        }

        console.log(`Score: Player - ${playerScore} | Computer - ${computerScore}`);
    }

    if (playerScore > computerScore) {
        console.log("You win the game!");
    } else {
        console.log("Computer wins the game! Try again?")
    }

}

game();