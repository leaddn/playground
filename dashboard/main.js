var player = document.querySelector('#audioPlayer');

/* =================Timer====================== */

// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="timer"
  document.getElementById("timer").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);

/* =================== Clock ================ */

var myVar = setInterval(myTimer, 1000);

function myTimer() {
  var d = new Date();
  document.getElementById("clock").innerHTML = d.toLocaleTimeString();
}

/*================== Chrono ================ */
var begin_button = document.getElementById("begin_button");

var timeleft = 10;
begin_button.onclick = function start(){
    setInterval(function(){
        for(timeleft; timeleft>0; timeleft--){
            
            document.getElementById("demo").innerHTML = timeleft + " seconds remaining";
        }
        document.getElementById("demo").innerHTML = "Finished";
        clearInterval(downloadTimer);
    
    }, 1000);
}

