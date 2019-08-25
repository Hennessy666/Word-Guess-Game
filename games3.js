//Getting variables set up

var showsBroadway = ["wicked", "cats", "thebookofmormon", "thesoundofmusic", "chicago", "thelionking", "avenueq", "lesmiserables"];
var letterGuess = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var guessLeft = 10;
var remainingLetters = 


//adding logic
getShow = showsBroadway[Math.floor(Math.random() * showsBroadway.length)];

var guessArray = [];
for (var i = 0; i < getShow.length; i++) {
    guessArray.push(" __,");
    guessArray.toString();
    document.getElementById("word-guess").innerHTML = guessArray.join("");
}


//Game Loop

while (remainingLetters > 0) {
    var el = el.innerHTML = guessArray.join("");
    var letterGuess = prompt("Guess a letter or press cancel to exit game");

    if (letterGuess === null) {
        break;
    } else if (letterGuess.length !== 1) {
        alert("Please enter a single letter.");
    } else {
        for (var j = 0; j < getShow.length; j++) {
            guessArray[j] = letterGuess;
            remainingLetters--;
        }
    }
};

el.innerHTML = guessArray.join("");
alert("Amazing! You guessed" + getShow);

//Letters in Answers

document.onkeyup = function() {
    letter = onkeyup.keyCode;
    letterGuessed = String.fromCharCode(i);
}
document.body.onkeyup = function(event) {
    document.getElementById("word-guess").innerHTML = String.fromCharCode(event.keyCode);
  }


