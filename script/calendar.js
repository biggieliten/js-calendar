let date = new Date();
let month = date.getMonth();
let year = date.getFullYear();
let day = date.getDay();
let dayDate = date.getDate();

console.log({day})
console.log({dayDate})

let calendarMonth = document.querySelector(".calendar-month");
let calendarYear = document.querySelector(".calender-year");
let calendarDays = document.querySelector(".calendar-days");
let calendar = document.querySelector(".calendar");

let decrease = document.querySelector(".decrease-month")
decrease.addEventListener("click", decreaseMonth);

let increase = document.querySelector(".increase-month")
increase.addEventListener("click", increaseMonth);

export function getDaysInMonth() {
    calendarMonth.textContent = getMonthAsString(month);
    calendarYear.textContent = year;
    calendarDays.textContent = getAmountOfDaysInMonth(new Date(year, month, 0));
    calendar.textContent = addCalendar();
}

export function increaseMonth() {
    month >= 11 ? month = 11 : month += 1;
    calendarMonth.textContent = getMonthAsString(month);
    calendarDays.textContent = getAmountOfDaysInMonth(new Date(year, month, 0));
    addCalendar(calendarDays.textContent)
}

export function decreaseMonth() {
    month <= 0 ? month = 0 : month -= 1;
    calendarMonth.textContent = getMonthAsString(month);
    calendarDays.textContent = getAmountOfDaysInMonth(new Date(year, month, 0));
    addCalendar(calendarDays.textContent)
}

function getMonthAsString(month) {
    let monthName = "";

    // if (month == 13 ? month = 1 : month == 0 ? month = 12 : month)
    switch(month) {
        case 0: monthName = "Januari"
            break;
        case 1: monthName = "Februari"
            break;
        case 2: monthName = "Mars"
            break;
        case 3: monthName = "April"
            break;
        case 4: monthName = "Maj"
            break;
        case 5: monthName = "Juni"
            break;
        case 6: monthName = "Juli"
            break;
        case 7: monthName = "Augusti"
            break;
        case 8: monthName = "September"
            break;
        case 9: monthName = "Oktober"
            break;
        case 10: monthName = "November"
            break;
        case 11: monthName = "December"
            break;
    }
    return monthName;
}

function getAmountOfDaysInMonth(date) {
    date.getFullYear();
    date.getMonth() + 1;


    // for(let i = 1; i <= new Date(year, month, 0).getDate(); i++) {
    //     calendar.textContent = new Date(year, month, i).toLocaleDateString("sv", {weekday: "long"});
    // }

    return new Date(year, month, 1).toLocaleDateString("sv", {weekday: "long"})
}

function addCalendar(days) {
    const dayArray = Array.from({ length: days }, (_, i) => i + 1);
    // calendar.textContent = getAmountOfDaysInMonth(new Date(year, month, day));
}