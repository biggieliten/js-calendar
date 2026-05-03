const currentDate = new Date();
const calendarEl = document.getElementById("calendar-container");

export function InitializeCalendar() {
  renderCalendar();
}

function renderCalendar() {
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
