const choices = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice(){
    let option = Math.floor(Math.random() * 3);
    return choices[option];        
};

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

    switch (playerSelection){
        case "Rock":
            if (computerSelection === "Paper"){
                return `You Lose! ${computerSelection} beats ${playerSelection}`;
            } else if (computerSelection === "Scissors"){
                return `You Win! ${playerSelection} beats ${computerSelection}`;
            } else{
                return "Tie!";
            };
            break;
        case "Paper":
            if (computerSelection === "Scissors"){
                return `You Lose! ${computerSelection} beats ${playerSelection}`;
            } else if (computerSelection === "Rock"){
                return `You Win! ${playerSelection} beats ${computerSelection}`;
            } else{
                return "Tie!";
            };
            break;
        case "Scissors":
            if (computerSelection === "Rock"){
                return `You Lose! ${computerSelection} beats ${playerSelection}`;
            } else if (computerSelection === "Paper"){
                return `You Win! ${playerSelection} beats ${computerSelection}`;
            } else{
                return "Tie!";
            };
            break;
    };

};

function game(){
    let playerScore = 0;
    let computerScore = 0;
    
    for (let i = 0; i < 5; i++){
        let result = playRound(prompt("Rock, Paper, or Scissors?"), getComputerChoice());
        console.log(result);
        
        if (result.charAt(4) === "W"){
            playerScore++;
        } else {
            computerScore++;
        };
    };

    console.log(`Player Score: ${playerScore} | Computer Score: ${computerScore}`);
}

game();