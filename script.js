// const TIMER = document.querySelector(".timer");
const STARTBUTTON = document.querySelector("#start");
const RESETBUTTON = document.querySelector("#reset");
const SECONDS = document.querySelector("#seconds");
const PROGRESSBAR = document.querySelector("#progress")
const ALERT = document.querySelector(".alert")

var timerStopped = false;
var interval;
var timer = 0;

//
function runTimer(){
    // if(timer > 0) TIMER.innerHTML = --timer;
    if(timer > 0) --timer;
    PROGRESSBAR.value = timer;
    if(timer == 0) ALERT.innerHTML = "ALERT!";
}

//
function start(){
    timer = SECONDS.value;
    PROGRESSBAR.value = timer;
    PROGRESSBAR.max = timer;
    // TIMER.innerHTML = timer;
    interval = setInterval(runTimer, 1000);
    RESETBUTTON.removeAttribute("hidden");
    STARTBUTTON.replaceWith(RESETBUTTON);
}

//
function reset(){
    timerStopped = false;
    clearInterval(interval);
    timer = SECONDS.value;
    // TIMER.innerHTML = timer;
    PROGRESSBAR.value = timer;
    RESETBUTTON.replaceWith(STARTBUTTON);
    ALERT.innerHTML = "";

}

STARTBUTTON.addEventListener("click", start, false);
RESETBUTTON.addEventListener("click", reset, false);