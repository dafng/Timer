let num_rounds= 19;
let timerStretch = 33;
let timerRest = 10;
let intervalId;
let seconds;

const timer = document.getElementById('timer');
const rounds = document.getElementById('rounds');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');

function CountDown(seconds){

    timer.textContent = seconds; //print on the screen the current seconds value


    if (seconds < 0) {  //check if time's up and if it is clear the memory and print "Time's Up!"
        clearInterval(intervalId);
        timer.textContent = "Time's up!";
        return;
    }
} 

function startCountDown(seconds){
    //let seconds = 5; //initialize the amount of seconds to countdown

    if(intervalId){ //clear the memory
        clearInterval(intervalId);
    }

    //start the countdown
    intervalId = setInterval(() => CountDown(seconds--), 1000); //CountDown(seconds--) first the function is called with the value seconds and after it is called seconds-- is performed

}

function pauseCountDown(){
    rounds.textContent = `seconds is: ${seconds};`  
}

//click the button and call the startCountDown function
startBtn.addEventListener("click",()=>startCountDown(5));
pauseBtn.addEventListener("click",pauseCountDown);



/* NOTES! 
 if I have an eventlistener and my function has arguments I have to call it as an arrown function.
 */