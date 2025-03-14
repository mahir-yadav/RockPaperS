function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3)
    if (choice == 0) {
        return "Rock"
    } else if (choice == 1) {
        return "Paper"
    } else {
        return "Scissors"
    }
}
function getHumanChoice() {
    const choice = window.prompt("Enter your choice among Rock(1) Paper(2) Scissors(3)");
    if (choice == 1) {
        return "Rock"
    } else if (choice == 2) {
        return "Paper"
    } else {
        return "Scissors"
    }
}
let humanScore = 0
let computerScore = 0
function playRound(humanchoice, computerchoice) {
    const choice = humanchoice.toLowerCase()
    if (choice == "rock" && computerchoice == "Rock") {
        console.log("Tie")
    } else if (choice == "rock" && computerchoice == "Paper") {
        console.log("You lose! Paper beats Rock")
        computerScore += 1
    }
    else if (choice == "rock" && computerchoice == "Scissors") {
        console.log("You Win! Rock beats Scissors")
        humanScore += 1
    }
    else if (choice == "paper" && computerchoice == "Paper") {
        console.log("Tie")
    } else if (choice == "paper" && computerchoice == "Scissors") {
        console.log("You lose! Scissors beats Paper")
        computerScore += 1
    }
    else if (choice == "paper" && computerchoice == "Rock") {
        console.log("You Win! Paper beats Rock")
        humanScore += 1
    }
    else if (choice == "scissors" && computerchoice == "Scissors") {
        console.log("Tie")
    } else if (choice == "scissors" && computerchoice == "Rock") {
        console.log("You lose! Rock beats Scissors")
        computerScore += 1
    }
    else if (choice == "scissors" && computerchoice == "Paper") {
        console.log("You Win! Scissors beats Paper")
        humanScore += 1
    }
}
function playGame() {
    while (humanScore < 5 && computerScore < 5) {
        const human = getHumanChoice()
        const computer = getComputerChoice()
        playRound(human, computer)
    }
    if (humanScore == 5) {
        console.log("Winner")
    } else {
        console.log("Loser")
    }
}
playGame()