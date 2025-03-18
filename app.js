let pscore = document.getElementsByClassName("pscore")
let cscore = document.getElementsByClassName("cscore")
let results = document.getElementsByClassName("results")
let rock = document.getElementsByClassName("rock")
let finalresult = document.getElementsByClassName("finalresult")
let humanScore = 0
let computerScore = 0
let res = ""

rock[0].addEventListener("click", function () {
    playRound("rock", getComputerChoice());
});
let paper = document.getElementsByClassName("paper")
paper[0].addEventListener("click", function () {
    playRound("paper", getComputerChoice());
});
let scissors = document.getElementsByClassName("scissors")
scissors[0].addEventListener("click", function () {
    playRound("scissors", getComputerChoice());
});
let resetbtn = document.getElementsByClassName("reset-btn")
resetbtn[0].addEventListener("click", resetgame)

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

function playRound(humanchoice, computerchoice) {
    const choice = humanchoice.toLowerCase()
    if (choice == "rock" && computerchoice == "Rock") {
        res = "Tie";
    } else if (choice == "rock" && computerchoice == "Paper") {
        res = "You lose! Paper beats Rock";
        computerScore += 1
    }
    else if (choice == "rock" && computerchoice == "Scissors") {
        res = "You Win! Rock beats Scissors";
        humanScore += 1
    }
    else if (choice == "paper" && computerchoice == "Paper") {
        res = "Tie";
    } else if (choice == "paper" && computerchoice == "Scissors") {
        res = "You lose! Scissors beats Paper";
        computerScore += 1
    }
    else if (choice == "paper" && computerchoice == "Rock") {

        res = "You Win! Paper beats Rock";
        humanScore += 1
    }
    else if (choice == "scissors" && computerchoice == "Scissors") {
        res = "Tie"
    } else if (choice == "scissors" && computerchoice == "Rock") {
        res = "You lose! Rock beats Scissors";
        computerScore += 1
    }
    else if (choice == "scissors" && computerchoice == "Paper") {
        res = "You Win! Scissors beats Paper";
        humanScore += 1
    }
    pscore[0].textContent = humanScore
    cscore[0].textContent = computerScore
    results[0].textContent = res
    if (humanScore == 5 || computerScore == 5) {
        if (humanScore == 5) {
            finalresult[0].textContent = "🥳 You Win"
        } else {
            finalresult[0].textContent = "💀 You Lose"
        }
        rock[0].classList.add("disabled")
        paper[0].classList.add("disabled")
        scissors[0].classList.add("disabled")

    }
}
function resetgame() {
    humanScore = 0
    computerScore = 0
    res = "Start playing by clicking on rock paper or scissors!!"
    pscore[0].textContent = humanScore
    cscore[0].textContent = computerScore
    results[0].textContent = res
    finalresult[0].textContent = ""
    rock[0].classList.remove("disabled")
    paper[0].classList.remove("disabled")
    scissors[0].classList.remove("disabled")
}
// playGame()
