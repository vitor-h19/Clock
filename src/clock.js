const hours = document.getElementById("hours")
const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")

const session = document.getElementById("session")
const days = document.getElementById("day")
const dates = document.getElementById("date")
const months = document.getElementById("month")
const years = document.getElementById("year")

const clockType = document.getElementById("clock-type");

setInterval(() => {
    const curDate = new Date();
    const is24HFormat = clockType.checked;

    days.textContent = curDate.toLocaleString("en-US", { weekday: "short" });
    months.textContent = curDate.toLocaleString("en-US", { month: "short" });
    dates.textContent = curDate.getDate();
    years.textContent = curDate.getFullYear();

    session.style.display = is24HFormat ? "none" : "block";
    session.textContent = curDate.getHours() >= 12 ? "PM" : "AM";

    hours.textContent = padZero(curDate.getHours() % (is24HFormat ? 24 : 12));
    minutes.textContent = padZero(curDate.getMinutes());
    seconds.textContent = padZero(curDate.getSeconds());
}, 100);

function padZero(num) {
    return `0${num}`.slice(-2);
}