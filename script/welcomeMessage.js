const welcomeDay = document.getElementById("welcome-day");
const welcomeDate = document.getElementById("welcome-date");
const welcomeTime = document.getElementById("welcome-time");

function setDateString() {
    let locale = "sv";
    welcomeDay.innerHTML = getDayName(locale);
    welcomeDate.innerHTML = getDate(locale);
    welcomeTime.innerHTML = getTime(locale);
}

setDateString();

function getDayName(locale) {
    const date = new Date();
    const today = date.toLocaleDateString(locale, { weekday: "long"});

    switch (today) {
        case "måndag":
            return "Måndag";
        case "tisdag":
            return "Tisdag";
        case "onsdag":
            return "Onsdag";
        case "torsdag":
            return "Torsdag";
        case "fredag":
            return "Fredag";
        case "lördag":
            return "Lördag";
        case "söndag":
            return "Söndag";
        default:
            return "Okänd dag";
    }
}

function getDate(locale) {
    const date = new Date();
    return date.toLocaleDateString(locale, {month: "short", day: "2-digit"});
}

function getTime(locale) {
    const date = new Date();
    return date.toLocaleTimeString(locale, { hour: "2-digit", minute: "2-digit"});
}