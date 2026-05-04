import { switchView } from "./navbar.js";
import { loadTodoCards } from "./todo.js";
import { initializeWelcomeMessage } from "./welcomeMessage.js";
import { InitializeCalendar } from "./calendar.js";

window.addEventListener("DOMContentLoaded", main);

async function main() {
  InitializeCalendar();
  loadTodoCards();
  initializeWelcomeMessage();
  switchView();
}
