let todos;

export function initializeTodoCards(incomingTodos) {
	todos = incomingTodos;

	renderTodoCards()
};

function renderTodoCards() {
	const todoSectionToday = document.querySelector(".todo-section-today")
	const todoSectionUpcoming = document.querySelector(".todo-section-upcoming")
	const todoSectionCompleted = document.querySelector(".todo-section-completed")

	todoSectionToday.innerHTML = ""
	todoSectionUpcoming.innerHTML = ""
	todoSectionCompleted.innerHTML = ""

	const sortedTodos = todos.sort((t1, t2) => t1.startAt - t2.startAt)

	const today = new Date().toLocaleDateString("sv", { day: "2-digit", month: "2-digit", year: "2-digit" })

	sortedTodos.forEach(t => {
		const todoDate = t.startAt.toLocaleDateString("sv", { day: "2-digit", month: "2-digit", year: "2-digit" })

		if (today == todoDate) {
			todoSectionToday.append(createTodoCard(t, false))
		}
		else if (t.isDone) {
			todoSectionCompleted.append(createTodoCard(t, true))
		}
		else {
			todoSectionUpcoming.append(createTodoCard(t, true))
		}
	});
};

function createTodoCard(todo, showDate) {
	const todoCard = document.createElement("article")
	const title = document.createElement("h2")
	const description = document.createElement("p")
	const startAt = document.createElement("p")
	const endAt = document.createElement("p")
	const timeBox = document.createElement("div")
	const checkBox = document.createElement("input")

	description.classList = "todo-description"
	checkBox.type = "checkbox"

	if (todo.isDone) {
		checkBox.checked = true;
		title.style.textDecoration = "line-through"
		description.style.textDecoration = "line-through"
	}

	checkBox.addEventListener("click", () => setTodoComplete(todo))

	checkBox.classList = "todo-check"
	todoCard.classList = "todo-card"
	timeBox.classList = "todo-time-box"

	title.textContent = todo.title;
	description.textContent = todo.description
	startAt.textContent = todo.startAt.toLocaleTimeString("sv", { hour: "2-digit", minute: "2-digit" });
	endAt.textContent = todo.endAt.toLocaleTimeString("sv", { hour: "2-digit", minute: "2-digit" });

	timeBox.append(startAt, "-", endAt)

	todoCard.append(title, description);

	if (showDate) {
		const date = document.createElement("p");
		date.textContent = todo.startAt.toLocaleDateString("sv", {
			day: "2-digit",
			month: "long",
			year: "2-digit"
		});
		todoCard.append(date);
	}

	todoCard.append(timeBox, checkBox);

	return todoCard
}

function setTodoComplete(todo) {
	const foundTodo = todos.find(t => t === todo);

	if (!foundTodo) return;

	if (!foundTodo.isDone) {
		foundTodo.isDone = true;
		renderTodoCards();
		return;
	}

	foundTodo.isDone = false;

	renderTodoCards();
}