const welcomeElement = document.getElementById("welcome-date");

function setDateString() {
    let current = new Date();
    welcomeElement.innerHTML = getDayName();
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