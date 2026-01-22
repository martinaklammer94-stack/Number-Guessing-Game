let numberToGuess = Math.round(Math.random() * 10) + 1;
let tries = 0;
let myNumber = Number(document.querySelector("#guessedNumber").value);

const form = document.querySelector("#guessForm");
const headline = document.querySelector("#headline");
const displayTries = document.querySelector("#displayTries");

function guessTheNumber() {
  const input = document.querySelector("#guessedNumber");
  let myNumber = +input.value; // in Zahl konvertieren

  tries++;
  displayTries.innerHTML = "Versuche: " + tries;

  if (myNumber < 1 || myNumber > 10) {
    headline.innerHTML = "Bitte gib eine Zahl zwischen 1 und 10 ein!";
    input.value = "";
    return;
  }

  if (numberToGuess === myNumber) {
    headline.innerHTML = "Glückwunsch! 😁 Du hast gewonnen! 🙌";
    let jsConfetti = new JSConfetti();
    jsConfetti.addConfetti();

    setTimeout(resetGame, 50000);

    resetGame();
    return;
  }

  if (numberToGuess > myNumber) {
    headline.innerHTML = "Deine Zahl ist zu klein... 😔";
  }

  if (numberToGuess < myNumber) {
    headline.innerHTML = "Deine Zahl ist zu groß... 😔";
  }

  input.value = "";
}

function resetGame() {
  numberToGuess = Math.round(Math.random() * 10);
  tries = 0;

  displayTries.innerHTML = "Versuche: 0";
  document.querySelector("#guessedNumber").value = "";
}

function submitHandler(event) {
  event.preventDefault();
  guessTheNumber();
}

form.addEventListener("submit", submitHandler);
