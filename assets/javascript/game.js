var wins = 0

var losses = 0

var lives = 10

var userGuessList = [];

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]



var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var livesText = document.getElementById("lives-text")
var goodJob = document.getElementById("goodJob")



document.onkeyup = function (event) {
    var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    
    var userGuess = event.key;


    if (alphabet.indexOf(userGuess) !== -1) {
        directionsText.textContent = "";
        winsText.textContent = "Wins: " + wins;
        lossesText.textContent = "Losses: " + losses;
        userChoiceText.textContent = "You Chose: " + userGuessList
        livesText.textContent = "Lives Left: " + lives

        if (computerChoice === userGuess) {
            wins += 1;
            alert("Bingo! The letter I am thinking about is " + computerChoice.toUpperCase());
            lives = 10;
            userGuessList = [];
            directionsText.textContent = "Press any letter key to play another game.";
            goodJob.classList.remove("hidden")
        }

        else if (computerChoice !== userGuess && lives !== 0) {
            if (userGuessList.indexOf(userGuess) === -1) {
                userGuessList.push(event.key);
                lives -= 1;
            }
        }

        else {
            alert("Game Over! The letter I am thinking about is " + computerChoice)
            losses += 1;
            lives = 10;
            userGuessList = []
            directionsText.textContent = "Press any letter key to play another game."
        };
    }
}

