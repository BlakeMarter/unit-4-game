
$(document).ready(function () {


// Setting the random value for number goal.
	var compPick = Math.floor(Math.random() * 102) + 19;
	$(".randomNumber").html("Goal: " + compPick);


// Setting the random values for each crystal.
	var gemOne = Math.floor(Math.random() * 12) + 1;
	$("#img1").html("<img src=" + "assets/images/image1.1.png" + " value=" + gemOne + ">");

	var gemTwo = Math.floor(Math.random() * 12) + 1;
	$("#img2").html("<img src=" + "assets/images/image2.1.png" + " value=" + gemTwo + ">");

	var gemThree = Math.floor(Math.random() * 12) + 1;
	$("#img3").html("<img src=" + "assets/images/image3.1.png" + " value=" + gemThree + ">");

	var gemFour = Math.floor(Math.random() * 12) + 1;
	$("#img4").html("<img src=" + "assets/images/image4.1.png" + " value=" + gemFour + ">");

	var wins = 0;

	var losses = 0;

	var score = 0;

// Resets entire game after win or loss. 
	function reset() {
		compPick = Math.floor(Math.random() * 102) + 19;
		$(".randomNumber").html("Goal: " + compPick);

		score = 0;
		$(".scoreDisplay").html(score);

		gemOne = Math.floor(Math.random() * 12) + 1;
		$("#img1").html("<img src=" + "assets/images/image1.1.png" + " value=" + gemOne + ">");

		gemTwo = Math.floor(Math.random() * 12) + 1;
		$("#img2").html("<img src=" + "assets/images/image2.1.png" + " value=" + gemTwo + ">");

		gemThree = Math.floor(Math.random() * 12) + 1;
		$("#img3").html("<img src=" + "assets/images/image3.1.png" + " value=" + gemThree + ">");

		gemFour = Math.floor(Math.random() * 12) + 1;
		$("#img4").html("<img src=" + "assets/images/image4.1.png" + " value=" + gemFour + ">");

		$("img").on("click", function () {
			var newScore = score += parseInt($(this).attr("value"));
			$(".scoreDisplay").html(newScore);

			if (newScore === compPick) {
				wins++;
				$(".wins").html("Wins: " + wins);
				alert("Congratulations! You Won!");
				reset();
			}

			else if (newScore > compPick) {
				losses++;
				$(".losses").html("Losses: " + losses);
				alert("Womp Womp! You lost... :(");
				reset();
			}
		});
	}
// Initializing game on load.
	$("img").on("click", function () {
		var newScore = score += parseInt($(this).attr("value"));
		$(".scoreDisplay").html(newScore);

		if (newScore === compPick) {
			wins++;
			$(".wins").html("Wins: " + wins);
			alert("Congratulations! You Won!");
			reset();
		}

		else if (newScore > compPick) {
			losses++;
			$(".losses").html("Losses: " + losses);
			alert("Womp Womp! You lost... :(");
			reset();
		}

	});

}); 
