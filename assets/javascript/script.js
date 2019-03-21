
$(document).ready(function () {


// Setting the random value for number goal.
	var compChoice = Math.floor(Math.random() * 120) + 19;
	$(".numGoal").html("Goal: " + compChoice);


// Setting the random values for each crystal.
	var gemOne = Math.floor(Math.random() * 12) + 1;
	$("#img1").html("<img src=" + "assets/images/img1.png" + " value=" + gemOne + ">");

	var gemTwo = Math.floor(Math.random() * 12) + 1;
	$("#img2").html("<img src=" + "assets/images/img2.png" + " value=" + gemTwo + ">");

	var gemThree = Math.floor(Math.random() * 12) + 1;
	$("#img3").html("<img src=" + "assets/images/img3.png" + " value=" + gemThree + ">");

	var gemFour = Math.floor(Math.random() * 12) + 1;
	$("#img4").html("<img src=" + "assets/images/img4.png" + " value=" + gemFour + ">");

	var wins = 0;
	var losses = 0;
	var score = 0;

// Initializing game on load.
$("img").on("click", function () {
	var newScore = score += parseInt($(this).attr("value"));
	$(".userScore").html(newScore);

	if (newScore === compChoice) {
		wins++;
		$(".wins").html("Wins: " + wins);
		alert("Congratulations! You Won!");
		reset();
	}

	else if (newScore > compChoice) {
		losses++;
		$(".losses").html("Losses: " + losses);
		alert("Womp Womp! You lost... :(");
		reset();
	}

});

// Resets entire game after win or loss. 
	function reset() {
		compChoice = Math.floor(Math.random() * 120) + 19;
		$(".numGoal").html("Goal: " + compChoice);

		score = 0;
		$(".userScore").html(score);

		gemOne = Math.floor(Math.random() * 12) + 1;
		$("#img1").html("<img src=" + "assets/images/img1.png" + " value=" + gemOne + ">");

		gemTwo = Math.floor(Math.random() * 12) + 1;
		$("#img2").html("<img src=" + "assets/images/img2.png" + " value=" + gemTwo + ">");

		gemThree = Math.floor(Math.random() * 12) + 1;
		$("#img3").html("<img src=" + "assets/images/img3.png" + " value=" + gemThree + ">");

		gemFour = Math.floor(Math.random() * 12) + 1;
		$("#img4").html("<img src=" + "assets/images/img4.png" + " value=" + gemFour + ">");

		$("img").on("click", function () {
			var newScore = score += parseInt($(this).attr("value"));
			$(".userScore").html(newScore);

			if (newScore === compChoice) {
				wins++;
				$(".wins").html("Wins: " + wins);
				alert("Congratulations! You Won!");
				reset();
			}

			else if (newScore > compChoice) {
				losses++;
				$(".losses").html("Losses: " + losses);
				alert("Womp Womp! You lost... :(");
				reset();
			}
		});
	}
}); 
