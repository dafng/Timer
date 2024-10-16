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
    seconds--;
    if (seconds < 0) {
        clearInterval(intervalId);
        timer.textContent = "Time's up!";
    }
} 
let seconds = 10; 
const intervalId = setInterval(() => CountDown(seconds--), 1000, 10);

// timer.textContent = i
/* NOTES! 
CountUp function doesn't work, because the program does not wait
for setTimeout function to complete. By the time it completes, the 
for loop is finished and thus i equals 10, which is what is printed 
on the screen. 
To bypass this I have to use and watch asychronous functions video on
Bro Code */