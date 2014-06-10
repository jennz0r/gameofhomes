// define results object to display user result

var results = {
	"SV" : 0,
	"Mission": 0,
	"Sunset": 0,
	"GGPark": 0,
	"Twin": 0,
	"SOMA": 0,
	"FiDi": 0,
	"Tenderloin": 0,
	"Presidio": 0,
	"Castro": 0,
	"Dogpatch": 0,
	"Oakland": 0
};

// define function to scroll to next question

var scrollNext = function (currentQuestion) {
	var questionNumber = parseInt(currentQuestion[2]);
	questionNumber += 1;
	var aTag = $("a[name='" + questionNumber +"']");
	$(document.getElementById(currentQuestion)).fadeTo(1000, 0.5, function() {
		$('html,body').animate({
			scrollTop: aTag.offset().top
		}, 1000);
		return false;
	});
}

// click handlers to add points to results object

$(".questions li").click( function() {
	var answerId = $(this).attr("id");
	var questionId = this.parentNode.id;
	var answer = answerId.substring(4, answerId.length);
		if (answer == "wall") {
			results.SV += 1;
		}
		else if (answer == "winterfell") {
			results.Mission += 1;
		}
		else if (answer == "pyke") {
			results.Sunset += 1;
		}
		else if (answer == "riverrun") {
			results.GGPark += 1;
		}
		else if (answer == "eyrie") {
			results.Twin += 1;
		}
		else if (answer == "dragonstone") {
			results.SOMA += 1;
		}
		else if (answer == "casterly") {
			results.FiDi += 1;
		}
		else if (answer == "king") {
			results.Tenderloin += 1;
		}
		else if (answer == "storm") {
			results.Presidio += 1;
		}
		else if (answer == "highgarden") {
			results.Castro += 1;
		}
		else if (answer == "dorne") {
			results.Dogpatch += 1;
		}
		else if (answer == "essos") {
			results.Oakland += 1;
		}
	scrollNext(questionId);
});

// find max value from results object

var getMax = function () {
	var keyArray = Object.keys(results);
	var valueArray = keyArray.map( function(key) {
		return results[key];
	});
	var maxValue = Math.max.apply(null, valueArray);
	console.log(maxValue);
}

// Fade out Hackweek, fade in content

// $(document).ready( function() {
// 	$('#winter').fadeOut(2000);
// 	setTimeout(function() {
// 		$('#content').fadeIn(5000);
// 	}, 2000);
// });