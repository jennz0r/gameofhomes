// define results object to display user result
// define possible answers array based on users' answers

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

var possibleAnswers = [];

// define function to fade current question
// and scroll to next question
// if at the end of the quiz, display the result instead.

var scrollNext = function (currentQuestion) {
	var questionNumber = parseInt(currentQuestion[2]);
	nextQuestionNumber = questionNumber + 1;
	var aTag = $("a[name='" + nextQuestionNumber +"']");
	var totalAnswers = getTotalAnswers(results);
	$('#' + currentQuestion).fadeTo(1000, 0.5, function() {
		if (totalAnswers < 8) {
			if (questionNumber <= 7) {
				$('html,body').animate({
					scrollTop: aTag.offset().top
				}, 1500);
				return false;
			}
			else if (questionNumber == 8) {
				$('#forgot').css("display","block");
				$('html,body').animate({
					scrollTop: $('a[name="answer"]').offset().top
				}, 1500);
			}
		}
		else if (totalAnswers == 8) {
			getMax();
			var answerResultId = possibleAnswers[Math.floor(Math.random()*possibleAnswers.length)];
			$('#forgot').css("display","none");
			$('#resultsTitle').css("display","block");
			$('#' + answerResultId).css("display","block");
			$('html,body').animate({
				scrollTop: $('a[name="answer"]').offset().top
			}, 1500);
		}
	});
}

// find max value from results object

var getMax = function () {
	var keyArray = Object.keys(results);
	var valueArray = keyArray.map( function(key) {
		return results[key];
	});
	var maxValue = Math.max.apply(null, valueArray);
	getKeyByValue(results, maxValue);
}

// find key associated with value
// push key to answer array

var getKeyByValue = function(object, value) {
    for (var prop in object) {
        if (object[prop] === value) {
        	possibleAnswers.push(prop);
        }
    }
}

// get total number of answers (from results array)

var getTotalAnswers = function(object) {
	var sum = 0;
	for (var prop in object) {
		sum += object[prop];
	}
	return sum;
}

// click handlers to add points to results object

$(".questions li").click( function(e) {
	var answerId = $(this).attr("id");
	var questionId = this.parentNode.id;
	var answer = answerId.substring(4, answerId.length);
	results[answer]++;
	scrollNext(questionId);
});

// Fade out Hackweek, fade in content

$(document).ready( function() {
	$('#winter').fadeOut(2000);
	setTimeout(function() {
		$('#content').fadeIn(5000);
	}, 2000);
});