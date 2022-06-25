const gameElements = ["rock", "paper", "scissors"];

let counter = {
    player : 0,
    computer : 0
};

const rockPlayerElement = document.getElementById("rock-player-element");
const paperPlayerElement = document.getElementById("paper-player-element");
const scissorsPlayerElement = document.getElementById("scissors-player-element");
const btnComputerElement = document.querySelectorAll(".computer-game-element");
const playerScore = document.querySelector("#player-score");
const computerScore = document.querySelector("#computer-score");
const individualRoundResult = document.querySelector("#individual-round-result");
const btnPlayAgain = document.querySelector("#btn-play-again");
const finalResult = document.querySelector("#final-result");


rockPlayerElement.addEventListener("click", () => playRound("rock"));
paperPlayerElement.addEventListener("click", () => playRound("paper"));
scissorsPlayerElement.addEventListener("click", () => playRound("scissors"));
btnPlayAgain.addEventListener("click", playAgain);


function playRound(playerSelection) {
    let computerSelection = gameElements[Math.floor(Math.random()*gameElements.length)];

    setComputerBtnColor(computerSelection);

    if (playerSelection === computerSelection) {
        individualRoundResult.textContent = "It's a tie!";
        individualRoundResult.style.color = "darkBlue";
    }
    if (playerSelection === "rock" && computerSelection === "paper") {
        counter.computer++
        individualRoundResult.textContent = "Computer wins the round! Paper beats the rock.";
        individualRoundResult.style.color = "darkRed";
    }
    if (playerSelection === "rock" && computerSelection === "scissors") {
        counter.player++;
        individualRoundResult.textContent = "You win the round! The rock beats the scissors.";
        individualRoundResult.style.color = "darkGreen";
    }
    if (playerSelection === "paper" && computerSelection === "rock") {
        counter.player++;
        individualRoundResult.textContent = "You win the round! Paper beats the rock.";
        individualRoundResult.style.color = "darkGreen";
    }
    if (playerSelection === "paper" && computerSelection === "scissors") {
        counter.computer++;
        individualRoundResult.textContent = "Computer wins the round! The scissors beat paper.";
        individualRoundResult.style.color = "darkRed";
    }
    if (playerSelection === "scissors" && computerSelection === "paper") {
        counter.player++;
        individualRoundResult.textContent = "You win the round! The scissors beat paper.";
        individualRoundResult.style.color = "darkGreen";
    }
    if (playerSelection === "scissors" && computerSelection === "rock") {
        counter.computer++;
        individualRoundResult.textContent = "Computer wins the round; the rock beats the scissors.";
        individualRoundResult.style.color = "darkRed";
    }

    playerScore.textContent = counter.player;
    computerScore.textContent = counter.computer;

    if (counter.player === 5 || counter.computer === 5) {
        getGameResult();
        disablePlayerElements();
    }
}

function disablePlayerElements() {
    rockPlayerElement.disabled = true;
    paperPlayerElement.disabled = true;
    scissorsPlayerElement.disabled = true;
}

function setComputerBtnColor(computerSelection) {
    for (let index = 0; index < btnComputerElement.length; index++) {
        if (btnComputerElement[index].textContent.toLowerCase() === computerSelection) {
            btnComputerElement[index].style.backgroundColor = "rgb(130,15,151)";
        } else {
            btnComputerElement[index].style.backgroundColor = "gray";
        }        
    }
}


// To reset values
function playAgain() {
    counter.player = 0;
    counter.computer = 0;
    playerScore.textContent = counter.player;
    computerScore.textContent = counter.computer;
    individualRoundResult.textContent = "";
    finalResult.textContent = "";

    for (let index = 0; index < btnComputerElement.length; index++) {
        btnComputerElement[index].style.backgroundColor = "gray";
    }
    rockPlayerElement.disabled = false;
    paperPlayerElement.disabled = false;
    scissorsPlayerElement.disabled = false;
}


function getGameResult() {
    if (counter.player > counter.computer) {
        finalResult.textContent = "Congrats! You won the game!";
        finalResult.style.color = "darkGreen";
        finalResult.style.fontWeight = "bold";
    } else {
        finalResult.textContent = "Ups... You lost the game";
        finalResult.style.color = "red";
        finalResult.style.fontWeight = "bold";
    }
}