
$(document).ready(function() {

// Global Variables
// ----------------------------------------------------------------

var timeRemaining = 60;







// Functions
// ----------------------------------------------------------------


function triviaQuestion(question, correctAnswer, wrongAnswer1, wrongAnswer2, wrongAnswer3) {
	var question = {
		question: question,
		correctAnswer: correctAnswer,
		wrongAnswer1: wrongAnswer1,
		wrongAnswer2: wrongAnswer2,
		wrongAnswer3: wrongAnswer3,
	}
	return question;
}

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

var questionArray = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10 ];



var gameStart = function() {
	$(".jumbotron").hide();
	$("#gameContainer").show();
	setInterval(timer, 1*1000);
	setTimeout(gameOver, 60*1000);
	timeRemaining = 60;
}

var gameOver = function() {
	alert("game over");
	$("#endScreen").show();
	$("#gameContainer").hide();
	// timeRemaining = 60;
	timer.clearInterval();
}

var timer = function() {
		timeRemaining--;
		// console.log(timeRemaining);
		$("#timer").text(timeRemaining);

}

var setQuestion = function() {
	$("#questionSpace").text(question1.question);
	$("#answer1").text(question1.correctAnswer);
	$("#answer2").text(question1.wrongAnswer1);
	$("#answer3").text(question1.wrongAnswer2);
	$("#answer4").text(question1.wrongAnswer3);
}

var newQuestion = function() {
	$("#questionSpace").text(questionArray[1].question);
	$("#answer1").text(question2.correctAnswer);
	$("#answer2").text(question2.wrongAnswer1);
	$("#answer3").text(question2.wrongAnswer2);
	$("#answer4").text(question2.wrongAnswer3);
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





});