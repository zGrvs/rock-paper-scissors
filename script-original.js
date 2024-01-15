document.addEventListener("DOMContentLoaded", () => {
    
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

    
    

    function game() {

        let playerScore = 0;
        let computerScore = 0;

        console.log("Let's play rock, paper, scissors! First to five points wins!")


        
        // while (playerScore < 5 && computerScore < 5) {
            function playRound(player, computer) {
                    let result;
                    console.log(`Computer chose: ${computer}`);

                    if (player === computer) {
                        return "It's a tie!";
                    }

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

                    // console.log(result)
                    // if (result.includes("win")) {
                    //     playerScore++;
                    // } else if (result.includes("lose")) {
                    //     computerScore++;
                    // }

                    // console.log(`Score: Player - ${playerScore} | Computer - ${computerScore}`);
                    // console.log(result);
                    return result;
            }

            function getPlayerChoice() {
                const rock = document.querySelector(".rock");
                const paper = document.querySelector(".paper");
                const scissors = document.querySelector(".scissors");

                let result;
                rock.addEventListener("click", () => {
                    result = playRound("rock", getComputerChoice());
                    return;
                })
                paper.addEventListener("click", () => {
                    result = playRound("paper", getComputerChoice());
                    return;
                })
                scissors.addEventListener("click", () => {
                    result = playRound("scissors", getComputerChoice());
                    return;
                })

                console.log(result);
                return result;
            }
            
            winner = getPlayerChoice();
            console.log(winner);
            
          
            

            
        // }

        // if (playerScore === 5) {
        //     console.log("You win the game!");
        //     return;
        // } else if (computerScore === 5) {
        //     console.log("Computer wins the game! Try again?")
        //     return;
        // }

    }

    game();
});
