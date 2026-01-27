// Zufällige Zahl zwischen 1 und 10 erzeugen, die erraten werden soll
let numberToGuess = Math.round(Math.random() * 10) + 1;
// Zählt die Anzahl der Versuche
let tries = 0;

// HTML-Elemente aus dem Dokument auswählen
const form = document.querySelector("#guessForm");
const headline = document.querySelector("#headline");
const displayTries = document.querySelector("#displayTries");
const input = document.querySelector("#guessedNumber");

// Hauptfunktion für das Zahlen-Raten
function guessTheNumber() {
  // Eingabewert auslesen und in eine Zahl umwandeln
  let myNumber = +input.value;
  // Versuche erhöhen
  tries++;
  // Anzahl der Versuche im HTML anzeigen
  displayTries.innerHTML = "Versuche: " + tries;

  // Prüfen, ob die Zahl richtig ist
  if (numberToGuess === myNumber) {
    headline.innerHTML = "Glückwunsch! 😁 Du hast gewonnen! 🙌";

    // Konfetti-Animation starten
    let jsConfetti = new JSConfetti();
    jsConfetti.addConfetti();

    // Spiel nach 5 Sekunden zurücksetzen
    setTimeout(resetGame, 5000);

    return;
  }

  // Hinweis, wenn die Zahl zu klein ist
  if (numberToGuess > myNumber) {
    headline.innerHTML = "Deine Zahl ist zu klein... 😔";
  }

  // Hinweis, wenn die Zahl zu groß ist
  if (numberToGuess < myNumber) {
    headline.innerHTML = "Deine Zahl ist zu groß... 😔";
  }

  // Eingabefeld leeren für den nächsten Versuch
  input.value = "";
}

// Setzt das Spiel zurück
function resetGame() {
  // Neue Zufallszahl erzeugen
  numberToGuess = Math.round(Math.random() * 10) + 1;
  // Versuche zurücksetzen
  tries = 0;
  // Anzeige zurücksetzen
  displayTries.innerHTML = "Versuche: 0";
  // Eingabefeld leeren
  document.querySelector("#guessedNumber").value = "";
  // Hinweis zurücksetzen
  headline.innerHTML = "Bitte rate die Zahl";
}

// Wird aufgerufen, wenn das Formular abgeschickt wird
function submitHandler(event) {
  // Verhindert das automatische Neuladen der Seite
  event.preventDefault();
  // Startet das Spiel
  guessTheNumber();
}

// EventListener für das Formular hinzufügen
form.addEventListener("submit", submitHandler);
