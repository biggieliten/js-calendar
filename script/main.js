import { switchView } from "./navbar.js";
import { loadTodoCards } from "./todo.js";
import { initializeWelcomeMessage } from "./welcomeMessage.js";

window.addEventListener("DOMContentLoaded", main)


function main() {
	loadTodoCards();
	initializeWelcomeMessage();
	switchView();
}