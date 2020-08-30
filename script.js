const TIMER = document.querySelector(".timer");
const STARTBUTTON = document.querySelector("#start");
const STOPBUTTON = document.querySelector("#stop");

var timerRunning = false;
var interval;
var timer = 60;

//
function runTimer(){
    TIMER.innerHTML = --timer;
    // let currentTime = timer;
    // TIMER.innerHTML = currentTime;
    
}

//
function start(){
    timerRunning = true;
    TIMER.innerHTML = timer;
    interval = setInterval(runTimer, 1000);
    STOPBUTTON.removeAttribute("hidden");
    STARTBUTTON.replaceWith(STOPBUTTON);
}

//
function stop(){
    timerRunning = false;
    clearInterval(interval);
    STOPBUTTON.replaceWith(STARTBUTTON);
}

STARTBUTTON.addEventListener("click", start, false);
STOPBUTTON.addEventListener("click", stop, false);