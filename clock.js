function updateClock() {
  const now = new Date();
  const secondHand = document.querySelector(".second-hand");
  const minuteHand = document.querySelector(".minute-hand");
  const hourHand = document.querySelector(".hour-hand");
  const date = document.querySelector(".date");
  const digitalClock = document.querySelector(".digital-clock");

  // Actualiza la posición del segundero
  const secondsDegrees = (now.getSeconds() / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  // Actualiza la posición del minutero
  const minutesDegrees =
    (now.getMinutes() / 60) * 360 + (now.getSeconds() / 60) * 6 + 90;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  // Actualiza la posición del horario
  const hoursDegrees =
    (now.getHours() / 12) * 360 + (now.getMinutes() / 60) * 30 + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

  // Actualiza la fecha
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  date.textContent = now.toLocaleDateString("es-ES", options);

  // Actualiza el reloj digital
  const digitalOptions = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  digitalClock.textContent = now.toLocaleTimeString("es-ES", digitalOptions);
}

setInterval(updateClock, 1000);
/////////////////////////
let timerInterval;
let hours = 0;
let minutes = 0;
let seconds = 0;

const timerEl = document.querySelector(".timer");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

function startTimer() {
  timerInterval = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }

    timerEl.textContent = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  clearInterval(timerInterval);
  hours = 0;
  minutes = 0;
  seconds = 0;
  timerEl.textContent = "00:00:00";
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
