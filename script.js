let pScore = 0;
let cScore = 0;

const playerChoice = document.querySelector('#player-choice');
const computerChoice = document.querySelector('#computer-choice');
const result = document.querySelector('.result');
const resultDescription = document.querySelector('.result-description');
const playerScore = document.querySelector('#player-score');
const computerScore = document.querySelector('#computer-score');

const buttons = document.querySelectorAll('.btn-play');
buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    let comp = getComputerChoice();

    playerChoice.textContent = btn.value;
    computerChoice.textContent = comp;

    playRound(btn.value, comp);
    tallyScore();
  });
});

// getComputerChoice() will generate random choice of computer

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

// playRound(playerSelection, computerSelection) will take user's input and the random choice of computer to compare and decide who wins the round.

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

// game() will make 5 rounds of rock-paper-scissors. tallyScore(playerScore, computerScore) will compute the total score and display the winner

const tallyScore = () => {
  if (result.textContent.includes('Win')) {
    pScore++;
  } else if (result.textContent.includes('Lose')) {
    cScore++;
  }

  playerScore.textContent = pScore;
  computerScore.textContent = cScore;

  // if (pScore > cScore) {
  //   return `Your Score: ${pScore} \n Computer Score: ${cScore} \n YOU WIN!`;
  // } else if (pScore < cScore) {
  //   return `Your Score: ${pScore} \n Computer Score: ${cScore} \n YOU LOSE!`;
  // } else {
  //   return `Your Score: ${pScore} \n Computer Score: ${Score} \n DRAW!`;
  // }
};
