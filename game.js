function updateScore(roundValue){
    let hScoreDiv = document.querySelector("#human-score");
    let humanScore = parseInt(hScoreDiv.textContent);
    let cScoreDiv = document.querySelector("#computer-score");
    let computerScore = parseInt(cScoreDiv.textContent);

    if (roundValue === -1) {
        computerScore += 1;
        console.log(computerScore)
    } else if(roundValue===1){
        humanScore += 1;
        console.log(humanScore)
    }

    hScoreDiv.textContent = humanScore;
    cScoreDiv.textContent = computerScore;

    if(humanScore >= 5 && humanScore > computerScore){
        document.querySelector("#winner").textContent = "Player won the game";
        document.querySelector("#winner").classList.add("green");
    } else if(computerScore>=5 && computerScore > humanScore){
        document.querySelector("#winner").textContent = "Computer won the game";
        document.querySelector("#winner").classList.add("red");
    }
}

let buttons = document.querySelectorAll("button")
buttons.forEach(button => {
    button.addEventListener("click", playRound);
});

function playRound(event) {
    let human = event.target.value; // Access the value of the clicked button
    console.log(human); // Logs "rock", "paper", or "scissors" depending on the button clicked
    let computer = computerChoice();
    console.log(computer)
    let gameValue; 


    switch (human){
        case "rock":
            switch (computer){
                case "rock":
                    gameValue = 0;
                    break;
                
                case "paper":
                    gameValue = -1;
                    break;
                
                case "scissors":
                    gameValue = 1;
                    break;
                
            }
            break;
        
        case "paper":
            switch (computer){
                case "rock":
                    gameValue = 1;
                    break;
                
                case "paper":
                    gameValue = 0;
                    break;
                
                case "scissors":
                    gameValue = -1;
                    break;

                
            }
            break;

        case "scissors":
            switch (computer){
                case "rock":
                    gameValue = -1;
                    break;
                
                case "paper":
                    gameValue = 1;
                    break;
                
                case "scissors":
                    gameValue = 0;
                    break;
                
            }
            break;

        default:
            gameValue = -2;
    }

    if(gameValue === 0){
        console.log("It's a tie!")
    } else if(gameValue === 1){
        console.log(`You win! ${human} beats ${computer}`)
    } else{
        console.log(`You lose! ${computer} beats ${human}`)
    }

    updateScore(gameValue);
    return gameValue;
}

function computerChoice(){
    let text = "";

    switch (Math.floor(Math.random() * 100)%3){
        case 0:
            text = "rock";
            break;
        case 1:
            text = "paper";
            break;
        case 2: 
            text = "scissors";
            break;

        default:
            console.log((Math.random * 100) % 3);
            text = "Something's wrong"
    }
    return text;
}