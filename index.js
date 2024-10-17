let num_rounds= 19;
let timerStretch = 33;
let timerRest = 10;

const timer = document.getElementById('timer');
const rounds = document.getElementById('rounds');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
//let seconds = 10;

/*
pauseBtn.addEventListener("click", clearInterval);
//const a = setInterval(CountDown, 1000);
startBtn.addEventListener("click", setInterval(CountDown, 1000));
*/

function CountDown(seconds){
    timer.textContent = seconds;
    if (seconds < 0) {
        clearInterval(intervalId);
        timer.textContent = "Time's up!";
    }
} 
let seconds = 5; 
const intervalId = setInterval(() => CountDown(seconds--), 1000); //CountDown(seconds--) first the function is called with the value seconds and after it is called seconds-- is performed


/* NOTES! 
 */