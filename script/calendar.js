const currentDate = new Date();
let monthOffset = 0;
const calendarEl = document.getElementById("calendar-container");
const monthYearInfoEl = document.getElementById("calendar-month-year");

export function InitializeCalendar() {
  renderCalendar();
}

function renderCalendar() {
  setMonthYearInfo();

  calendarEl.innerHTML = null;
  for (let i = 0; i < 42; i++) {
    calendarEl.append(createCalendarCard(i));
  }
}

function createCalendarCard(date) {
  let newCard = document.createElement("div");
  newCard.classList.add("calendar-card");

  let cardInfo = document.createElement("p");
  cardInfo.classList.add("calendar-card-info");
  cardInfo.textContent = date;

  newCard.append(cardInfo);

  return newCard;
}

function setMonthYearInfo() {
  monthYearInfoEl.textContent = null;
  let date = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() - monthOffset,
  );

  monthYearInfoEl.textContent = date.toLocaleDateString("sv", {
    month: "long",
    year: "numeric",
  });
}
