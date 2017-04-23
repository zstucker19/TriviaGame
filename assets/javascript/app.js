
var right = 0;
var wrong = 0;
var unanswered = 10;
var timeLeft = 120;
var intervalId;



$(".btn").attr("data-isClicked", "false");



function countdown() {
	intervalId = setInterval(decrement, 1000);
}



function decrement() {
	timeLeft--;
	$("#timeRemaining").html(timeLeft);

		if(timeLeft === 0) {
			end();
		}
	}


function end() {
	$("body").html("<h1> Correct: " + right + 
		"<br> <h1> Incorrect: " + wrong +
		"<br> <h1>Unanswered: " + unanswered + 
		"<br><button id='resetbtn' type='button' class='btn btn-default'>Reset</button>"
	);

	$("#resetbtn").on("click", function() {
	location.reload();
});
}


countdown();


$("#timeRemaining").html(timeLeft);



$(".btn").on("click", function(){


var shortTermThis = $(this).attr("data-isClicked");



if(shortTermThis === "false") {

	$(this).attr("data-isClicked", "true");


	var value = $(this).val();
	if(value === "correct") {
		right++;
		unanswered--;
	} else  {
		wrong++;
		unanswered--;
	}
	$("#correctCount").html(right);
	$("#incorrectCount").html(wrong);
	$("#unansweredCount").html(unanswered);


	if(unanswered === 0) {
		end();
	}
}




});

