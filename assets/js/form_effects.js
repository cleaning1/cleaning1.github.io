var bedroomCountEl = document.getElementById("bedroomCount");
var bedroomMoins = document.getElementById("bedroomMoins");
var bedroomPlus = document.getElementById("bedroomPlus");
var bathroomCountEl = document.getElementById("bathroomCount");
var bathroomMoins = document.getElementById("bathroomMoins");
var bathroomPlus = document.getElementById("bathroomPlus");
var hourCountEl = document.getElementById("hourCount");
var hourMoins = document.getElementById("hourMoins");
var hourPlus = document.getElementById("hourPlus");

var bedroomCountPosition = $('#bedroomCount').position();
var bedroomPx = parseInt(bedroomCountPosition.left, 10) + 'px';
var bathroomCountPosition = $('#bathroomCount').position();
var bathroomPx = parseInt(bathroomCountPosition.left, 10) - 1 + 'px';
var hourCountPosition = $('#hourCount').position();
var hourPx = parseInt(hourCountPosition.left, 10) - 6 + 'px';

$('#bedroomHeading').css('paddingLeft', bedroomPx);
$('#bathroomHeading').css('paddingLeft', bathroomPx);
$('#hourHeading').css('paddingLeft', hourPx);

plusMinusInput(bedroomPlus, bedroomMoins, bedroomCountEl); 
plusMinusInput(bathroomPlus, bathroomMoins, bathroomCountEl); 
plusMinusInput(hourPlus, hourMoins, hourCountEl); 

//datepicker calendar

$(function() {
  $( "#datepicker" ).datepicker({ firstDay: 1, minDate: 1 });
});

// ==========================




$( ".sq-form" ).keypress(function( event ) {
	var numbers = (event.which >= 48) && (event.which <= 57);
	if (!numbers) {
        event.preventDefault();
  }
});

function plusMinusInput(p, m, e) {

	m.addEventListener("click", function() {
	    minus(e);
	});

	p.addEventListener("click", function() {
	    plus(e);
	});

}

function plus(e){
    var count = parseInt(e.value, 10) + 1;
    e.value = count;
} 

function minus(e){
	var count = parseInt(e.value, 10) - 1;
	if (count >= 0) {
        e.value = count;
	}
}

