import { loadComponents } from "./components.js"
import { renderTodoCards } from "./todo.js";

window.addEventListener("DOMContentLoaded", main)


function main() {
	renderTodoCards();
}