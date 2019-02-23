# Psychic-Game
## Description
This is a javascript based game of letter gussing. 

## How to Play:
The computer will generate a random letter from the alphabet and the player will need to guess which letter the computer generated. The player will press the corresponding letter key on his/her keyboard to select the letter they think the computer generated. For each game, the player will have 10 chances to guess. Once the player guessed the correct letter or all 10 chances are used up, an alert will pop up to notify the player the result. After, the player may proceed to a new game. A new random letter will be generated on every new game. Lastly, player may not guess the same letter twice during the same game or else an alert will notify the player that the letter has already been guessed. 

## Technologies Used:
+ JavaScript
+ HTML
+ CSS

## Thought Process Behind Design
Logic must be able to perform the following at minimum in order for game to run. 
-  Able to compare computer choice and player guess to confirm winning condition.
- Three Possible outcome when player press a key:
1. Player guess matches computer choice and that is a win
2. player guess does not match computer choice and player still has chances remaining so game may continue
3. play guess does not match computer choice and no more chances remain; game is over

## Essential Codes
```
document.onkeyup = function (event) {    

//the key the user pressed will be recorded to the userGuess variable  
    var userGuess = event.key;

//The below condition is for winning
    if (alphabet.indexOf(userGuess) !== -1) {
        myaudio.play()
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
```