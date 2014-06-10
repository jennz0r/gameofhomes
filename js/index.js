$(document).ready( function() {
	$('#winter').fadeOut(2000);
	setTimeout(function() {
		$('#content').fadeIn(5000);
	}, 2000);
});


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

var scrollNext = function () {
	var currentid = this.id;
}

// click handlers to add points to results object

$(".characters li").click( function() {
	var id = $(this).attr("id");
	results.SV += 1;
	scrollNext();
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