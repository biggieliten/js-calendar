import { switchView } from "./navbar.js";
import { loadTodoCards } from "./todo.js";
import { initializeAddTodo } from "./todo.js";
import { initializeWelcomeMessage } from "./welcomeMessage.js";

window.addEventListener("DOMContentLoaded", main)


function main() {
	loadTodoCards();
	initializeAddTodo();
	initializeWelcomeMessage();
	switchView()
}