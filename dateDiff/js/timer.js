//import sound from './sound.js';
let timerM = document.getElementById("min");// Берём строку
let timerS = document.getElementById("sec");// Берём строку
let buttonR = document.getElementById("start");// Берём кнопку запуска
let buttonS = document.getElementById("stop");// Берём кнопку запуска
var isPaused;
var timeMinut;


buttonR.addEventListener('click', function (event) {
    if (!isPaused) {
        timeMinut = timerM.value * 60 + timerS.value;

    }
    else isPaused = false;
})
buttonS.addEventListener('click', function (event) {

    isPaused = true
})

const time = document.getElementById('timeer')
function timeer() {
    time.onsubmit = (event) => {
        event.preventDefault();

        let seconds = timeMinut % 60
        let minutes = Math.trunc(timeMinut / 600)

        var timer = setInterval(function () {
            if (!isPaused) {
                if (seconds == 0) {
                    if (minutes == 0) {
                        clearInterval(timer);
                        var audio = new Audio();
                        audio.src = './sound.mp3';
                        audio.autoplay = true;
                        return;
                    }
                    minutes--;
                    if (minutes < 10) minutes = "0" + minutes;
                    seconds = 59;
                }
                else // Иначе
                    seconds--;
                if (seconds < 10) seconds = "0" + seconds;
                document.getElementById('timer').innerHTML = `${Math.trunc(minutes)}:${seconds}`;
            }
            else {
                timerM.value = '';
                timerS.value = '';
                timeMinut = minutes * 60 + seconds;
            }
        }, 1000)
    }
}
export default timeer;