const body = document.querySelector('body');
const startBtn = document.querySelector("button[data-start]");
const stopBtn = document.querySelector("button[data-stop]");
let timerId = null;
let flag = true;
stopBtn.setAttribute("disabled", 'true');
// events
startBtn.addEventListener('click', onStartBtnClick);
stopBtn.addEventListener('click', onStopButtonClick)
// functions
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
  
function onStartBtnClick(e) {
    stopBtn.removeAttribute("disabled");
    timerId = setInterval(() => {
        getRandomHexColor();
        // let randomColor = Math.floor(Math.random()*16777215).toString(16);
        body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    startBtn.setAttribute("disabled", 'true');
}

function onStopButtonClick(e) {
    clearInterval(timerId);
    stopBtn.setAttribute("disabled", 'true');
    startBtn.removeAttribute("disabled");
}