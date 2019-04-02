let time = 0;
let isStarted = 0;
let milliseconds=0, minutes=0, seconds=0, hours=0;
let startBtn =   document.getElementById("start");
startBtn.addEventListener('click',startPause);
let resetBtn =  document.getElementById("reset");
resetBtn.addEventListener('click',reset);

function startPause(){
    if(isStarted === 0){
        isStarted = 1;
        timer();
        startBtn.textContent = 'Pause';
    }
    else{
        isStarted = 0;
        startBtn.textContent = 'Resume';
    }
}
function reset(){

    isStarted = 0;
    time = 0;
    minutes=0;
    milliseconds=0;
    hours=0;
    document.getElementById("timer").textContent = "00:00:00:0";
    startBtn.textContent = 'Start';

}
function timer() {
    if (isStarted === 1) {
        setTimeout(() => {
            minutes = Math.floor(time / 10 / 60);
            seconds = Math.floor(time / 10 % 60);
            hours = Math.floor(time / 10 / 60 / 60);
            milliseconds = time % 10;
            time++;
            if (minutes < 10) {
                minutes = "0" + minutes;
            }
            if (seconds < 10) {
                seconds = "0" + seconds;
            }
            document.getElementById("timer").textContent = "0" + hours + ":" + minutes + ":" + seconds + ":" + milliseconds;
            timer()
        }, 100)
    }


}