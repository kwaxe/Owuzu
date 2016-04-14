
// //Displays the date
// document.getElementById("date").innerHTML = Date();

// //Sets the date deadline 
// var deadLine = "2016-04-06";

// function getTimeRemaining (endTime) {

// 	var total = Date.parse(endTime) - Date.parse(new.Date());

// 	var sec = Math.floor((total/1000) % 60);

// 	var min = Math.floor((total/1000/60) % 60);

// 	var hrs = Math.floor((total)/(1000 * 60 * 60)) % 24);

// 	var days = Math.floor((total/(1000 * 60 * 60 * 24));

// 	return{
// 		"Total ":  total,
// 		"Days ": days,
// 		"hours ": hrs,
// 		"Minutes ": min,
// 		"Seconds ": sec
// 	};
// }

// //var time = Date.parse(endTime) - Date.parse(new Date());

// //getTimeRemaining(deadLine).min;

// function initializeClock(id, endTime){

// 	var clock = document.getElementById(id);

// 	var timeInterval = setInterval(function(){
		
// 		var time = getTimeRemaining(endTime);
		
// 		clock.innerHTML = "Days: " + time.days + "<br>" +
// 						  "Hours: " + time.hrs + "<br>" +
// 						  "Minutes: " + time.min + "<br>" +
// 						  "Seconds: " + time.sec + "<br>";
// 		if(time.total <= 0){
// 			clearInterval(timeInterval);
// 	}
// }

// updateClock();

// var timeInterval = setInterval(updateClock, 1000);

// initializeClock('clockdiv', deadLine);


// var daysSpan = clock.querySelector('.days');
// var hoursSpan = clock.querySelector('.hours');
// var minutesSpan = clock.querySelector('.minutes');
// var secondsSpan = clock.querySelector('.seconds');


// function updateClock(){

// 	var time = getTimeRemaining(endtime);

//     daysSpan.innerHTML = time.days;
//     hoursSpan.innerHTML = time.hours;
//     minutesSpan.innerHTML = time.minutes;
//     secondsSpan.innerHTML = time.seconds;

//     secondsSpan.innerHTML = ('0' + time.seconds).slice(-2);
// }


function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
initializeClock('clockdiv', deadline);


