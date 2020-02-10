//These are all the variables throughout the game.
//Starting with the wins, losses, and attempts.
//It also includes the array of letters used for the player to guess from.
//players wins
var won = 0;
//players losses
var lost = 0;
//attemps left
var attemptsRemaining = 10;

//The letter that the player is trying to guess
var ranLetter = null;

//All the letters possible to guess
var letters = [
  "q",
  "e",
  "r",
  "t",
  "o",
  "s",
  "d",
  "h",
  "j",
  "k",
  "z",
  "x",
  "d",
  "b",
  "a",
  "m"
];

//The player's guesses
var playerGuess = [];

//Creates a random letter to guess beteween A and Z.
function letterToGuess() {
  ranLetter = letters[Math.floor(Math.random() * letters.length)];
  console.log(ranLetter);
}

var updatedGuessesRemaining = function() {
  document.querySelector("#attempts").innerHTML = attemptsRemaining;

  //console.log(attemptsRemaining);
};
//Grabs out playerGuess from out html and updated it with the letters the play chooses.
var updateGuessesSoFar = function() {
  document.querySelector("#playerGuess").innerHTML = playerGuess.join(", ");
};

var reset = function() {
  attemptsRemaining = 10;
  playerGuess = [];
  updateGuessesSoFar();
  updatedGuessesRemaining();
  letterToGuess();
};

//This tracks the players keystrokes and logs what they press.
document.onkeyup = function(event) {
  attemptsRemaining--;

  var letter = String.fromCharCode(event.which).toLowerCase();

  playerGuess.push(letter);

  updateGuessesSoFar();
  updatedGuessesRemaining();

  //This will notify the player if they guessed correctly.
  if (letter === ranLetter) {
    won++;

    document.querySelector("#won").innerHTML = won;

    reset();
  }
  if (attemptsRemaining === 0) {
    lost++;

    document.querySelector("#lost").innerHTML = lost;

    reset();
    console.log(playerGuess);
  }

  //This command will run if the player guesses incorrectly.
  //letterToGuess();

  //when the player runs out of guesses this command will register a loss.
  // if (attemptsRemaining == 0) {
  //   lost++;
  //   usedArray = [];
  //   attempts = 10;
  // }
};
