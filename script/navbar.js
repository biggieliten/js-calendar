export function switchView() {
	const calendarBtn = document.querySelector(".nav-btn-calendar");
	const todoBtn = document.querySelector(".nav-btn-todo");
	const calendarIcon = document.querySelector(".calendar-icon");
	const todoIcon = document.querySelector(".todo-icon");
	const todoWrapper = document.querySelector(".todo-wrapper");
	const calendarSection = document.querySelector(".calendar-section");

	if (window.innerWidth < 768) {
		calendarSection.style.display = "block";
		todoWrapper.style.display = "none";
	}

	calendarBtn.addEventListener("click", () => {
		calendarSection.style.display = "block";
		todoWrapper.style.display = "none";

		todoIcon.classList.remove("active");
		calendarIcon.classList.add("active");
	});

	todoBtn.addEventListener("click", () => {
		todoWrapper.style.display = "block";
		calendarSection.style.display = "none";

		calendarIcon.classList.remove("active");
		todoIcon.classList.add("active");
	});

}

