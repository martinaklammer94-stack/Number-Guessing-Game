let numberToGuess = Math.round(Math.random() * 10);
let tries = 0;

const form = document.querySelector("#guessForm");
const headline = document.querySelector("#headline");

function guessTheNumber() {
  let myNumber = document.querySelector("#guessedNumber").value;
  tries = tries + 1;
  displayTries.innerHTML = "Versuche: " + tries;

  if (numberToGuess == myNumber.value) {
    headline.innerHTML = "Glückwunsch! 😁 Du hast gewonnen! 🙌";

    let jsConfetti = new JSConfetti();
    jsConfetti.addConfetti();

    resetGame();
    return;
  }

  if (numberToGuess > myNumber.value) {
    headline.innerHTML = "Deine Zahl ist zu klein... 😔";
  }

  if (numberToGuess < myNumber.value) {
    headline.innerHTML = "Deine Zahl ist zu groß... 😔";
  }

  myNumber.value = "";
}

function resetGame() {
  numberToGuess = Math.round(Math.random() * 10);
  tries = 0;
  displayTries.innerHTML = "Versuche: 0";
  myNumber.value = "";
}

function submitHandler(event) {
  event.preventDefault();
  guessTheNumber();
}

form.addEventListener("submit", submitHandler);
