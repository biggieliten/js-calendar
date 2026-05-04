const currentDate = new Date();
let monthOffset = 0;
const calendarEl = document.getElementById("calendar-container");
const monthYearInfoEl = document.getElementById("calendar-month-year");
const decreaseMonthButton = document.getElementById("decrease-month");
const increaseMonthButton = document.getElementById("increase-month");
const calendarDesiredCardCount = 42;

export function InitializeCalendar() {
  renderCalendar();

  decreaseMonthButton.addEventListener("click", () => changeMonth(-1));
  increaseMonthButton.addEventListener("click", () => changeMonth(1));
}

function renderCalendar() {
  setMonthYearInfo();

  calendarEl.innerHTML = null;
  renderPreviousMonth();
  renderCurrentMonth();
  renderNextMonth();
}

function renderPreviousMonth() {
  let firstdayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + monthOffset,
    1,
  );

  let daysNeeded = getDayCountForPreviousMonth(firstdayOfMonth.getDay());

  const previousMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + monthOffset,
    0 - daysNeeded,
  );

  for (let i = daysNeeded; i > 0; i--) {
    let dayDate = new Date(
      previousMonth.getFullYear(),
      previousMonth.getMonth(),
      previousMonth.getDay() - i,
    );

    let card = createCalendarCard(dayDate);
    calendarEl.append(card);
  }
}

function renderCurrentMonth() {
  let monthStart = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + monthOffset,
    1,
  );

  let currentMonth = monthStart.getMonth();

  while (currentMonth === monthStart.getMonth()) {
    calendarEl.append(createCalendarCard(monthStart));

    monthStart.setDate(monthStart.getDate() + 1);
  }
}

function renderNextMonth() {
  let nextMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + monthOffset + 1,
    1,
  );

  let currentCardCount = calendarEl.childElementCount;

  for (let i = currentCardCount; i < calendarDesiredCardCount; i++) {
    calendarEl.append(createCalendarCard(nextMonth));
    nextMonth.setDate(nextMonth.getDate() + 1);
  }
}

function createCalendarCard(date) {
  let newCard = document.createElement("div");
  newCard.classList.add("calendar-card");

  let cardInfo = document.createElement("p");
  cardInfo.classList.add("calendar-card-info");
  cardInfo.textContent = date.getDate();

  newCard.append(cardInfo);

  return newCard;
}

function setMonthYearInfo() {
  monthYearInfoEl.textContent = null;
  let date = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + monthOffset,
  );

  monthYearInfoEl.textContent = date.toLocaleDateString("sv", {
    month: "long",
    year: "numeric",
  });
}

function changeMonth(change) {
  monthOffset += change;

  renderCalendar();
}

function getDayCountForPreviousMonth(dayOfWeek) {
  switch (dayOfWeek) {
    case 1:
      return 0;
    case 2:
      return 1;
    case 3:
      return 2;
    case 4:
      return 3;
    case 5:
      return 4;
    case 6:
      return 5;
    case 0:
      return 6;
    default:
      return -1;
  }
}
