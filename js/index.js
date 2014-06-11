// define results object to display user result

var results = {
	"wall" : 0,
	"winterfell": 0,
	"pyke": 0,
	"riverrun": 0,
	"eyrie": 0,
	"dragonstone": 0,
	"casterly": 0,
	"king": 0,
	"storm": 0,
	"highgarden": 0,
	"dorne": 0,
	"essos": 0
};

// define function to scroll to next question

var scrollNext = function (currentQuestion) {
	var questionNumber = parseInt(currentQuestion[2]);
	questionNumber += 1;
	var aTag = $("a[name='" + questionNumber +"']");
	$(document.getElementById(currentQuestion)).fadeTo(1000, 0.5, function() {
		if (questionNumber < 6) {
			$('html,body').animate({
				scrollTop: aTag.offset().top
			}, 1500);
			return false;
		}
		else if (questionNumber == 6) {
			console.log("show the results!");
		}
	});
}

// click handlers to add points to results object

$(".questions li").click( function() {
	var answerId = $(this).attr("id");
	var questionId = this.parentNode.id;
	var answer = answerId.substring(4, answerId.length);
	results[answer]++;
	scrollNext(questionId);
	getMax();
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

$(document).ready( function() {
	$('#winter').fadeOut(2000);
	setTimeout(function() {
		$('#content').fadeIn(5000);
	}, 2000);
});