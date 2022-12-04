const playerChoice = document.querySelector('#player-choice');
const computerChoice = document.querySelector('#computer-choice');
const result = document.querySelector('.result');
const resultDescription = document.querySelector('.result-description');

const buttons = document.querySelectorAll('.btn-play');
buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    let comp = getComputerChoice();

    playerChoice.textContent = btn.value;
    computerChoice.textContent = comp;

    playRound(btn.value, comp);
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
    // return 'You Lose! Rock beats Scissors';
    result.textContent = 'You Lose!';
    resultDescription.textContent = 'Rock beats Scissors';
  } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
    // return 'You Lose! Scissors beats Paper';
    result.textContent = 'You Lose!';
    resultDescription.textContent = 'Scissors beats Paper';
  } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
    // return 'You Lose! Paper beats Rock';
    result.textContent = 'You Lose!';
    resultDescription.textContent = 'Paper beats Rock';
  } else if (playerSelection === computerSelection) {
    // return 'Draw!';
    result.textContent = 'Draw!';
    resultDescription.textContent = `${playerSelection} same with ${computerSelection}`;
  } else {
    // return `You Win! ${playerSelection} beats ${computerSelection}. CONGRATULATIONS!`;
    result.textContent = 'You Win!';
    resultDescription.textContent = `${playerSelection} beats ${computerSelection}`;
  }
};

// game() will make 5 rounds of rock-paper-scissors. tallyScore(playerScore, computerScore) will compute the total score and display the winner

const tallyScore = (playerScore, computerScore) => {
  if (playerScore > computerScore) {
    return `Your Score: ${playerScore} \n Computer Score: ${computerScore} \n YOU WIN!`;
  } else if (playerScore < computerScore) {
    return `Your Score: ${playerScore} \n Computer Score: ${computerScore} \n YOU LOSE!`;
  } else {
    return `Your Score: ${playerScore} \n Computer Score: ${computerScore} \n DRAW!`;
  }
};
