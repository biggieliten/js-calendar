export function initializeWelcomeMessage() {
    const welcomeDay = document.getElementById("welcome-day");
    const welcomeDate = document.getElementById("welcome-date");
    const welcomeTime = document.getElementById("welcome-time");

    setDateString(welcomeDay, welcomeDate, welcomeTime);
    setInterval(() => setDateString(welcomeDay, welcomeDate, welcomeTime), 5000);
}

function setDateString(day, date, time) {

    let locale = "sv";
    day.textContent = getDayName(locale);
    date.textContent = getDate(locale);
    time.textContent = getTime(locale);
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