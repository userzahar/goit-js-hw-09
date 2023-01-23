import Notiflix from 'notiflix';
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
const startBtn = document.querySelector("button[data-start]");
const daysSpan = document.querySelector("span[data-days]");
const hoursSpan = document.querySelector("span[data-hours]");
const minutesSpan = document.querySelector("span[data-minutes]");
const secondsSpan = document.querySelector("span[data-seconds]");
let idInterval = null;
startBtn.setAttribute("disabled", 'true');
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    differenceDate: 0,
    onClose(selectedDates) {
        const date = new Date;
        differenceDate = selectedDates[0].getTime() - date.getTime();
        console.log(selectedDates[0]);
        alertMessage(differenceDate);
        console.log("🚀 ", convertMs(differenceDate))
        startBtn.addEventListener('click', onClickConnect);
        function onClickConnect(e) {
            convertMs(differenceDate);
            startBtn.setAttribute("disabled", 'true');
            idInterval = setInterval(() => {
                differenceDate -= 1000;
                let dateDifferenceObject = convertMs(differenceDate);
                let { days, hours, minutes, seconds } = dateDifferenceObject;
                daysSpan.textContent = addLeadingZero(days);
                hoursSpan.textContent = addLeadingZero(hours);
                minutesSpan.textContent = addLeadingZero(minutes);
                secondsSpan.textContent = addLeadingZero(seconds);
                console.log("💥", convertMs(differenceDate));
            }, 1000)
        }
    },
};

const inputText = document.getElementById('datetime-picker');
flatpickr(inputText, options);

function alertMessage(difference) {
    if (difference < 0) {
        // window.alert("Please choose a date in the future");
        Notiflix.Notify.warning('Please choose a date in the future');
        startBtn.setAttribute("disabled", 'true');
    } else if (difference === 0) {
        clearInterval(idInterval);
    }
    else {
        startBtn.removeAttribute("disabled");
    }
}
function addLeadingZero(value) {
    return value.toString().padStart(2, '0');
}


function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  
