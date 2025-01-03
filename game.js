function playGame(){
    console.log(computerChoice());
}

function playRound(){

}

function humanChoice(){

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