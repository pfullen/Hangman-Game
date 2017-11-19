// Hangman-Game  js file
$(document).ready(function() {

 //- init game.   Get word and set number of chances to word length plus 7
var guessesRemaining = 7;
var correctGuesses = 0;

$('#start').on("click", function() {
	$('#game-area').css('visibility', 'visible');
	$('#instructions').css('visibility', 'hidden');
});


$('#guesses-remaining').append(guessesRemaining);
$('#correct-guesses').append(correctGuesses);

var words = ["jedi", "lukeskywalker", "lightsaber", "chewbacca", "darthvader", "stormtrooper", "bobafett", "darthmaul"];

// get word at random from array above

var word = words[Math.floor(Math.random() * words.length)];




// The code below converst the word which is a sting into an array of each of its chars	
word = word.split("");

console.log(word);



$.each(word, function(index, value) {
	$('#word').append("<div class='letter'> <div id='letter-" + index + "'> " + value + " </div></div>" );
	$('[id^=letter').css("visibility", "hidden");            //           
	
 });







// $.each(function(word, index) {
//	console.log (index + " ");
//});

//var letterSelect = ('.letter').find('[data-value="a"]').hide();


//$('[data-letter="o"]').css("color:","red");   

var indexNums = [] ;
var correctGuesses = 0; 

document.onkeyup = function(event) {

 var userChoice = event.key;

  //  var index = word.indexOf(userChoice);
	console.log(event.key);

 if (word.indexOf(userChoice) === -1 ) {

 	console.log('Incorrect Guess');
 	guessesRemaining--;
	$('#guessesRemaining').html('Guesses Remaining: ' + guessesRemaining);

	if (guessesRemaining === 0 ) {
		$('#gameStatus').html('Do or do not. There is no try.   You Lost!!!!');
	}

 };

for (i=0; i< word.length ; i++) {
	
	if (userChoice === word[i]) {
		console.log("I just found the letter.  It is located at index" + i );
		indexNums.push(i);
		correctGuesses++;
		console.log("correctGuesses:" + correctGuesses);
		$('#correctGuesses').html('Correct Guesses' + correctGuesses);
		
		$('#letter-'+ i).css("visibility", "visible");
		$('#letter-' +i).parent().css("background", "none");

		if (correctGuesses == word.length) {
			$('#gameStatus').html('The Force is strong with you young Jedi.  You have won this time');
		} 

		
	}; 
};

$.each(indexNums, function(index, element){
	console.log(element);        
      

});



	
  };    // end of document key up function 
	

});  // end of file  document ready
//	if (userChoice.indexOf(word) === -1) {
//		document.write ("You need to focus young Jedi.  Your guess was not correct");
//		chancesRemaining --;
//	} else {
//		document.write("The force is strong with you.  Your guess was correct");
	



 //};


// put the below code into a function called  result().     
//if (chancesRemaining === 0 ) {
//	document.write ('Hang man is coming.  You lost');
//} else if (correctAnswers === word.length) {
//	document.write ('May the force be with you.  You have avoided the carbon freeze')
//} else {

//};


// -  Tell player to press any key


// -   Select a word at random from an array  -->	select a random #  Then use that number to get word in the array 



// keep word hidden  using    _ _ _ _ _ _  

// -  Ask user to guess a letter 

   

 //-  If the letter is included in the word then reveal the hidden letter
	
 //-  If the letter is not included in the word then add a body part to the screen
 //   if the number of incorrect guesses equals the total number of body parts then all the body parts are reveled and user player lost the game.

//	keep looping until user wins or loses
 
 //   - If the user guesses the complete word then show firework gif

 //     - play we are the champions

 //      Then show a picture of the word
 

// If user loses play  Hangmans coming and you have very long....   


//Ask user if they want to play again 

//	if yes them reset variables and start over

//	if no then tell user "Thanks for playing"




//   Game  --->  calls functions

//  startGame();     // initialize game   set all var to inital value 

//  getWord();     // Selects a word at random from an array of words
// userTurn();       // gets user guess   

// doesGuessMatch();  // checks to see if the the user's gueess of letter is in the 

// updateRemainingGuesses();    // loweres the remmaining guuesses if an incorrect answer is guessed

// playMusic();    // plays music

// showAnswer();   // Reveals all the hidden letters

// 