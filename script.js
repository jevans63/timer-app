const TIMER = document.querySelector(".timer");
const STARTBUTTON = document.querySelector("#start");

var isRunning = false;
var interval;
timer = [2,0,0];

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
    interval = setInterval(runTimer, 10);
}

STARTBUTTON.addEventListener("click", start, false);