let humanScore = 0;
let computerScore = 0;
const curResult = document.querySelector(".curr-results");
const cScore = document.querySelector(".c-score");
const hScore = document.querySelector(".h-score");
const finresult = document.querySelector(".final-score");
const reset = document.getElementById("reset");
const r = document.querySelector("#r");

reset.addEventListener("click",function(){
    location.reload();
})

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

function getHumanChoice(char) {
    return char;
}


function playRound(humanChoice, computerChoice) {
    let compWin = 0;
    if (humanChoice == computerChoice) { return "It's a tie round!" }
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
        return "You lose the round! " + computerChoice + " beats " + humanChoice + ".";
    } else if (compWin == 1) {
        humanScore++;
        return "You win the round! " + humanChoice + " beats " + computerChoice + ".";
    }

}

function checkWinner(computerScore, humanScore) {
    if (humanScore == 5) {
        document.querySelectorAll('.options button').forEach(elem => {
            elem.disabled = true;
        });
        finresult.textContent = "You have won the game!";

    } else if (computerScore == 5) {
        document.querySelectorAll('.options button').forEach(elem => {
            elem.disabled = true;
        });
        finresult.textContent = "You have lost the game!";
    }
}

r.addEventListener('click', function () {
    const humanSelection = getHumanChoice("rock");
    const computerSelection = getComputerChoice();
    curResult.textContent = playRound(humanSelection, computerSelection);
    cScore.textContent = "Computer Score: " + computerScore;
    hScore.textContent = "Human Score: " + humanScore;
    checkWinner(computerScore, humanScore);
});

const p = document.querySelector("#p");
p.addEventListener("click", () => {
    const humanSelection = getHumanChoice("paper");
    const computerSelection = getComputerChoice();
    curResult.textContent = playRound(humanSelection, computerSelection);
    cScore.textContent = "Computer Score: " + computerScore;
    hScore.textContent = "Human Score: " + humanScore;
    checkWinner(computerScore, humanScore);
})

const s = document.querySelector("#s");
s.addEventListener("click", () => {
    const humanSelection = getHumanChoice("scissors");
    const computerSelection = getComputerChoice();
    curResult.textContent = playRound(humanSelection, computerSelection);
    cScore.textContent = "Computer Score: " + computerScore;
    hScore.textContent = "Human Score: " + humanScore;
    checkWinner(computerScore, humanScore);
})




