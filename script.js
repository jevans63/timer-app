const STARTBUTTON = document.querySelector("#start");
const RESETBUTTON = document.querySelector("#reset");
const SECONDS = document.querySelector("#seconds");
const BAR = document.querySelector(".bar")
const ALERT = document.querySelector(".alert");

var timerStopped = false;
var interval;
var timer = 0;
var max;

// 
function alarmSound() {
    var audio = new Audio('pluck.mp3');
    audio.play();
}

//
function runTimer(){
    if(timer > 0) --timer;
    BAR.style.width = (timer/max)*100 + "%";
    if(timer == 0){
        ALERT.innerHTML = "ALERT!";
        alarmSound();
        timer--;
    }
}

//
function start(){
    timer = SECONDS.value;
    max = timer;
    interval = setInterval(runTimer, 1000);
    RESETBUTTON.removeAttribute("hidden");
    STARTBUTTON.replaceWith(RESETBUTTON);
}

//
function reset(){
    timerStopped = false;
    clearInterval(interval);
    timer = SECONDS.value;
    BAR.style.width = "100%";
    RESETBUTTON.replaceWith(STARTBUTTON);
    ALERT.innerHTML = "";
}

STARTBUTTON.addEventListener("click", start, false);
RESETBUTTON.addEventListener("click", reset, false);