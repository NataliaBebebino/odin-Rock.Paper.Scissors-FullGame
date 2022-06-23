const gameElements = ["rock", "paper", "scissors"];

let counter = {
    player : 0,
    computer : 0
};

let btnPlayerElement = document.querySelectorAll(".player-game-element");
let btnComputerElement = document.querySelectorAll(".computer-game-element");
let playerScore = document.querySelector("#player-score");
let computerScore = document.querySelector("#computer-score");
let individualRoundResult = document.querySelector("#individual-round-result");
let btnPlayAgain = document.querySelector("#btn-play-again");
let finalResult = document.querySelector("#final-result");


for (let index = 0; index < btnPlayerElement.length; index++) {
    btnPlayerElement[index].addEventListener("click", playRound);
}

function playRound(e) {
    let playerSelection = e.target.innerText.toLowerCase();
    let computerSelection = gameElements[Math.floor(Math.random()*gameElements.length)];

    
    for (let index = 0; index < btnComputerElement.length; index++) {
        if (btnComputerElement[index].textContent.toLowerCase() === computerSelection) {
            btnComputerElement[index].style.backgroundColor = "rgb(130,15,151)";
        } else {
            btnComputerElement[index].style.backgroundColor = "gray";
        }        
    }

    if (playerSelection === computerSelection) {
        individualRoundResult.textContent = "It's a tie!";
    }
    if (playerSelection === "rock" && computerSelection === "paper") {
        counter.computer++
        individualRoundResult.textContent = "Computer wins the round! Paper beats the rock.";
    }
    if (playerSelection === "rock" && computerSelection === "scissors") {
        counter.player++;
        individualRoundResult.textContent = "You win the round! The rock beats the scissors.";
    }
    if (playerSelection === "paper" && computerSelection === "rock") {
        counter.player++;
        individualRoundResult.textContent = "You win the round! Paper beats the rock.";
    }
    if (playerSelection === "paper" && computerSelection === "scissors") {
        counter.computer++;
        individualRoundResult.textContent = "Computer wins the round! The scissors beat paper.";
    }
    if (playerSelection === "scissors" && computerSelection === "paper") {
        counter.player++;
        individualRoundResult.textContent = "You win the round! The scissors beat paper.";
    }
    if (playerSelection === "scissors" && computerSelection === "rock") {
        counter.computer++;
        individualRoundResult.textContent = "Computer wins the round; the rock beats the scissors.";
    }

    playerScore.textContent = counter.player;
    computerScore.textContent = counter.computer;

    if (counter.player === 5 || counter.computer === 5) {
        getGameResult();
        for (let index = 0; index < btnPlayerElement.length; index++) {
            btnPlayerElement[index].disabled = true;
        }
    }
}


btnPlayAgain.addEventListener("click", playAgain);


// To reset values
function playAgain() {
    counter.player = 0;
    counter.computer = 0;
    playerScore.textContent = counter.player;
    computerScore.textContent = counter.computer;
    individualRoundResult.textContent = "";
    finalResult.textContent = "";

    for (let index = 0; index < btnPlayerElement.length; index++) {
        btnPlayerElement[index].disabled = false;
        btnComputerElement[index].style.backgroundColor = "gray";
    }
}


function getGameResult() {
    if (counter.player > counter.computer) {
        finalResult.textContent = "Congrats! You won the game!";
    } else if (counter.player === counter.computer){
        finalResult.textContent = "It's a tie.";
    } else {
        finalResult.textContent = "Ups... You lost the game";
    }
}