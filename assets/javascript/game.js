// variables- array of choices, wins, losses, guesses left, guesses so far
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log("first computer guess: " + computerGuess);

// on keypress, reduce guesses left, change player's guess to lower case
document.onkeyup = function(event) {
    guessesLeft--;
    var playerGuess = event.key.toLowerCase();
    
    // guesses so far logic
    if ((playerGuess !== computerGuess)) {
        guessesSoFar.push(" " + playerGuess);
    }
    
// win and reset 
    if ((playerGuess === computerGuess) && (guessesLeft >= 0)) {
    wins++;
    alert("You win!  You're psychic! (sort of)");
    guessesLeft = 9;
    guessesSoFar = [];
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log("new computer guess:" + computerGuess);
    } 

// lose and reset
    if ((playerGuess !== computerGuess) && (guessesLeft === 0)) {
    losses++;
    alert("Sorry, you lose.  Play again?");
    guessesLeft = 9;
    guessesSoFar = [];
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log("new computer guess:" + computerGuess);
    }

// holds html that will update with every guess, win, loss and update guesses so far with new guesses
    var html = 
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses Left: " + guessesLeft + "</p>" +
        "<p>Your Guesses So Far: " + guessesSoFar + "</p>";

//sends updated html to game div
    document.querySelector("#game").innerHTML = html;
};



