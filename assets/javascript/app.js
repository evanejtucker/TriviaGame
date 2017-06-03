
$(document).ready(function() {

// Global Variables
// ----------------------------------------------------------------








// Functions
// ----------------------------------------------------------------

var gameStart = function() {
	$(".jumbotron").hide();
	$("#gameContainer").show();
	setTimeout(gameOver, 60*1000);
}



var gameOver = function() {
	alert("game over");
	$("#endScreen").show();
	$("#gameContainer").hide();
}








// Main Process
// ----------------------------------------------------------------

$("#gameContainer").hide();
$("#endScreen").hide();

$(".startButton").on("click", function() {
	gameStart();
});





});