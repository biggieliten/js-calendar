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
  calendarDays.textContent = getAmountOfDaysInMonth(new Date(year, month, 0));
  calendar.textContent = addCalendar();
}

export function increaseMonth() {
  month >= 11 ? (month = 11) : (month += 1);
  calendarMonth.textContent = getMonthAsString(month);
  calendarDays.textContent = getAmountOfDaysInMonth(new Date(year, month, 0));
  addCalendar(calendarDays.textContent);
}

export function decreaseMonth() {
  month <= 0 ? (month = 0) : (month -= 1);
  calendarMonth.textContent = getMonthAsString(month);
  calendarDays.textContent = getAmountOfDaysInMonth(new Date(year, month, 0));
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

function calendarView(num1, num2) {
  let calendarCard = "";

  return (calendarCard += `
    <div class="card">${num1} ${num2}</div>
    `);
}
function getAmountOfDaysInMonth(date) {
  calendar.textContent = "";
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  let newDate = new Date(year, month - 1, 0);
  let previousMonth = new Date(newDate.getTime());

  console.log(newDate);
  console.log(previousMonth.toLocaleDateString("sv", { weekday: "long" }));

  for (let i = 1; i <= daysInMonth; i++) {
    const dayElement = document.createElement("div");
    if (i <= parseInt(new Date(year, month, 0).getDay())) {
      previousMonth.setDate(month - 1);
      dayElement.innerHTML = calendarView(
        new Date(year, previousMonth.getMonth, i).getDay(),
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
          i - parseInt(new Date(year, month, 0).getDay()),
        ).toLocaleDateString("sv", { weekday: "long" }),
      );
    }

    calendar.appendChild(dayElement);
  }
}

function addCalendar(days) {
  const dayArray = Array.from({ length: days }, (_, i) => i + 1);
  // calendar.textContent = getAmountOfDaysInMonth(new Date(year, month, day));
}
