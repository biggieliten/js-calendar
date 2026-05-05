const currentDate = new Date();
let monthOffset = 0;
const calendarEl = document.getElementById("calendar-container");
const monthYearInfoEl = document.getElementById("calendar-month-year");
const decreaseMonthButton = document.getElementById("decrease-month");
const increaseMonthButton = document.getElementById("increase-month");
const calendarDesiredCardCount = 42;
let todos;

const dateOptions = {
  weekday: "short",
  day: "2-digit",
  year: "2-digit",
};

export async function initializeCalendar(incomingTodos) {
  todos = incomingTodos;

  await initHolidays();
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
    card.classList.add("shaded-card");
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
    let card = createCalendarCard(nextMonth);
    card.classList.add("shaded-card");
    calendarEl.append(card);
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

  const holiday = getPublicHoliday(new Date(date));
  if (holiday) {
    const holidayName = document.createElement("p");
    holidayName.className = "calendar-holiday-name";
    holidayName.textContent = holiday;

    newCard.append(holidayName);
  }

  let todoCount = countTodosSpecificDate(date);

  if (todoCount > 0) {
    let todoCountBox = document.createElement("div");
    todoCountBox.classList.add("calendar-dot-box");

    for (let i = 0; i < Math.min(5, todoCount); i++) {
      let dot = document.createElement("div");
      dot.classList.add("calendar-dot");
      todoCountBox.append(dot);
    }

    if (todoCount > 5) {
      let todoCountEl = document.createElement("p");
      todoCountEl.textContent = `+${todoCount - 5}`;

      todoCountBox.append(todoCountEl);
    }

    newCard.append(todoCountBox);
  }

  return newCard;
}

function countTodosSpecificDate(date) {
  const todosOnDate = todos.filter(
    (t) =>
      convertToLocaleDateString(t.startAt) == convertToLocaleDateString(date),
  );

  return todosOnDate.length;
}

function convertToLocaleDateString(date) {
  return date.toLocaleDateString("sv-SE", dateOptions);
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

let holidays = [];

async function initHolidays() {
  const res = await fetch("https://api.dagsmart.se/holidays");

  if (!res.ok) {
    console.error("Error", res.status);
    holidays = [];
    return;
  }
  holidays = await res.json();
}

function getPublicHoliday(date) {
  const dateStr = date.toLocaleDateString("sv-SE");

  let match;

  for (let index = 0; index < holidays.length; index++) {
    if (holidays[index].date === dateStr) {
      match = toCapitalCase(holidays[index].name.sv);
    }
  }

  if (!match) {
    return null;
  }
  return toCapitalCase(match);
}

function toCapitalCase(str) {
  let holiday = "";

  if (str.includes(" ")) {
    const firstWord = str.split(" ")[0];
    const secondWord = str.split(" ")[1];

    const firstWordCapitalized =
      firstWord.charAt(0).toUpperCase() + firstWord.slice(1);
    const secondWordCapitalized =
      secondWord.charAt(0).toUpperCase() + secondWord.slice(1);
    holiday = `${firstWordCapitalized} ${secondWordCapitalized}`;
  } else {
    holiday = str.charAt(0).toUpperCase() + str.slice(1);
  }

  return holiday;
}
