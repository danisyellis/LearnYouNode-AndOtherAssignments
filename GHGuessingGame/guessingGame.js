jQuery(document).ready(function(){
/* **** Global Variables **** */
// try to elminate these global variables in your project, these are here just to start.

var playersGuess = 0
    winningNumber = generateWinningNumber();



/* **** Guessing Game Functions **** */

// Generate the Winning Number

function generateWinningNumber(){
	return Math.floor(Math.random() * (101 - 1)) + 1;
}

// Fetch the Players Guess

function playersGuessSubmission(event){
	var stringGuess = $("#guess").val();
		$("#guess").html("");
	//playersGuess = document.getElementById('guess').value;
    //document.getElementById('guess').value = "";
    console.log(stringGuess)
}

// Determine if the next guess should be a lower or higher number

function lowerOrHigher(){
	// add code here
}

// Check if the Player's Guess is the winning number 

function checkGuess(){
	// add code here
}

// Create a provide hint button that provides additional clues to the "Player"

function provideHint(){
	// add code here
}

// Allow the "Player" to Play Again

function playAgain(){
	// add code here
}




/* **** Event Listeners/Handlers ****  */

	$("#submit").on("click", playersGuessSubmission)

})
