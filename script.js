const TIMER = document.querySelector(".timer");
const STARTBUTTON = document.querySelector("#start");
const RESETBUTTON = document.querySelector("#reset");
const SECONDS = document.querySelector('#seconds');

var timerStopped = false;
var interval;
var timer = 0;

//
function runTimer(){
    if(timer > 0) TIMER.innerHTML = --timer;
}

//
function start(){
    timer = SECONDS.value;
    TIMER.innerHTML = timer;
    interval = setInterval(runTimer, 1000);
    RESETBUTTON.removeAttribute("hidden");
    STARTBUTTON.replaceWith(RESETBUTTON);
}

//
function reset(){
    timerStopped = false;
    clearInterval(interval);
    timer = 0;
    TIMER.innerHTML = timer;
    RESETBUTTON.replaceWith(STARTBUTTON);
}

STARTBUTTON.addEventListener("click", start, false);
RESETBUTTON.addEventListener("click", reset, false);