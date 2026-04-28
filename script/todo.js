function renderTodos() {

	let todos = [
		{
			id: 1,
			title: "Todo 1",
			description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
			createdAt: new Date("2026-04-28T09:00:00"),
			dueAt: new Date("2026-04-30T10:00:00")
		},
		{
			id: 2,
			title: "Todo 2",
			description: "Buy groceries and essentials.",
			createdAt: new Date("2026-04-27T12:00:00"),
			dueAt: new Date("2026-05-01T15:30:00")
		},
		{
			id: 3,
			title: "Todo 3",
			description: "Prepare slides for presentation.",
			createdAt: new Date("2026-04-20T08:30:00"),
			dueAt: new Date("2026-05-05T09:00:00")
		},
		{
			id: 4,
			title: "Todo 4",
			description: "Call the vet for appointment.",
			createdAt: new Date("2026-04-25T14:45:00"),
			dueAt: new Date("2026-04-29T18:00:00")
		}
	];

	const todoSection = document.querySelector(".todo-section")

	todos.forEach(t => {
		const todoArticle = document.createElement("article")
		const title = document.createElement("h2")
		const description = document.createElement("p")
		const dueAt = document.createElement("p")

		title.textContent = t.title;
		description.textContent = t.description
		dueAt.textContent = t.dueAt;

		todoArticle.append(title);
		todoArticle.append(description);
		todoArticle.append(dueAt);
		todoSection.append(todoArticle);
	});

}

renderTodos();