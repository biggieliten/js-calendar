const welcomeDay = document.getElementById("welcome-day");
const welcomeDate = document.getElementById("welcome-date");
const welcomeTime = document.getElementById("welcome-time");

setDateString();
setInterval(setDateString, 5000);

function setDateString() {
    let locale = "sv";
    welcomeDay.textContent = getDayName(locale);
    welcomeDate.textContent = getDate(locale);
    welcomeTime.textContent = getTime(locale);
}


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