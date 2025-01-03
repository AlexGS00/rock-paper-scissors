function playGame(){

}

function playRound(){

}

function humanChoice(){

}

function computerChoice(){
    let remainder = (Math.random * 100) % 3;
    
    switch (remainder){
        case 0:
            return "rock";

        case 1:
            return "papper";
        
        case 2: 
        return "scissors";
    }
}