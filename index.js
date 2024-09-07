function getComputerChoice(){
    return Math.ceil(Math.random()*3);
    
}

function getHumanChoice(){
   let humanChoice = prompt("Enter your choice");
   switch(humanChoice){
    case "rock":
        return 1;
    case "paper":
        return 2;
    case "scissors":
        return 3;
   }
}

console.log(getHumanChoice());
console.log(getComputerChoice());

