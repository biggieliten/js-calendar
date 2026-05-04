import { switchView } from "./navbar.js";
import { loadTodoCards } from "./todo.js";
import { initializeWelcomeMessage } from "./welcomeMessage.js";
import { InitializeCalendar } from "./calendar.js";
import { initializeCalendarDays } from "./calendarDays.js";

window.addEventListener("DOMContentLoaded", main);

function main() {
  InitializeCalendar();
  initializeCalendarDays();
  loadTodoCards();
  initializeWelcomeMessage();
  switchView();
}
