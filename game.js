function playGame(){
    console.log(humanChoice());
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

                default:
                    gameValue = -2;
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

                default:
                    gameValue = -2;
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

                default:
                    gameValue = -2;
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
        console.loh(`You lose! ${computer} beats ${human}`)
    }
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
            text = "papper";
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