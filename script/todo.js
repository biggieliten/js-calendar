let todos;

export function initializeTodoCards(incomingTodos) {
	todos = incomingTodos;
	addTodo()
	toggleTodoForm()
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

		if (t.isDone) {
			todoSectionCompleted.append(createTodoCard(t, true))
		}
		else if (today == todoDate) {
			todoSectionToday.append(createTodoCard(t, false))
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
	const deleteBtn = document.createElement("btn")
	const deleteIcon = document.createElement("span")


	description.classList = "todo-description"
	checkBox.type = "checkbox"

	if (todo.isDone) {
		checkBox.checked = true;
		title.style.textDecoration = "line-through"
		description.style.textDecoration = "line-through"
	}

	checkBox.addEventListener("click", () => setTodoDone(todo))
	deleteBtn.addEventListener("click", () => deleteTodo(todo))

	checkBox.classList = "todo-check"
	todoCard.classList = "todo-card"
	timeBox.classList = "todo-time-box"

	// classList and textContent needed for Material Icons
	deleteBtn.classList = "todo-delete-btn"
	deleteIcon.classList = "material-symbols-outlined todo-delete-icon"
	deleteIcon.textContent = "delete"

	title.textContent = todo.title;
	description.textContent = todo.description
	startAt.textContent = todo.startAt.toLocaleTimeString("sv", { hour: "2-digit", minute: "2-digit" });
	endAt.textContent = todo.endAt.toLocaleTimeString("sv", { hour: "2-digit", minute: "2-digit" });

	timeBox.append(startAt, "-", endAt)
	deleteBtn.append(deleteIcon);
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
	todoCard.append(timeBox, checkBox, deleteBtn);

	return todoCard
}

function setTodoDone(todo) {
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

function deleteTodo(todo) {
	let index = todos.indexOf(todo);
	if (index < 0) return;

	todos.splice(index, 1);
	console.log(todos);
	renderTodoCards();
}

function addTodo() {
	const form = document.querySelector(".todo-form");
	const submitBtn = document.querySelector(".form-submit-btn");

	const newId = todos.last

	form.reset()

	submitBtn.addEventListener("click", () => {
		if (!form.checkValidity()) {
			return;
		}

		const title = document.getElementById('title').value.trim();
		const description = document.getElementById('description').value.trim();
		const startAt = document.getElementById('startAt').value.trim();
		const endAt = document.getElementById('endAt').value.trim();

		const newTodo = {
			id: todos.length + 1,
			title,
			description,
			createdAt: new Date(),
			startAt: new Date(startAt),
			endAt: new Date(endAt),
			isDone: false
		}

		todos.push(newTodo);

		form.reset();

		console.log(todos);

		document.querySelector(".todo-form-section").classList.add("hidden");
		renderTodoCards()
	})

}

function toggleTodoForm() {
	const addButton = document.querySelector(".todo-add-btn")
	const closeButton = document.querySelector(".todo-form-back-btn")
	// const submitButton = document.querySelector(".")

	const todoForm = document.querySelector(".todo-form-section")

	addButton.addEventListener("click", () => {
		todoForm.classList.remove("hidden")
	})

	closeButton.addEventListener("click", () => {
		todoForm.classList.add("hidden")
	}
	)
}