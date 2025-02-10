let minutes = 0, seconds = 0, milliseconds = 0, interval;
let running = false;

function startTimer() {
    if (!running) {
        running = true;
        interval = setInterval(updateTime, 10);
    }
}

function updateTime() {
    milliseconds++;
    if (milliseconds === 100) {
        milliseconds = 0;
        seconds++;
    }
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    document.getElementById("minutes").innerText = formatTime(minutes);
    document.getElementById("seconds").innerText = formatTime(seconds);
    document.getElementById("milliseconds").innerText = formatTime(milliseconds);
}

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}

function pauseTimer() {
    running = false;
    clearInterval(interval);
}

function resetTimer() {
    running = false;
    clearInterval(interval);
    minutes = seconds = milliseconds = 0;
    document.getElementById("minutes").innerText = "00";
    document.getElementById("seconds").innerText = "00";
    document.getElementById("milliseconds").innerText = "00";
    document.getElementById("laps").innerHTML = "";
}

function recordLap() {
    if (running) {
        let lapTime = `${formatTime(minutes)}:${formatTime(seconds)}:${formatTime(milliseconds)}`;
        let lapItem = document.createElement("li");
        lapItem.innerText = lapTime;
        document.getElementById("laps").appendChild(lapItem);
    }
}

// Light/Dark Mode Toggle
document.getElementById("toggleTheme").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    let modeIcon = document.getElementById("toggleTheme");
    modeIcon.innerText = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("pause").addEventListener("click", pauseTimer);
document.getElementById("reset").addEventListener("click", resetTimer);
document.getElementById("lap").addEventListener("click", recordLap);
