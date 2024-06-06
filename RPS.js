let humanScore = 0;
let computerScore = 0;
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
function getHumanChoice() {
    let humanChoice;
    while (true) {
        humanChoice = prompt("Enter your choice (rock, paper, scissors):").trim().toLowerCase();
        switch (humanChoice) {
            case "rock":
            case "paper":
            case "scissors":
                return humanChoice;
            default:
                alert("Not a valid option! Please choose rock, paper, or scissors.");
        }
    }
}
function playRound(humanChoice, computerChoice) {

        if (humanChoice === computerChoice) {
            console.log("it's a tie")
        }
        else if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log(`you win ${humanChoice} beats ${computerChoice}`)
            humanScore++;
        }
        else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log(`you win ${humanChoice} beats ${computerChoice}`)
            humanScore++;
        }
        else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log(`you win ${humanChoice} beats ${computerChoice}`)
            humanScore++;
        }
        else {
            console.log(`you lose ${computerChoice} beats ${humanChoice}`)
            computerScore++;
    }
    console.log(`your score is ${humanScore}`)
    console.log(`java score is ${computerScore}`)
    console.log(`your choice was ${humanChoice}`)
    console.log(`java choice was ${computerChoice}`)
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if (humanScore > computerScore) {
        console.log("you win")
    }
    else if (humanScore < computerScore) {
        console.log("you lose")
    }
    else {
        console.log("tie")
    }
}
playGame()

