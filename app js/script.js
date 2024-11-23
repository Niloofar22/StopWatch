let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];

let timerDisplay = document.querySelector(".timer-display");
let timerDisplayHour = document.querySelector(".timer-display-hour");
let timerDisplayMinute = document.querySelector(".timer-display-minute");
let timerDisplaySecond = document.querySelector(".timer-display-second");
let timerDisplayMilliSecond = document.querySelector(
  ".timer-display-millisecond"
);
let startTimer = document.getElementById("start-timer");
let pauseTimer = document.getElementById("pause-timer");
let resetTimer = document.getElementById("reset-timer");
let int = null;

startTimer.addEventListener("click", () => {
  int = setInterval(displayTimer, 100);
});
pauseTimer.addEventListener("click" , ()=>{
    clearInterval(int);
})
resetTimer.addEventListener("click" , ()=>{
       clearInterval(int);
       [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
         timerDisplayHour.innerHTML = "00";
         timerDisplayMinute.innerHTML = "00";
         timerDisplaySecond.innerHTML = "00";
         timerDisplayMilliSecond.innerHTML = "000";

})
function displayTimer() {
  milliseconds += 10;
  if (milliseconds == 1000) {
    milliseconds = 0;
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
      if (minutes == 60) {
        minutes = 0;
        hours++;
      }
    }
  }

  let h, m, s, ms;

  if (hours < 10) {
    h = "0" + hours;
  } else {
    h = hours;
  }
  if (minutes < 10) {
    m = "0" + minutes;
  } else {
    m = minutes;
  }
  if (seconds < 10) {
    s = "0" + seconds;
  } else {
    s = seconds;
  }
  if (milliseconds < 10) {
    ms = "00" + milliseconds;
  } else if (milliseconds < 100) {
    ms = "0" + milliseconds;
  } else {
    ms = milliseconds;
  }
  timerDisplayHour.innerHTML = h;
  timerDisplayMinute.innerHTML = m;
  timerDisplaySecond.innerHTML = s;
  timerDisplayMilliSecond.innerHTML = ms;
}
