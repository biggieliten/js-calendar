export function switchView() {
	const calendarBtn = document.querySelector(".nav-btn-calendar");
	const todoBtn = document.querySelector(".nav-btn-todo");
	const calendarIcon = document.querySelector(".calendar-icon");
	const todoIcon = document.querySelector(".todo-icon");
	const todoWrapper = document.querySelector(".todo-wrapper");
	const calendarSection = document.querySelector(".calendar-section");

	// Holds previous width before resize
	let previousWidth = window.innerWidth;

	window.addEventListener("resize", () => {

		// Saves new width after resize
		const resizedWidth = window.innerWidth;

		// Resets to a default state for mobile view on resize
		if (previousWidth >= 768 && resizedWidth < 768) {
			calendarSection.style.display = "block";
			todoWrapper.style.display = "none";
			todoIcon.classList.remove("active");
			calendarIcon.classList.add("active");
		}

		// Resets to desktop default state on resize
		if (previousWidth < 768 && resizedWidth >= 768) {
			calendarSection.style.display = "block";
			todoWrapper.style.display = "block";
			todoIcon.classList.remove("active");
			calendarIcon.classList.remove("active");
		}

		previousWidth = resizedWidth;
	})

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

