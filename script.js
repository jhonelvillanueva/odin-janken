// getComputerChoice() will generate random choice of computer

const getComputerChoice = () => {
  let randomChoice = Math.floor(Math.random() * 3 + 1);

  switch (randomChoice) {
    case 1:
      return "Rock";
      break;
    case 2:
      return "Paper";
      break;
    default:
      return "Scissors";
  }
};

// capitalize(string) will format user's choice to capital first letter only

const capitalize = (string) => {
  let lowerCase = string.toLowerCase();
  return lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
};

// playRound(playerSelection, computerSelection) will take user's input and the random choice of computer to compare and decide who wins the round.

const playRound = (playerSelection, computerSelection) => {
  if (
    capitalize(playerSelection) === "Scissors" &&
    computerSelection === "Rock"
  ) {
    return "You Lose! Rock beats Scissors";
  } else if (
    capitalize(playerSelection) === "Paper" &&
    computerSelection === "Scissors"
  ) {
    return "You Lose! Scissors beats Paper";
  } else if (
    capitalize(playerSelection) === "Rock" &&
    computerSelection === "Paper"
  ) {
    return "You Lose! Paper beats Rock";
  } else if (capitalize(playerSelection) === computerSelection) {
    return "Draw!";
  } else if (
    capitalize(playerSelection) !== "Rock" ||
    capitalize(playerSelection) !== "Paper" ||
    capitalize(playerSelection) !== "Scissors"
  ) {
    return "You Lose! Invalid choice";
  } else {
    return `You Win! ${capitalize(
      playerSelection
    )} beats ${computerSelection}. CONGRATULATIONS!`;
  }
};

// game() will make 5 rounds of rock-paper-scissors

const game = () => {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("What's your play? Rock, Paper, Scissors?");

    console.log(playRound(playerSelection, getComputerChoice()));
  }
};

game();
