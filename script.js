let pScore = 0;
let cScore = 0;
let isGameOver = false;

const playerChoice = document.querySelector('#player-choice');
const computerChoice = document.querySelector('#computer-choice');
const result = document.querySelector('.result');
const resultDescription = document.querySelector('.result-description');
const playerScore = document.querySelector('#player-score');
const computerScore = document.querySelector('#computer-score');
const resetButton = document.querySelector('#btn-reset');
const buttons = document.querySelectorAll('.btn-play');

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    let comp = getComputerChoice();
    if (isGameOver) return;

    playerChoice.textContent = btn.value;
    computerChoice.textContent = comp;

    game(btn.value, comp);
  });
});

resetButton.addEventListener('click', () => {
  pScore = 0;
  cScore = 0;
  isGameOver = false;

  playerScore.textContent = 0;
  computerScore.textContent = 0;
  result.textContent = 'Make a choice!';
  resultDescription.textContent = 'First to score 5 wins!';
});

const game = (playerChoice, computerChoice) => {
  playRound(playerChoice, computerChoice);
  tallyScore();
};

const getComputerChoice = () => {
  let randomChoice = Math.floor(Math.random() * 3 + 1);

  switch (randomChoice) {
    case 1:
      return 'Rock';
      break;
    case 2:
      return 'Paper';
      break;
    default:
      return 'Scissors';
  }
};

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
    result.textContent = 'You Lose!';
    resultDescription.textContent = 'Rock beats Scissors';
  } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
    result.textContent = 'You Lose!';
    resultDescription.textContent = 'Scissors beats Paper';
  } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
    result.textContent = 'You Lose!';
    resultDescription.textContent = 'Paper beats Rock';
  } else if (playerSelection === computerSelection) {
    result.textContent = 'Draw!';
    resultDescription.textContent = `${playerSelection} same with ${computerSelection}`;
  } else {
    result.textContent = 'You Win!';
    resultDescription.textContent = `${playerSelection} beats ${computerSelection}`;
  }
};

const tallyScore = () => {
  if (result.textContent.includes('Win')) {
    pScore++;
  } else if (result.textContent.includes('Lose')) {
    cScore++;
  }

  playerScore.textContent = pScore;
  computerScore.textContent = cScore;

  if (pScore === 5 || cScore === 5) {
    isGameOver = true;
    if (pScore > cScore) {
      result.textContent = 'You Win!';
      resultDescription.textContent = 'CONGRATULATIONS!';
    } else {
      result.textContent = 'You Lose!';
      resultDescription.textContent = 'TRY AGAIN!';
    }
  }
};
