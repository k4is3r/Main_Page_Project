let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("computer-score");
const socreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const sicssors_div = document.getElementById("s");

function getComputerChoice() {
  const choice = ["r", "p", "s"];
  const ramdonN = Math.floor(Math.random() * 3);
  return choice[ramdonN];
}

function converChoice(letter) {
  switch (letter) {
    case "r":
      return "Rock";
      break;
    case "s":
      return "Scissors";
      break;
    case "p":
      return "Paper";
      break;
  }
}
function win(user, comp) {
  userScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  const userChoice = document.getElementById(user);
  const smallUseWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  result_p.innerHTML = `
    ${converChoice(user)} ${smallUseWord} beats ${converChoice(
    comp
  )} ${smallCompWord} you Win.`;
  userChoice.classList.add("green-glow");
  setTimeout(() => userChoice.classList.remove("green-glow"), 2000);
}

function lose(user, comp) {
  compScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  const userChoice = document.getElementById(user);
  const smallUseWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  result_p.innerHTML = `
      ${converChoice(user)} ${smallUseWord} loses to ${converChoice(
    comp
  )} ${smallCompWord} you Lost.`;
  userChoice.classList.add("red-glow");
  setTimeout(() => userChoice.classList.remove("red-glow"), 2000);
}

function draw(user, comp) {
  const userChoice = document.getElementById(user);
  const smallUseWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  result_p.innerHTML = `
        ${converChoice(user)} ${smallUseWord} equals ${converChoice(
    comp
  )} ${smallCompWord} It's a draw.`;
  userChoice.classList.add("gray-glow");
  setTimeout(() => userChoice.classList.remove("gray-glow"), 2000);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", function() {
    console.log("Presionaste la roca papito");
    game("r");
  });
  paper_div.addEventListener("click", function() {
    console.log("Presionaste el papel papito");
    game("p");
  });

  sicssors_div.addEventListener("click", function() {
    console.log("Presionaste la tijera papito");
    game("s");
  });
}

main();
