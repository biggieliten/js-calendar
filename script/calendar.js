let date = new Date();

let month = date.getMonth();
let year = date.getFullYear();
let day = date.getDay();
let dayDate = date.getDate();

let calendarMonth = document.querySelector(".calendar-month");
let calendarYear = document.querySelector(".calendar-year");
let calendarDays = document.querySelector(".calendar-days");
let calendar = document.querySelector(".calendar");

let decrease = document.querySelector(".decrease-month");
decrease.addEventListener("click", decreaseMonth);

let increase = document.querySelector(".increase-month");
increase.addEventListener("click", increaseMonth);

export function getDaysInMonth() {
  calendarMonth.textContent = getMonthAsString(month);
  calendarYear.textContent = year;
  calendarDays.textContent = renderCalendar(new Date(year, month, 0));
  calendar.textContent = addCalendar();
}

export function increaseMonth() {
  month >= 11 ? (month = 11) : (month += 1);
  calendarMonth.textContent = getMonthAsString(month);
  calendarDays.textContent = renderCalendar(new Date(year, month, 0));
  addCalendar(calendarDays.textContent);
}

export function decreaseMonth() {
  month <= 0 ? (month = 0) : (month -= 1);
  calendarMonth.textContent = getMonthAsString(month);
  calendarDays.textContent = renderCalendar(new Date(year, month, 0));
  addCalendar(calendarDays.textContent);
}

function getMonthAsString(month) {
  const months = [
    "Januari",
    "Februari",
    "Mars",
    "April",
    "Maj",
    "Juni",
    "Juli",
    "Augusti",
    "September",
    "Oktober",
    "November",
    "December",
  ];

  return months[month];
}

function calendarView(num1, num2) {
  let calendarCard = "";

  return (calendarCard += `
    <div class="card">${num1} ${num2}</div>
    `);
}
function renderCalendar(date) {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  calendar.textContent = "";

  for (let i = 1; i <= daysInMonth; i++) {
    const dayElement = document.createElement("div");
    dayElement.innerHTML = calendarView(
      i,
      new Date(year, month, i).toLocaleDateString("sv", { weekday: "long" }),
    );

    calendar.appendChild(dayElement);
  }
}

function addCalendar(days) {
  const dayArray = Array.from({ length: days }, (_, i) => i + 1);
  // calendar.textContent = renderCalendar(new Date(year, month, day));
}

for (let i = 0; i <= 7; i++) {
  let date = new Date();
  console.log(date.getDay()[i]);
}
