
$(document).ready(function() {

// Global Variables
// ----------------------------------------------------------------

var timeRemaining = 60;

var selectedAnswer;

var numCorrect = 0;
var numIncorrect = 0;







// Functions
// ----------------------------------------------------------------

//function to create question criteria
function triviaQuestion(question, answerOption1, answerOption2, answerOption3, answerOption4) {
	var question = {
		question: question,
		answerOption1: answerOption1,
		answerOption2: answerOption2,
		answerOption3: answerOption3,
		answerOption4: answerOption4,
	}
	return question;
}
	
	// these variables hold the question data
	var question1 = triviaQuestion(
		"Which one of these was NOT one of the thirteen original colonies?",
		"Maine",
		"Deleware",
		"New Hampshire",
		"Georgia"
		);

	var question2 = triviaQuestion(
		"Who is the Cheif Justice of the United States now?",
		"John Roberts",
		"Rex Tillerson",
		"James Mattis",
		"Jeff Sessions",
		);

	var question3 = triviaQuestion(
		"When was the constitution written?",
		"1787",
		"1776",
		"1783",
		"1795",
		);

	var question4 = triviaQuestion(
		"What territory did the Unites States buy from France in 1803?",
		"Louisiana",
		"Northwest",
		"California",
		"Mississippi",
		);

	var question5 = triviaQuestion(
		"Before he was president, Eissenhower was a general.  What war did he fight in?",
		"World War II",
		"Korean War",
		"World War I",
		"Vietnam War ",
		); 

	var question6 = triviaQuestion(
		"How many amendements does the constitution have?",
		"Twenty Seven (27)",
		"Ten (10)",
		"Thirteen (13)",
		"Twenty Three (23)",
		); 

	var question7 = triviaQuestion(
		"How many Justices are on the Supreme Court?",
		"Nine (9)",
		"Thirteen (13)",
		"Three (3)",
		"Seven (7)",
		); 

	var question8 = triviaQuestion(
		"Who wrote the Decleration of Independence?",
		"Thomas Jefferson",
		"Alexander Hamilton",
		"John Hancock",
		"John Adams",
		);

	var question9 = triviaQuestion(
		"If both the President, and the Vice President can no longer serve, who becomes President?",
		"The Speaker of the House",
		"Secretary of State",
		"Secretary of Defense",
		"Attorney General",
		); 

	var question10 = triviaQuestion(
		"The House of Representatives has how many voting members?",
		"Four Hundred Thirty-Five (435)",
		"One Hundred (100)",
		"Four Hundred Fifteen (415)",
		"Two HUndred Thirty Seven (237)",
		);  

// array of all the trivia questions
var questionArray = [ question1, question2, question3, 
					  question4, question5, question6, 
					  question7, question8, question9, 
					  question10 ];

// function to check if user answer is correct
var userAnswer = function(selectedAnswer) {
	if (selectedAnswer === "answer1") {
		alert("correct answer");
		numCorrect++;
	}

	else {
		alert("wrong answer");
		numIncorrect++;
	}
}


// function to start game, and start timers
var gameStart = function() {
	$(".jumbotron").hide();
	$("#gameContainer").show();
	setInterval(timer, 1*1000);
	setTimeout(gameOver, 60*1000);
	timeRemaining = 60;
}

// function to take you to end screne
// also need to display final score
var gameOver = function() {
	alert("game over");
	$("#endScreen").show();
	$("#gameContainer").hide();
	timeRemaining = 60;
	clearInterval(timer);
	$("#correctGuesses").text(numCorrect);
	$("#incorrectGuesses").text(numIncorrect);
}

// function to display time on screen
var timer = function() {
		timeRemaining--;
		// console.log(timeRemaining);
		$("#timer").text(timeRemaining);

}

var setQuestion = function() {
	$("#questionSpace").text(question1.question);
	$("#answer1").text(question1.answerOption1);
	$("#answer2").text(question1.answerOption2);
	$("#answer3").text(question1.answerOption3);
	$("#answer4").text(question1.answerOption4);
}

var newQuestion = function() {
	$("#questionSpace").text(questionArray[1].question);
	$("#answer1").text(question2.answerOption1);
	$("#answer2").text(question2.answerOption2);
	$("#answer3").text(question2.answerOption3);
	$("#answer4").text(question2.answerOption4);
}





// Main Process
// ----------------------------------------------------------------

$("#gameContainer").hide();
$("#endScreen").hide();

$(".startButton").on("click", function() {
	gameStart();
	setQuestion();
});

$(".retryButton").on("click", function() {
	gameStart();
	setQuestion();
});

$(".answerButton").on("click", function() {
	newQuestion();
});

$("#question>.answerButton").click(function(event) {
    userAnswer(event.currentTarget.id);
    alert(event.currentTarget.id);

});





});