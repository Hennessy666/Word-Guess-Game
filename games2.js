//Getting variables set up

var showsBroadway = ["wicked", "cats", "thebookofmormon", "thesoundofmusic", "chicago", "thelionking", "avenueq", "lesmiserables"];
var guess = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var remainingLetters = getShow.length;

//adding logic
var getShow = showsBroadway[Math.floor(Math.random() * showsBroadway.length)];

var guessArray = [];
for (var i = 0; i < getShow.length; ++i) {
    guessArray[i] = "_";
}

var el = document.getElementById("demo");
el.innerHTML = guessArray;

//Game Loop

while (remainingLetters > 0) {
    var el = el.innerHTML = guessArray.join("");
    var guess = prompt("Guess a letter or press cancel to exit game");

    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Please enter a single letter.");
    } else {
        for (var j = 0; j < getShow.length; j++) {
            guessArray[j] = guess;
            remainingLetters--;
        }
    }
};




el.innerHTML = guessArray.join("");
alert("Amazing! You guessed" + getShow);



