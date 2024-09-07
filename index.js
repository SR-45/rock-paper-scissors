let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let num = Math.ceil(Math.random() * 3);
    switch (num) {
        case 1:
            return "rock"
        case 2:
            return "scissors"
        case 3:
            return "paper"
    }


}

function getHumanChoice() {
    let humanChoice = prompt("Enter your choice");
    return humanChoice.toLowerCase();
}




function playRound(humanChoice, computerChoice) {
    let compWin = 0;
    if (humanChoice == computerChoice) { return "It's a tie!" }
    if (humanChoice == "rock") {
        if (computerChoice == "scissors") {
            compWin = 1;
        }
    }
    if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            compWin = 1;
        }
    }
    if (humanChoice == "scissors") {
        if (computerChoice == "rock") {
            compWin = 1;
        }
    }

    if (compWin == 0) {
        computerScore++;
        return "You Lose! " + computerChoice + " beats " + humanChoice + ".";
    } else if (compWin == 1) {
        humanScore++;
        return "You Win! " + humanChoice + " beats " + computerChoice + ".";
    }

}

function playGame() {

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(humanSelection, computerSelection));
    }

    if (humanScore > computerScore) {
        return "You won the game!";
    } else {
        return "You lost the game";
    }
}

console.log(playGame());




