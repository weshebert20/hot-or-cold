/*--- Computer selects random number ---*/
function selectNumber() {

	var selectedNumber = Math.floor((Math.random()*100)+1);
	return selectedNumber;

}

var guessNumber;
var numberOfGuesses = 0;
var randomNumber;



	/*--- Track number of guesses ---*/
	function tracking() {
		numberOfGuesses++;
		$('#count').text(numberOfGuesses);
	}

	/*--- Track the guesses---*/
	function trackGuesses() {
		$("#guessList").prepend('<li>' + guessNumber + '</li>');
	}

	/*--- Clear the tracked guesses ---*/
	function clearGuesses() {
 		$('#guessList').empty();
	}


  	/*--- Clear the text box ---*/
	function clearText() {
		$('#userGuess').val('');
	}

	/*--- Bring Guess Tracker back to 0---*/
	function clearGuessTracker() {
		$("#count").text(0);
		numberOfGuesses = 0;
	}

	/*--- Clear the Hot/cold Feedback---*/
	function clearFeedback() {
		$("#feedback").text("Make your Guess!");
	}

	function newGame() {
		clearFeedback();
		clearText();
		clearGuessTracker();
		randomNumber = selectNumber();
		clearGuesses();
		 

	}

  	/*--- Hot or Cold ---*/
  		function playGame(answer) { 

		var guessNumber = $("#userGuess").val();
			console.log("guessNumber", guessNumber);	

		var guessChecker = (Math.abs(guessNumber - answer));
			console.log("guessChecker", guessChecker);


		if(guessChecker === 0) {
			$("#feedback").replaceWith("<h2 id='feedback'>" + "You got it right - press the New Game button to start again!" + "</h2>");
		}

		else if(guessChecker >= 30 && guessChecker <=49) {
			$("#feedback").replaceWith("<h2 id='feedback'>" + "You're cold!" + "</h2>");
		}

		else if(guessChecker >= 20 && guessChecker <=29) {
			$("#feedback").replaceWith("<h2 id='feedback'>" + "You're warm!" + "</h2>");
		}

		else if(guessChecker >= 10 && guessChecker <=19) {
			$("#feedback").replaceWith("<h2 id='feedback'>" + "You're hot!" + "</h2>");
		}

		else if(guessChecker >= 1 && guessChecker <=9) {
			$("#feedback").replaceWith("<h2 id='feedback'>" + "You're burning up!" + "</h2>");
		}

		else {
			$("#feedback").replaceWith("<h2 id='feedback'>" + "You're freezing!" + "</h2>");
		}

	}


$(document).ready(function() {

	/*--- On ready: New Game ---*/
	$("form").submit(function(event){
		console.log("On submit");
		event.preventDefault();
		guessNumber = $("#userGuess").val();
		tracking();
		playGame(randomNumber);
		clearText();
		trackGuesses();
		 
	
	});

	/*--- Click New Game ---*/
	$("a.new").click(function() {
		event.preventDefault();
			newGame();

	});


	/*--- Display information modal box ---*/

  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});

  	/*--- Hide information modal box ---*/

  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  		newGame();

}); 
