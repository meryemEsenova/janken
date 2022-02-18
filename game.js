function computerPlay(){
    const options = ['Rock', 'Paper', 'Scissors'];
    return options[Math.floor(Math.random() * options.length)];
    
}
console.log(computerPlay());

function playRound(playerSelection, computerSelection){
   //playerSelection.toLowerCase();
   return `You Lose! Paper beats Rock`;
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));


function game(){
    let input = parseInt(prompt("Please give a number"));
    for(let i = 0; i < 4; i++){
        console.log(playRound());               
    
    }
}

console.log(game());