let numberToGuess = Math.round(Math.random() * 10);

let tries = 0;

function guessTheNumber() {
    tries = tries +1;
    displayTries.innerHTML = "Versuche: " + tries;

    if(numberToGuess == myNumber.value) {
        headline.innerHTML = "Glückwunsch! 😁 Du hast gewonnen! 🙌";
    }

     if(numberToGuess > myNumber.value) {
        headline.innerHTML = "Deine Zahl ist zu klein... 😔";
    }

    if(numberToGuess < myNumber.value) {
        headline.innerHTML = "Deine Zahl ist zu groß... 😔";
    }
    myNumber.value = ' '
}