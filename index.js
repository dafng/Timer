let num_rounds= 19;
let timerStretch = 33;
let timerRest = 10;
let intervalId;
let seconds;

const timer = document.getElementById('timer');
const rounds = document.getElementById('rounds');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');

function startCountDown(initialseconds){

    if(intervalId){ //clear the memory
        clearInterval(intervalId);
    }
    
    //start the CountDown
    intervalId = setInterval(() => {CountDown(initialseconds); //call the CountDown function
                                    initialseconds--; // decrement the initial seconds
                                    }, 1000); 

    //alternative way
    /*
    seconds = initialseconds;
    intervalId = setInterval(() => {CountDown(seconds);
                                    seconds --;
                                }, 1000);
    */
    
}

function CountDown(currentseconds){

    seconds = currentseconds;
    timer.textContent = currentseconds; //print on the screen the current seconds value


    if (currentseconds < 0) {  //check if time's up and if it is clear the memory and print "Time's Up!"
        clearInterval(intervalId);
        timer.textContent = "Time's up!";
        return;
    }
} 

function pauseCountDown(){
    rounds.textContent = `seconds is: ${seconds};`
    if(intervalId){ //clear the memory
        clearInterval(intervalId);
    }
}

//click the button and call the startCountDown function
startBtn.addEventListener("click",()=>startCountDown(5));
pauseBtn.addEventListener("click",pauseCountDown);



/* NOTES! 
 if I have an eventlistener and my function has arguments I have to call it as an arrown function.
 */

 /*TODO
 add a resume button
 */