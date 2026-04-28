function renderTodoCards() {
	const todoSectionToday = document.querySelector(".todo-section-today")
	const todoSectionUpcoming = document.querySelector(".todo-section-upcoming")

	const sortedTodos = todos.sort((t1, t2) => t1.startAt - t2.startAt)

	const today = new Date().toLocaleDateString("sv", { day: "2-digit", month: "2-digit", year: "2-digit" })

	sortedTodos.forEach(t => {
		const todoDate = t.startAt.toLocaleDateString("sv", { day: "2-digit", month: "2-digit", year: "2-digit" })

		if (today == todoDate) {
			todoSectionToday.append(createTodoCard(t, false))
		}
		else {
			todoSectionUpcoming.append(createTodoCard(t, true))
		}
	});

}

function renderTodoPageDate() {
	const dateElement = document.querySelector(".todo-page-date");
	const currentDate = new Date();

	dateElement.textContent = `
	${currentDate.toLocaleDateString("sv", { weekday: "long" })}, 
	${currentDate.toLocaleDateString("sv", { day: "2-digit", month: "long" })}`
}

function createTodoCard(todo, showDate) {
	const todoCard = document.createElement("article")
	const title = document.createElement("h2")
	const description = document.createElement("p")
	const startAt = document.createElement("p")
	const endAt = document.createElement("p")
	const timeBox = document.createElement("div")

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

	todoCard.append();

	return todoCard
}

let todos = [
	{
		id: 1,
		title: "Reply to client email",
		description: "Send the revised budget and confirm tomorrow's call.",
		createdAt: new Date("2026-04-28T08:15:00"),
		startAt: new Date("2026-04-28T09:30:00"),
		endAt: new Date("2026-04-28T10:00:00"),
		isDone: false
	},
	{
		id: 2,
		title: "Buy groceries",
		description: "Milk, bread, fruit, pasta, and dish soap.",
		createdAt: new Date("2026-04-27T18:20:00"),
		startAt: new Date("2026-04-29T17:00:00"),
		endAt: new Date("2026-04-29T17:45:00"),
		isDone: false
	},
	{
		id: 3,
		title: "Prepare presentation",
		description: "Finish the slides for Friday's project update.",
		createdAt: new Date("2026-04-26T13:10:00"),
		startAt: new Date("2026-05-01T14:00:00"),
		endAt: new Date("2026-05-01T16:00:00"),
		isDone: false
	},
	{
		id: 4,
		title: "Call the dentist",
		description: "Book a cleaning appointment for next month.",
		createdAt: new Date("2026-04-25T10:05:00"),
		startAt: new Date("2026-05-03T11:30:00"),
		endAt: new Date("2026-05-03T11:45:00"),
		isDone: false
	}
];

renderTodoCards();
renderTodoPageDate();