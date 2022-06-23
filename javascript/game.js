const gameElements = ["rock", "paper", "scissors"];

let counter = {
    player : 0,
    computer : 0
};

let btnElement = document.querySelectorAll(".game-element");
let playerScore = document.querySelector("#player-score");
let computerScore = document.querySelector("#computer-score");
let individualRoundResult = document.querySelector("#individual-round-result");
let btnPlayAgain = document.querySelector("#btn-play-again");
let finalResult = document.querySelector("#final-result");


for (let index = 0; index < btnElement.length; index++) {
    btnElement[index].addEventListener("click", playRound);
}

function playRound(e) {
    let playerSelection = e.target.innerText.toLowerCase();
    //console.log(playerSelection);
    let computerSelection = gameElements[Math.floor(Math.random()*gameElements.length)];

    if (playerSelection === computerSelection) {
        //console.log("It's a tie");
        individualRoundResult.textContent = "It's a tie!";
    }
    if (playerSelection === "rock" && computerSelection === "paper") {
        counter.computer++
        //console.log("Computer wins the round; paper beats the rock.");
        individualRoundResult.textContent = "Computer wins the round! Paper beats the rock.";
    }
    if (playerSelection === "rock" && computerSelection === "scissors") {
        counter.player++;
        //console.log("You win the round; the rock beats the scissors.");
        individualRoundResult.textContent = "You win the round! The rock beats the scissors.";
    }
    if (playerSelection === "paper" && computerSelection === "rock") {
        counter.player++;
        //console.log("You win the round; paper beats the rock.");
        individualRoundResult.textContent = "You win the round! Paper beats the rock.";
    }
    if (playerSelection === "paper" && computerSelection === "scissors") {
        counter.computer++;
        //console.log("Computer wins the round; the scissors beat paper.");
        individualRoundResult.textContent = "Computer wins the round! The scissors beat paper.";
    }
    if (playerSelection === "scissors" && computerSelection === "paper") {
        counter.player++;
        //console.log("You win the round; the scissors beat paper.");
        individualRoundResult.textContent = "You win the round! The scissors beat paper.";
    }
    if (playerSelection === "scissors" && computerSelection === "rock") {
        counter.computer++;
        //console.log("Computer wins the round; the rock beats the scissors.");
        individualRoundResult.textContent = "Computer wins the round; the rock beats the scissors.";
    }

    playerScore.textContent = counter.player;
    computerScore.textContent = counter.computer;

    if (counter.player === 5 || counter.computer === 5) {
        getGameResult();
    }

    //console.log(counter.computer);
    //console.log(counter.player);
}


btnPlayAgain.addEventListener("click", playAgain);


// To reset values
function playAgain() {
    counter.player = 0;
    counter.computer = 0;
    playerScore.textContent = counter.player;
    computerScore.textContent = counter.computer;
    
}

/*
function playGame() {

    let counter = {
        player : 0,
        computer : 0
    };
    
    for (let index = 0; index < 5; index++) {
        playRound(counter, gameElements);
    }
    
    getGameResult(counter);
}
*/

function getGameResult() {
    //console.log(`Your score is: ${counter.player}`);
    //console.log(`Computer score is: ${counter.computer}`);
    if (counter.player > counter.computer) {
        //console.log("You won the game");
        finalResult.textContent = "Congrats! You won the game!";
    } else if (counter.player === counter.computer){
        //console.log("It's a tie");
        finalResult.textContent = "It's a tie.";
    } else {
        //console.log("You lost the game");
        finalResult.textContent = "Ups... You lost the game";
    }
}

/*
function playerPlay(gameElements) {
    let playerSelection = (prompt("Choose either Rock, Paper or Scissors")).toLowerCase();

    while (!gameElements.includes(playerSelection)) {
        console.log("You entered an invalid option; you need to choose among Rock, Paper or Scissors");
        playerSelection = (prompt("Choose either Rock, Paper or Scissors")).toLowerCase();
    }

    return playerSelection;
}

function computerPlay(gameElements){
    let computerSelection = gameElements[Math.floor(Math.random()*gameElements.length)];
    return computerSelection;    
}





// call to start the game
playGame();


*/