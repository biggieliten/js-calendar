const welcomeDay = document.getElementById("welcome-day");
const welcomeDate = document.getElementById("welcome-date");
const welcomeTime = document.getElementById("welcome-time");

setInterval(setDateString, 5000);

function setDateString() {
    let locale = "sv";
    welcomeDay.innerHTML = getDayName(locale);
    welcomeDate.innerHTML = getDate(locale);
    welcomeTime.innerHTML = getTime(locale);
}

setDateString();

function getDayName(locale) {
    const date = new Date();
    return date.toLocaleDateString(locale, { weekday: "long"});
}

function getDate(locale) {
    const date = new Date();
    return date.toLocaleDateString(locale, {month: "short", day: "2-digit"});
}

function getTime(locale) {
    const date = new Date();
    return date.toLocaleTimeString(locale, { hour: "numeric", minute: "numeric"});
}