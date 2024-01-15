document.addEventListener("DOMContentLoaded", () => {

    const start_screen = document.querySelector(".start-screen");
    const play_button = document.querySelector(".play");

    const game_screen = document.querySelector(".game");
    const result = document.querySelector(".result");
    const score = document.querySelector(".score");

    const end_screen = document.querySelector(".end-screen");
    const end_text = document.querySelector(".end-text");
    const again = document.querySelector(".again");

    const rock = document.querySelector(".rock");
    const paper = document.querySelector(".paper");
    const scissors = document.querySelector(".scissors");

    
    play_button.addEventListener("click", () => {
        start_screen.classList.toggle("hidden");
        start_screen.classList.toggle("visible");
        game_screen.classList.toggle("hidden");
        game_screen.classList.toggle("visible");
    })
    
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
        console.log(`Computer chose: ${computer}`);

        if (player === computer) {
            result.textContent = "It's a tie!";
        } else {
            switch (player) {
                case "rock":
                    computer === "paper" ? result.textContent = "You lose! Paper covers rock." : result.textContent = "You win! Rock smashes scissors.";
                    break;
                case "paper":
                    computer === "scissors" ? result.textContent = "You lose! Scissors cutss paper." : result.textContent = "You win! Paper covers rock.";
                    break;
                case "scissors":
                    computer === "rock" ? result.textContent = "You lose! Rock smashes scissors." : result.textContent = "You win! Scissors cuts paper.";
                    break;
                default:
                    return "error";
            }
        }

        result.textContent.includes("win") ? playerScore++ : result.textContent.includes("lose") ? computerScore++ : null;
        score.textContent = `Score: Player - ${playerScore} | Computer - ${computerScore}`;
        if (playerScore === 5) {
            game_screen.classList.toggle("hidden");
            game_screen.classList.toggle("visible");
            end_screen.classList.toggle("hidden");
            end_screen.classList.toggle("visible");
            end_text.textContent = "You win the game!";
        } else if (computerScore === 5) {
            game_screen.classList.toggle("hidden");
            game_screen.classList.toggle("visible");
            end_screen.classList.toggle("hidden");
            end_screen.classList.toggle("visible");
            end_text.textContent = "Computer wins the game! Try again?";
        }
    }

    again.addEventListener("click", () => {
        result.textContent = "";
        score.textContent = "";
        playerScore = 0;
        computerScore = 0;
        end_screen.classList.toggle("hidden");
        end_screen.classList.toggle("visible");
        game_screen.classList.toggle("hidden");
        game_screen.classList.toggle("visible");
    })
});