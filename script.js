const STARTBUTTON = document.querySelector("#start");
const RESETBUTTON = document.querySelector("#reset");
const SECONDS = document.querySelector("#seconds");
const BAR = document.querySelector(".bar")
const ALERT = document.querySelector(".alert");

var interval;
var max;
var timer = 0;


// simple alert sound
function alarmSound() {
    var audio = new Audio('pluck.mp3');
    audio.play();
}

// timer is illustrated by CSS based progress bar
// alert sound plays and alert text appears when timer == 0
function runTimer(){
    if(timer > 0) --timer;
    BAR.style.width = (timer/max)*100 + "%";
    if(timer == 0){
        ALERT.innerHTML = "ALERT!";
        alarmSound();
        timer--;
    }
}

// starts the timer
// replaces start button with reset button
function start(){
    timer = SECONDS.value;
    max = timer;
    interval = setInterval(runTimer, 1000);
    RESETBUTTON.removeAttribute("hidden");
    STARTBUTTON.replaceWith(RESETBUTTON);
}

// stops the timer
// replaces reset button with start button
// clears alert text
function reset(){
    clearInterval(interval);
    timer = SECONDS.value;
    BAR.style.width = "100%";
    RESETBUTTON.replaceWith(STARTBUTTON);
    ALERT.innerHTML = "";
}

STARTBUTTON.addEventListener("click", start, false);
RESETBUTTON.addEventListener("click", reset, false);