import { switchView } from "./navbar.js";
import { initializeTodoCards } from "./todo.js";
import { initializeWelcomeMessage } from "./welcomeMessage.js";
import { InitializeCalendar } from "./calendar.js";
import { initializeCalendarDays } from "./calendarDays.js";

window.addEventListener("DOMContentLoaded", main);

function main() {
	InitializeCalendar(todos);
	initializeCalendarDays();
	initializeTodoCards(todos);
	initializeWelcomeMessage();
	switchView();
}


let todos = [
	// 2 for today (2026-05-04)
	{
		id: 1,
		title: "Write daily journal",
		description: "Reflect on today's achievements and lessons.",
		createdAt: new Date("2026-05-04T07:00:00"),
		startAt: new Date("2026-05-04T08:00:00"),
		endAt: new Date("2026-05-04T08:30:00"),
		isDone: false
	},
	{
		id: 1,
		title: "Write daily journal",
		description: "Reflect on today's achievements and lessons.",
		createdAt: new Date("2026-05-04T07:00:00"),
		startAt: new Date("2026-05-04T08:00:00"),
		endAt: new Date("2026-05-04T08:30:00"),
		isDone: false
	},
	{
		id: 1,
		title: "Write daily journal",
		description: "Reflect on today's achievements and lessons.",
		createdAt: new Date("2026-05-04T07:00:00"),
		startAt: new Date("2026-05-04T08:00:00"),
		endAt: new Date("2026-05-04T08:30:00"),
		isDone: false
	},
	{
		id: 1,
		title: "Write daily journal",
		description: "Reflect on today's achievements and lessons.",
		createdAt: new Date("2026-05-04T07:00:00"),
		startAt: new Date("2026-05-04T08:00:00"),
		endAt: new Date("2026-05-04T08:30:00"),
		isDone: false
	},
	{
		id: 1,
		title: "Write daily journal",
		description: "Reflect on today's achievements and lessons.",
		createdAt: new Date("2026-05-04T07:00:00"),
		startAt: new Date("2026-05-04T08:00:00"),
		endAt: new Date("2026-05-04T08:30:00"),
		isDone: false
	},
	{
		id: 1,
		title: "Write daily journal",
		description: "Reflect on today's achievements and lessons.",
		createdAt: new Date("2026-05-04T07:00:00"),
		startAt: new Date("2026-05-04T08:00:00"),
		endAt: new Date("2026-05-04T08:30:00"),
		isDone: false
	},
	{
		id: 1,
		title: "Write daily journal",
		description: "Reflect on today's achievements and lessons.",
		createdAt: new Date("2026-05-04T07:00:00"),
		startAt: new Date("2026-05-04T08:00:00"),
		endAt: new Date("2026-05-04T08:30:00"),
		isDone: false
	},
	{
		id: 1,
		title: "Write daily journal",
		description: "Reflect on today's achievements and lessons.",
		createdAt: new Date("2026-05-04T07:00:00"),
		startAt: new Date("2026-05-04T08:00:00"),
		endAt: new Date("2026-05-04T08:30:00"),
		isDone: false
	},
	{
		id: 1,
		title: "Write daily journal",
		description: "Reflect on today's achievements and lessons.",
		createdAt: new Date("2026-05-04T07:00:00"),
		startAt: new Date("2026-05-04T08:00:00"),
		endAt: new Date("2026-05-04T08:30:00"),
		isDone: false
	},
	{
		id: 1,
		title: "Write daily journal",
		description: "Reflect on today's achievements and lessons.",
		createdAt: new Date("2026-05-04T07:00:00"),
		startAt: new Date("2026-05-04T08:00:00"),
		endAt: new Date("2026-05-04T08:30:00"),
		isDone: false
	},
	{
		id: 1,
		title: "Write daily journal",
		description: "Reflect on today's achievements and lessons.",
		createdAt: new Date("2026-05-04T07:00:00"),
		startAt: new Date("2026-05-04T08:00:00"),
		endAt: new Date("2026-05-04T08:30:00"),
		isDone: false
	},
	{
		id: 1,
		title: "Write daily journal",
		description: "Reflect on today's achievements and lessons.",
		createdAt: new Date("2026-05-04T07:00:00"),
		startAt: new Date("2026-05-04T08:00:00"),
		endAt: new Date("2026-05-04T08:30:00"),
		isDone: false
	},
	{
		id: 2,
		title: "Team standup meeting",
		description: "Discuss project progress with the team.",
		createdAt: new Date("2026-05-04T07:30:00"),
		startAt: new Date("2026-05-04T09:00:00"),
		endAt: new Date("2026-05-04T09:30:00"),
		isDone: false
	},
	// 3 for the rest of this week (2026-05-05, 2026-05-06, 2026-05-07)
	{
		id: 3,
		title: "Doctor appointment",
		description: "Routine checkup at the clinic.",
		createdAt: new Date("2026-05-05T08:00:00"),
		startAt: new Date("2026-05-05T10:00:00"),
		endAt: new Date("2026-05-05T10:30:00"),
		isDone: false
	},
	{
		id: 4,
		title: "Project brainstorming",
		description: "Brainstorm ideas for the new project.",
		createdAt: new Date("2026-05-06T09:00:00"),
		startAt: new Date("2026-05-06T11:00:00"),
		endAt: new Date("2026-05-06T12:00:00"),
		isDone: false
	},
	{
		id: 5,
		title: "Grocery shopping",
		description: "Buy groceries for the week.",
		createdAt: new Date("2026-05-07T10:00:00"),
		startAt: new Date("2026-05-07T17:00:00"),
		endAt: new Date("2026-05-07T17:45:00"),
		isDone: false
	},
	// 5 for the coming week (2026-05-08 to 2026-05-12)
	{
		id: 6,
		title: "Client call",
		description: "Monthly update call with the client.",
		createdAt: new Date("2026-05-08T09:00:00"),
		startAt: new Date("2026-05-08T13:00:00"),
		endAt: new Date("2026-05-08T13:45:00"),
		isDone: false
	},
	{
		id: 7,
		title: "Read new book",
		description: "Start reading the new novel you bought.",
		createdAt: new Date("2026-05-09T11:00:00"),
		startAt: new Date("2026-05-09T20:00:00"),
		endAt: new Date("2026-05-09T21:00:00"),
		isDone: false
	},
	{
		id: 8,
		title: "Plan next sprint",
		description: "Outline tasks and goals for the upcoming sprint.",
		createdAt: new Date("2026-05-10T07:00:00"),
		startAt: new Date("2026-05-10T09:00:00"),
		endAt: new Date("2026-05-10T10:00:00"),
		isDone: false
	},
	{
		id: 9,
		title: "Code review",
		description: "Review pull requests assigned to you.",
		createdAt: new Date("2026-05-11T08:00:00"),
		startAt: new Date("2026-05-11T10:00:00"),
		endAt: new Date("2026-05-11T11:00:00"),
		isDone: false
	},
	{
		id: 10,
		title: "Lunch with Alex",
		description: "Meet Alex at the new cafe downtown.",
		createdAt: new Date("2026-05-12T09:00:00"),
		startAt: new Date("2026-05-12T12:00:00"),
		endAt: new Date("2026-05-12T13:00:00"),
		isDone: false
	}
];

