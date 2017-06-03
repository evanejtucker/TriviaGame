
$(document).ready(function() {

// Global Variables
// ----------------------------------------------------------------

var timeRemaining = 61;






// Functions
// ----------------------------------------------------------------

var gameStart = function() {
	$(".jumbotron").hide();
	$("#gameContainer").show();
	setTimeout(gameOver, 60*1000);
	timer();
}



var gameOver = function() {
	alert("game over");
	$("#endScreen").show();
	$("#gameContainer").hide();
	timeRemaining = 61;
}


var timer = function() {
	for (i=60; i>=0; i--) {
		timeRemaining--;
		console.log(timeRemaining);
	}

}








// Main Process
// ----------------------------------------------------------------

$("#gameContainer").hide();
$("#endScreen").hide();


$(".startButton").on("click", function() {
	gameStart();
});





});