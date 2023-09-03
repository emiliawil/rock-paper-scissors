// selecting elements

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const result = document.querySelector('#result');
const playerScore = document.querySelector('#player-score');
const computerScore = document.querySelector('#computer-score');
const rounds = document.querySelector('#round-count');
const resetBtn = document.querySelector('#reset');
const choiceButtons = document.querySelectorAll('.choice-button');

// variables

let playerSelection;
let computerSelection;
let playerScoreCount = 0;
let computerScoreCount = 0;
let roundCount = 0;

// functions

function computerPlay() {
    let random = Math.floor(Math.random() * 3);
    if (random === 0) {
        rockBtn.classList.add('red-border');
        return 'rock';
    } else if (random === 1) {
        paperBtn.classList.add('red-border');
        return 'paper';
    } else {
        scissorsBtn.classList.add('red-border');
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    
    roundCount++;
    rounds.textContent = roundCount;

    if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScoreCount++;
        computerScore.textContent = computerScoreCount;
        result.textContent = 'You lose! Paper beats Rock';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScoreCount++;
        playerScore.textContent = playerScoreCount;
        result.textContent = 'You win! Rock beats Scissors';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScoreCount++;
        playerScore.textContent = playerScoreCount;
        result.textContent = 'You win! Paper beats Rock';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScoreCount++;
        computerScore.textContent = computerScoreCount;
        result.textContent = 'You lose! Scissors beats Paper';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScoreCount++;
        computerScore.textContent = computerScoreCount;
        result.textContent = 'You lose! Rock beats Scissors';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScoreCount++;
        playerScore.textContent = playerScoreCount;
        result.textContent = 'You win! Scissors beats Paper';
    } else {
        result.textContent = 'It\'s a tie!';
    }
    setTimeout(resetButtons, 1000);
    
}

function resetButtons() {
    choiceButtons.forEach(button => {
        button.classList.remove('green-bg', 'red-border');
        button.disabled = false;
    });
}

function reset() {
    playerScoreCount = 0;
    computerScoreCount = 0;
    roundCount = 0;
    playerScore.textContent = playerScoreCount;
    computerScore.textContent = computerScoreCount;
    rounds.textContent = roundCount;
    result.textContent = 'Choose your weapon!';
}

// event listeners

rockBtn.addEventListener('click', () => {
    choiceButtons.forEach(button => {
        button.disabled = true;
    });
    rockBtn.classList.add('green-bg');
    result.textContent = 'You chose Rock!';
    setTimeout(()=>{
        playerSelection = 'rock';
        computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
       }, 1000)
}
);

paperBtn.addEventListener('click', () => {
    paperBtn.classList.add('green-bg');
    choiceButtons.forEach(button => {
        button.disabled = true;
    });
    result.textContent = 'You chose Paper!';
    setTimeout(()=>{
    playerSelection = 'paper';
    computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
       }, 1000)
}
);

scissorsBtn.addEventListener('click', () => {
    scissorsBtn.classList.add('green-bg');
    choiceButtons.forEach(button => {
        button.disabled = true;
    });
    result.textContent = 'You chose Scissors!';
   setTimeout(()=>{
    playerSelection = 'scissors';
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
   }, 1000)
}
);

resetBtn.addEventListener('click', reset);

