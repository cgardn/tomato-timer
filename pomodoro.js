let clockFace = document.querySelector("#clock-face");
let playButton = document.querySelector("#playButton");
let timerState = "pause";
let timerValue = 25*60;
let sessionValue = 25;
let breakValue = 5;

document.querySelector("#playButton").addEventListener('click', handlePlay);
document.querySelector("#resetButton").addEventListener('click', handleReset);
document.querySelector("#sessionUpButton").addEventListener('click', () => {changeSession(1)});
document.querySelector("#sessionDownButton").addEventListener('click', () => {changeSession(-1)});
document.querySelector("#breakUpButton").addEventListener('click', () => {changeBreak(1)});
document.querySelector("#breakDownButton").addEventListener('click', () => {changeBreak(-1)});

function setTimerState(newState) {
  timerState = newState;
  if (timerState == "play") {
    playButton.src = './assets/pause.png';
    playButton.classList.toggle('triPointRight');
  } else if (timerState == "pause") {
    playButton.src = './assets/tri.png';
    playButton.classList.toggle('triPointRight');
  }
}

function getTimerState() {
  return timerState;
}

function handlePlay() {
  if (getTimerState() == "play") {
    setTimerState("pause");
  } else if (getTimerState() == "pause") {
    setTimerState("play");
  }
}

function handleReset() {
  timerValue = sessionValue * 60;
  updateDisplay();
}

function changeSession(change) {
  sessionValue += (change);
  updateDisplay();
}

function changeBreak(change) {
  breakValue += (change);
  updateDisplay();
}

function updateDisplay() {
  // main clock face
  let h = `${(timerValue- (timerValue%60))/60}`;
  let m = `${timerValue % 60}`;
  clockFace.innerText = `${h}:${("00"+m).substr(-2,2)}`; 

  // session control
  document.querySelector("#sessionSelectorText").innerText = sessionValue;

  // break control
  document.querySelector("#breakSelectorText").innerText = breakValue;
}
