//intialalization of selectors
let humanChoice;
const rockBtn = document.querySelector("#rock")
const paperBtn = document.querySelector("#paper")
const scissorsBtn = document.querySelector("#scissors")
const container = document.querySelector(".results")
const content = document.createElement("div");
const tie = document.createElement("div");
content.classList.add("content");
tie.classList.add("tie");
let humanScore = 0;
let computerScore = 0;
container.appendChild(content);
container.appendChild(tie)
// function for the score display
function displayScore() {
content.textContent = `Your score is ${humanScore} \n \r Java score is ${computerScore}`
    // content.textContent = "your score is " + humanScore + "java score is " + computerScore;
    if (humanScore === 5) {
        content.textContent = "your score is  " + humanScore + "  you WON THE GAME"
        humanScore = 0;
        computerScore = 0 
    }
    else if (computerScore === 5)
        {
            content.textContent = "java score is  " + computerScore + "  you LOST THE GAME"
            humanScore = 0;
            computerScore = 0 
        }

}


function getComputerChoice() {
    let randomNumber = 3 * Math.random()
    if (randomNumber <= 1) {
        return "rock"
    } else if (randomNumber <= 2) {
        return "paper"
    }
    else {
        return "scissors"
    }
}

function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
            tie.textContent = "it's a tieeeeeee"
        }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        tie.textContent=""
        humanScore++;
        
        }
        else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        tie.textContent=""
        }
        else if (humanChoice === "paper'" && computerChoice === "rock") {
        humanScore++;
        tie.textContent=""
        }
        else {
           tie.textContent=""
            computerScore++;
    }

}

rockBtn.addEventListener("click", () => {
    playRound("rock",getComputerChoice())
    displayScore()
})
paperBtn.addEventListener("click", () => {
    playRound("paper",getComputerChoice())
    displayScore()
})
scissorsBtn.addEventListener("click", () => {
    playRound("scissors",getComputerChoice())
    displayScore()
})

