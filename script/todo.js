function renderTodoCards() {
	const todoSection = document.querySelector(".todo-section")

	const sortedTodos = todos.sort((t1, t2) => t1.startAt - t2.startAt)

	sortedTodos.forEach(t => {
		todoSection.append(createTodoCard(t))
	});

}

function renderTodoPageDate() {
	const dateElement = document.querySelector(".todo-page-date");
	const currentDate = new Date();

	dateElement.textContent = `
	${currentDate.toLocaleDateString("sv", { weekday: "long" })}, 
	${currentDate.toLocaleDateString("sv", { day: "2-digit", month: "long" })}`
}

function createTodoCard(todo) {
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
	startAt.textContent = todo.startAt.toLocaleDateString("sv", { hour: "2-digit", minute: "2-digit" });
	endAt.textContent = todo.endAt.toLocaleTimeString("sv", { hour: "2-digit", minute: "2-digit" });

	timeBox.append(startAt, "-", endAt)

	todoCard.append(title, description, timeBox);

	return todoCard
}

let todos = [
	{
		id: 1,
		title: "Todo 1",
		description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
		createdAt: new Date("2026-04-28T09:00:00"),
		startAt: new Date("2026-04-30T10:00:00"),
		endAt: new Date("2026-04-30T12:00:00"),
		isDone: false
	},
	{
		id: 2,
		title: "Todo 2",
		description: "Buy groceries and essentials.",
		createdAt: new Date("2026-04-27T12:00:00"),
		startAt: new Date("2026-05-01T15:30:00"),
		endAt: new Date("2026-05-01T16:30:00"),
		isDone: false
	},
	{
		id: 3,
		title: "Todo 3",
		description: "Prepare slides for presentation.",
		createdAt: new Date("2026-04-20T08:30:00"),
		startAt: new Date("2026-05-05T09:00:00"),
		endAt: new Date("2026-05-05T11:00:00"),
		isDone: false
	},
	{
		id: 4,
		title: "Todo 4",
		description: "Call the vet for appointment.",
		createdAt: new Date("2026-04-25T14:45:00"),
		startAt: new Date("2026-04-29T18:00:00"),
		endAt: new Date("2026-04-29T18:30:00"),
		isDone: false
	}
];

renderTodoCards();
renderTodoPageDate();