//These are all the variables throughout the game.
//Starting with the wins, losses, and attempts.
//It also includes the array of letters used for the player to guess from.
var won = 0;
var lost = 0;
var attempts = 10;
var usedArray;
var ranLetter = ranLetter;
var letters = ["qwertyuiopasdfghjklzxcvbnm"];
var playerGuess;

//Used to create the secret letter. This line of code runs as follows. starting with line '12'.
// We call on the "ranLetter" var and set it equal to the "letters" variable. Then using the
//[Math.floor(Math.random() * letters.length)]; command it takes the whole length of the letters and cycles
//through them and picks one. The console.log just makes sure to show the letter in the console when generated.
ranLetter = letters[Math.floor(Math.random() * letters.length)];
console.log(ranLetter);

//This functioin actually takes a letter from the command from above.
function jsGuess() {
  ranLetter = letters[Math.floor(Math.random() * letters.length)];
  //console.log(ranLetter);
}

//This tracks the players keystrokes.
document.onkeyup = function(event) {
  var playerGuess = event.key;
};

//This will notify the player if they guessed correctly.
if (playerGuess === ranLetter) {
  won++;
  attempts = 10;
  usedArray = [];
}

//This command will run if the player guesses incorrectly.
jsGuess();
if (playerGuess !== ranLetter) {
  attempts--;

  //when the player runs out of guesses this command will register a loss.
  if (attempts == 0) {
    lost++;
    usedArray = [];
    attempts = 10;
  }
}
