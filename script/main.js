import { switchView } from "./navbar.js";
import { loadTodoCards } from "./todo.js";

window.addEventListener("DOMContentLoaded", main)


function main() {
	loadTodoCards();
	switchView()
}