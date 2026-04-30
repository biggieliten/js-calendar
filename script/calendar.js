let date = new Date();

let day = date.getDay();
let month = date.getMonth();
let year = date.getFullYear();

let calendarMonth = document.querySelector(".calendar-month");
let calendarYear = document.querySelector(".calender-year");
let calendarDays = document.querySelector(".calendar-days");
let calendar = document.querySelector(".calendar");
let decrease = document.querySelector(".decrease-month");
let increase = document.querySelector(".increase-month");

decrease.addEventListener("click", decreaseMonth);
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
  let monthName = "";

  switch (month) {
    case 0:
      monthName = "Januari";
      break;
    case 1:
      monthName = "Februari";
      break;
    case 2:
      monthName = "Mars";
      break;
    case 3:
      monthName = "April";
      break;
    case 4:
      monthName = "Maj";
      break;
    case 5:
      monthName = "Juni";
      break;
    case 6:
      monthName = "Juli";
      break;
    case 7:
      monthName = "Augusti";
      break;
    case 8:
      monthName = "September";
      break;
    case 9:
      monthName = "Oktober";
      break;
    case 10:
      monthName = "November";
      break;
    case 11:
      monthName = "December";
      break;
  }
  return monthName;
}

function calendarView(dayNumber, weekday) {
  let calendarCard = "";

  return (calendarCard += `
    <div class="card">${dayNumber} ${weekday}</div>
    `);
}

function renderCalendar(date) {
  calendar.textContent = "";
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  let newDate = new Date(year, month - 1, 0);
  let previousMonth = new Date(newDate.getTime());

  for (let i = 1; i <= daysInMonth; i++) {
    console.log(new Date(year, month, i).getDay());
    const dayElement = document.createElement("div");
    if (i <= parseInt(new Date(year, month, i).getDay())) {
      previousMonth.setDate(month - 1);
      dayElement.innerHTML = calendarView(
        new Date(year, previousMonth.getMonth(), i).getDay(),
        new Date(year, previousMonth.getMonth(), i).toLocaleDateString("sv", {
          weekday: "long",
        }),
      );
    } else {
      dayElement.innerHTML = calendarView(
        i - parseInt(new Date(year, month, 0).getDay()),
        new Date(
          year,
          month,
          i - parseInt(new Date(year, month, 0).getDay()) + 3,
        ).toLocaleDateString("sv", { weekday: "long" }),
      );
    }

    calendar.appendChild(dayElement);
  }
}

function addCalendar(days) {
  const dayArray = Array.from({ length: days }, (_, i) => i + 1);
  // calendar.textContent = renderCalendar(new Date(year, month, day));
}
