function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let roundValue = playRound();
        console.log(roundValue);
        if (roundValue === -1) {
            computerScore += 1;
        } else if(roundValue===1){
            humanScore += 1;
        }
        console.log(`
Human Score: ${humanScore}
Computer Score: ${computerScore}
            `);
    }
}

function playRound(){
    let human = humanChoice();
    let computer = computerChoice();
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

    return gameValue;
}

function humanChoice(){
    let choice = "";

    do{
        choice = prompt("Enter your choice: ");
        if(choice === null) console.log("PLKJH")
        choice = choice.toLowerCase()
    }while(choice !== "rock" && choice !== "paper" && choice !== "scissors")

    return choice;
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

playGame()