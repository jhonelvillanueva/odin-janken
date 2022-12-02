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
