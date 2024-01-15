document.addEventListener("DOMContentLoaded", () => {

    const rock = document.querySelector(".rock");
    const paper = document.querySelector(".paper");
    const scissors = document.querySelector(".scissors");

    let playerScore = 0;
    let computerScore = 0;

    rock.addEventListener("click", () => playRound("rock", getComputerChoice()));
    paper.addEventListener("click", () => playRound("paper", getComputerChoice()));
    scissors.addEventListener("click", () => playRound("scissors", getComputerChoice()));

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

    function playRound(player, computer) {
        let result;
        console.log(`Computer chose: ${computer}`);

        if (player === computer) {
            result = "It's a tie!";
        } else {
            switch (player) {
                case "rock":
                    computer === "paper" ? result = "You lose! Paper covers rock." : result = "You win! Rock smashes scissors.";
                    break;
                case "paper":
                    computer === "scissors" ? result = "You lose! Scissors cutss paper." : result = "You win! Paper covers rock.";
                    break;
                case "scissors":
                    computer === "rock" ? result = "You lose! Rock smashes scissors." : result = "You win! Scissors cuts paper.";
                    break;
                default:
                    return "error";
            }
        }

        result.includes("win") ? playerScore++ : result.includes("lose") ? computerScore++ : null;
        console.log(result);
        console.log(`Score: Player - ${playerScore} | Computer - ${computerScore}`)
        if (playerScore === 5) {
            console.log("You win the game!");
        } else if (computerScore === 5) {
            console.log("Computer wins the game! Try again?")
        }
    }
});