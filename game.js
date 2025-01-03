function playGame(){
    console.log(humanChoice());
}

function playRound(){

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