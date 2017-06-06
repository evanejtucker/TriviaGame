
$(document).ready(function() {

// Global Variables
// ----------------------------------------------------------------

var timeRemaining = 20;
var intervalId;
var timeoutId;

var selectedAnswer;

var numCorrect = 0;
var numIncorrect = 0;



// Functions
// ----------------------------------------------------------------
function randomOrder (arr) {
  return arr.sort(function (a, b) {
    var num = Math.random()
    if (num == .5) return 0
    if (num < .5) return -1
    return 1
  })
}

console.log(randomOrder([1,2,3]))

//function to create question criteria
function triviaQuestion(question, answers) {
	var question = {
		question: question,
    correct: answers[0],
    answers: randomOrder(answers)
	}
	return question;
}

	// these variables hold the question data
	var question1 = triviaQuestion(
		"Which one of these was NOT one of the thirteen original colonies?",
		["Maine","Deleware","New Hampshire","Georgia"]
		);

	var question2 = triviaQuestion(
		"Who is the Cheif Justice of the United States now?",
		["John Roberts","Rex Tillerson","James Mattis","Jeff Sessions"]
		);

	var question3 = triviaQuestion(
		"When was the constitution written?",
		["1787","1776","1783","1795"]
		);

	var question4 = triviaQuestion(
		"What territory did the Unites States buy from France in 1803?",
		["Louisiana","Northwest","California","Mississippi"]
		);

	var question5 = triviaQuestion(
		"Before he was president, Eissenhower was a general.  What war did he fight in?",
		["World War II","Korean War","World War I","Vietnam War "]
  );

	var question6 = triviaQuestion(
		"How many amendements does the constitution have?",
		["Twenty Seven (27)","Ten (10)","Thirteen (13)","Twenty Three (23)"]
	);

	var question7 = triviaQuestion(
		"How many Justices are on the Supreme Court?",
		["Nine (9)","Thirteen (13)","Three (3)","Seven (7)"]
		);

	var question8 = triviaQuestion(
		"Who wrote the Decleration of Independence?",
		["Thomas Jefferson","Alexander Hamilton","John Hancock","John Adams"]
		);

	var question9 = triviaQuestion(
		"If both the President, and the Vice President can no longer serve, who becomes President?",
		["The Speaker of the House","Secretary of State","Secretary of Defense","Attorney General"]
		);

	var question10 = triviaQuestion(
		"The House of Representatives has how many voting members?",
		["Four Hundred Thirty-Five (435)","One Hundred (100)","Four Hundred Fifteen (415)","Two HUndred Thirty Seven (237)"]
		);

// array of all the trivia questions
var questionArray = [ question1, question2, question3,
					  question4, question5, question6,
					  question7, question8, question9,
					  question10 ];

// function to check if user answer is correct
var userAnswer = function(selectedId) {
  var selectedAnswer = $('#'+selectedId).text()

	if (selectedAnswer === questionArray[currentQuestion].correct) {

		alert("Correct!");
		numCorrect++;
	}

	else {
		alert("correct answer: " + questionArray[currentQuestion].correct);
	}
}


var timerId = setTimeout(function () {

}, 1000)


// function to start game, and start timers
var gameStart = function() {
	$(".jumbotron").hide();
	$("#gameContainer").show();
}

// function to take you to end screne
// also need to display final score
var gameOver = function() {
	alert("game over");
	$("#endScreen").show();
	$("#gameContainer").hide();
	$("#correctGuesses").text(numCorrect);
	$("#incorrectGuesses").text(questionArray.length - numCorrect);
}

// function to display time on screen
var timer = function() {
		timeRemaining--;
		// console.log(timeRemaining);
		$("#timer").text(timeRemaining);

}

var setQuestion = function(question) {
	$("#questionSpace").text(question.question);

  for (var i = 0; i < question.answers.length; i++) {
    $("#answer" + (i + 1)).text(question.answers[i]);
  }

  intervalId = setInterval(timer, 1*1000);
	timeoutId = setTimeout(newQuestion, 20*1000);
	timeRemaining = 20;
}

var newQuestion = function() {
  clearInterval(intervalId);
  clearTimeout(timeoutId);

  currentQuestion++;
  if (questionArray[currentQuestion]) {
    setQuestion(questionArray[currentQuestion]);
  } else {
    gameOver();
  }
}





// Main Process
// ----------------------------------------------------------------

var currentQuestion = 0
$("#gameContainer").hide();
$("#endScreen").hide();


$(".startButton").on("click", function() {
	gameStart();
	setQuestion(questionArray[currentQuestion]);
});


$(".retryButton").on("click", function() {
	gameStart();
	setQuestion();
});


$("#question>.answerButton").click(function(event) {
    // alert(questionArray[currentQuestion].correct);
    // console.log(event)
    userAnswer(event.currentTarget.id);
    newQuestion();
});





});
