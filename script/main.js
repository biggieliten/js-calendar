import { switchView } from "./navbar.js";
import { initializeTodoCards } from "./todo.js";
import { initializeWelcomeMessage } from "./welcomeMessage.js";
import { initializeCalendar } from "./calendar.js";
import { initializeCalendarDays } from "./calendarDays.js";

window.addEventListener("DOMContentLoaded", main);

function main() {
  initializeCalendar(todos);
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
    isDone: false,
  },
  {
    id: 2,
    title: "Write daily journal",
    description: "Reflect on today's achievements and lessons.",
    createdAt: new Date("2026-05-04T07:00:00"),
    startAt: new Date("2026-05-04T08:00:00"),
    endAt: new Date("2026-05-04T08:30:00"),
    isDone: false,
  },
  {
    id: 3,
    title: "Write daily journal",
    description: "Reflect on today's achievements and lessons.",
    createdAt: new Date("2026-05-04T07:00:00"),
    startAt: new Date("2026-05-04T08:00:00"),
    endAt: new Date("2026-05-04T08:30:00"),
    isDone: false,
  },
  {
    id: 4,
    title: "Write daily journal",
    description: "Reflect on today's achievements and lessons.",
    createdAt: new Date("2026-05-04T07:00:00"),
    startAt: new Date("2026-05-04T08:00:00"),
    endAt: new Date("2026-05-04T08:30:00"),
    isDone: false,
  },
  {
    id: 5,
    title: "Write daily journal",
    description: "Reflect on today's achievements and lessons.",
    createdAt: new Date("2026-05-04T07:00:00"),
    startAt: new Date("2026-05-04T08:00:00"),
    endAt: new Date("2026-05-04T08:30:00"),
    isDone: false,
  },
  {
    id: 6,
    title: "Write daily journal",
    description: "Reflect on today's achievements and lessons.",
    createdAt: new Date("2026-05-04T07:00:00"),
    startAt: new Date("2026-05-04T08:00:00"),
    endAt: new Date("2026-05-04T08:30:00"),
    isDone: false,
  },
  {
    id: 7,
    title: "Write daily journal",
    description: "Reflect on today's achievements and lessons.",
    createdAt: new Date("2026-05-04T07:00:00"),
    startAt: new Date("2026-05-04T08:00:00"),
    endAt: new Date("2026-05-04T08:30:00"),
    isDone: false,
  },
  {
    id: 8,
    title: "Write daily journal",
    description: "Reflect on today's achievements and lessons.",
    createdAt: new Date("2026-05-04T07:00:00"),
    startAt: new Date("2026-05-04T08:00:00"),
    endAt: new Date("2026-05-04T08:30:00"),
    isDone: false,
  },

  // 3 for the rest of this week (2026-05-05, 2026-05-06, 2026-05-07)
  {
    id: 14,
    title: "Doctor appointment",
    description: "Routine checkup at the clinic.",
    createdAt: new Date("2026-05-05T08:00:00"),
    startAt: new Date("2026-05-05T10:00:00"),
    endAt: new Date("2026-05-05T10:30:00"),
    isDone: true,
  },
  {
    id: 15,
    title: "Project brainstorming",
    description: "Brainstorm ideas for the new project.",
    createdAt: new Date("2026-05-06T09:00:00"),
    startAt: new Date("2026-05-06T11:00:00"),
    endAt: new Date("2026-05-06T12:00:00"),
    isDone: false,
  },
  {
    id: 16,
    title: "Grocery shopping",
    description: "Buy groceries for the week.",
    createdAt: new Date("2026-05-07T10:00:00"),
    startAt: new Date("2026-05-07T17:00:00"),
    endAt: new Date("2026-05-07T17:45:00"),
    isDone: false,
  },
  // 5 for the coming week (2026-05-08 to 2026-05-12)
  {
    id: 17,
    title: "Client call",
    description: "Monthly update call with the client.",
    createdAt: new Date("2026-05-08T09:00:00"),
    startAt: new Date("2026-05-08T13:00:00"),
    endAt: new Date("2026-05-08T13:45:00"),
    isDone: false,
  },
  {
    id: 18,
    title: "Read new book",
    description: "Start reading the new novel you bought.",
    createdAt: new Date("2026-05-09T11:00:00"),
    startAt: new Date("2026-05-09T20:00:00"),
    endAt: new Date("2026-05-09T21:00:00"),
    isDone: false,
  },
  {
    id: 19,
    title: "Plan next sprint",
    description: "Outline tasks and goals for the upcoming sprint.",
    createdAt: new Date("2026-05-10T07:00:00"),
    startAt: new Date("2026-05-10T09:00:00"),
    endAt: new Date("2026-05-10T10:00:00"),
    isDone: false,
  },
  {
    id: 20,
    title: "Code review",
    description: "Review pull requests assigned to you.",
    createdAt: new Date("2026-05-11T08:00:00"),
    startAt: new Date("2026-05-11T10:00:00"),
    endAt: new Date("2026-05-11T11:00:00"),
    isDone: false,
  },
  {
    id: 21,
    title: "Lunch with Alex",
    description: "Meet Alex at the new cafe downtown.",
    createdAt: new Date("2026-05-12T09:00:00"),
    startAt: new Date("2026-05-12T12:00:00"),
    endAt: new Date("2026-05-12T13:00:00"),
    isDone: false,
  },
  // 1 for May 13 (2026-05-13)
  {
    id: 22,
    title: "Team meeting",
    description: "Weekly team sync and updates.",
    createdAt: new Date("2026-05-13T08:00:00"),
    startAt: new Date("2026-05-13T10:00:00"),
    endAt: new Date("2026-05-13T11:00:00"),
    isDone: false,
  },
  // 2 for May 14 (2026-05-14)
  {
    id: 23,
    title: "Dentist appointment",
    description: "Routine teeth cleaning and checkup.",
    createdAt: new Date("2026-05-14T07:00:00"),
    startAt: new Date("2026-05-14T09:00:00"),
    endAt: new Date("2026-05-14T09:30:00"),
    isDone: false,
  },
  {
    id: 24,
    title: "Workout session",
    description: "Gym workout - strength training.",
    createdAt: new Date("2026-05-14T08:00:00"),
    startAt: new Date("2026-05-14T17:00:00"),
    endAt: new Date("2026-05-14T18:00:00"),
    isDone: false,
  },
  // 1 for May 18 (2026-05-18)
  {
    id: 25,
    title: "Design presentation",
    description: "Present new design mockups to stakeholders.",
    createdAt: new Date("2026-05-18T09:00:00"),
    startAt: new Date("2026-05-18T14:00:00"),
    endAt: new Date("2026-05-18T15:30:00"),
    isDone: false,
  },
  // 2 for May 20 (2026-05-20)
  {
    id: 26,
    title: "Submit report",
    description: "Complete and submit monthly report.",
    createdAt: new Date("2026-05-20T08:00:00"),
    startAt: new Date("2026-05-20T11:00:00"),
    endAt: new Date("2026-05-20T12:00:00"),
    isDone: false,
  },
  {
    id: 27,
    title: "Dinner with friends",
    description: "Evening dinner at the Italian restaurant.",
    createdAt: new Date("2026-05-20T10:00:00"),
    startAt: new Date("2026-05-20T19:00:00"),
    endAt: new Date("2026-05-20T21:00:00"),
    isDone: false,
  },
  // 1 for May 25 (2026-05-25)
  {
    id: 28,
    title: "Conference call",
    description: "International team standup.",
    createdAt: new Date("2026-05-25T07:00:00"),
    startAt: new Date("2026-05-25T08:00:00"),
    endAt: new Date("2026-05-25T09:00:00"),
    isDone: false,
  },
  // 2 for May 28 (2026-05-28)
  {
    id: 29,
    title: "Website redesign",
    description: "Work on website redesign project.",
    createdAt: new Date("2026-05-28T09:00:00"),
    startAt: new Date("2026-05-28T10:00:00"),
    endAt: new Date("2026-05-28T12:00:00"),
    isDone: false,
  },
  {
    id: 30,
    title: "Movie night",
    description: "Watch the new sci-fi movie release.",
    createdAt: new Date("2026-05-28T15:00:00"),
    startAt: new Date("2026-05-28T20:00:00"),
    endAt: new Date("2026-05-28T22:00:00"),
    isDone: false,
  },
];
