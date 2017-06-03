
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
		"You are Hiking in the mountains when a Grizzly Bear attacks, luckily you are a seasoned adventurer and know just what to do!  You know the best way to handle a rouge bear is to...",
		"back away slowely, and calmly",
		"yell racial slurs",
		"try reasoning with him or her",
		"welcome death with open arms"
		);

	var question2 = triviaQuestion(
		"This space will consist of a trivia question",
		"correct answer",
		"wrong answer",
		"wrong answer",
		"wrong answer",
		);

	var question3 = triviaQuestion(
		"This space will consist of a trivia question",
		"correct answer",
		"wrong answer",
		"wrong answer",
		"wrong answer",
		);

	var question4 = triviaQuestion(
		"This space will consist of a trivia question",
		"correct answer",
		"wrong answer",
		"wrong answer",
		"wrong answer",
		); 

var questionArray = [question1, question2, question3, question4];

var gameStart = function() {
	$(".jumbotron").hide();
	$("#gameContainer").show();
	setInterval(timer, 1*1000);
	
}


var gameOver = function() {
	alert("game over");
	$("#endScreen").show();
	$("#gameContainer").hide();
	timeRemaining = 60;
}


var timer = function() {
		timeRemaining--;
		console.log(timeRemaining);
		$("#timer").text(timeRemaining);

}

var setQuestion = function() {
	$("#questionSpace").text(question1.question);
	$("#option1").text(question1.correctAnswer);
	$("#option2").text(question1.wrongAnswer1);
	$("#option3").text(question1.wrongAnswer2);
	$("#option4").text(question1.wrongAnswer3);
}

var newQuestion = function() {
	$("#questionSpace").text(questionArray[0].question);
	$("#option1").text(question2.correctAnswer);
	$("#option2").text(question2.wrongAnswer1);
	$("#option3").text(question2.wrongAnswer2);
	$("#option4").text(question2.wrongAnswer3);
}








// Main Process
// ----------------------------------------------------------------

$("#gameContainer").hide();
$("#endScreen").hide();

$(".startButton").on("click", function() {
	gameStart();
	setTimeout(gameOver, 60*1000);
	setQuestion();
});

$(".answerButton").on("click", function() {
	newQuestion();
});





});