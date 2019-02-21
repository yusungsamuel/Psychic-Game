//varibale to record wins
var wins = 0
//varibale to record losses
var losses = 0
//varibale to record lives remaining
var lives = 10
//variable to display an array of what the user have guessed so far
var userGuessList = [];
//an array for the computer to generate a random letter from
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
//variable to store the random letter generated on the first round
var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
//to see the answer on the console during the first round
console.log(computerChoice);


//the text below are for linking elements from HTML to this JS doc
var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var livesText = document.getElementById("lives-text")
var goodJob = document.getElementById("goodJob")



//Whenever a key is pressed and released the following function will run.
document.onkeyup = function (event) {

//the key the user pressed will be recorded to the userGuess variable  
    var userGuess = event.key;

//The below condition is for winning
    if (alphabet.indexOf(userGuess) !== -1) {
        
        directionsText.textContent = "";
        winsText.textContent = "Wins: " + wins;
        lossesText.textContent = "Losses: " + losses;
        userChoiceText.textContent = "You Chose: " + userGuessList
        livesText.textContent = "Lives Left: " + lives


        if (computerChoice === userGuess) {
            wins += 1;
            alert("Good Job! You have seen through Neji's byakugan. The letter he is thinking of is " + computerChoice.toUpperCase());
            lives = 10;
            userGuessList = [];
            computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
            console.log(computerChoice);
            goodJob.classList.remove("hidden")
            setTimeout (function(){
                goodJob.className += "hidden";
                directionsText.textContent = "Press any letter key to play another game.";
            }, 2000)
        }

        else if (computerChoice !== userGuess && lives !== 0) {
            if (userGuessList.indexOf(userGuess) === -1) {
                userGuessList.push(event.key);
                lives -= 1;
                userChoiceText.textContent = "You Chose: " + userGuessList
            }
            else {
                alert ("Fool! You guessed that already.")
            }
        }

        else {
            alert("Game Over! Seems like you need more training. The letter I am thinking about is " + computerChoice)
            losses += 1;
            lives = 10;
            userGuessList = []
            directionsText.textContent = "Press any letter key to play another game."
            computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
            console.log(computerChoice);
        };
    }
}

