const TIMER = document.querySelector(".timer");
const STARTBUTTON = document.querySelector("#start");
const STOPBUTTON = document.querySelector("#stop");

var isRunning = false;
var interval;
timer = [1,0,0];

//
function runTimer(){
    let currentTime = Math.abs(timer[0]) + ":" + timer[1];
    TIMER.innerHTML = currentTime;
    timer[2]--;
    timer[0] = Math.floor((timer[2]/100)/60);
    timer[1] = Math.floor((timer[2]/100) - (timer[0] * 60));
}

//
function start(){
    timerRunning = true;
    interval = setInterval(runTimer, 10);
}

//
function stop(){
    timerRunning = false;
    clearInterval(interval);
}

STARTBUTTON.addEventListener("click", start, false);
STOPBUTTON.addEventListener("click", stop, false);