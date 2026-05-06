export function switchView() {
  const calendarBtn = document.querySelector(".nav-btn-calendar");
  const todoBtn = document.querySelector(".nav-btn-todo");
  const calendarIcon = document.querySelector(".calendar-icon");
  const todoIcon = document.querySelector(".todo-icon");
  const todoWrapper = document.querySelector(".todo-wrapper");
  const calendarSection = document.querySelector(".calendar-section");
  const aside = document.querySelector(".aside");
  const main = document.querySelector(".main");

  // Holds previous width before resize
  let previousWidth = window.innerWidth;

  window.addEventListener("resize", () => {
    // Saves new width after resize
    const resizedWidth = window.innerWidth;

    // Resets to a default state for mobile view on resize
    if (previousWidth >= 768 && resizedWidth < 768) {
      calendarSection.style.display = "flex";
      todoWrapper.style.display = "none";
      todoIcon.classList.remove("active");
      calendarIcon.classList.add("active");
    }

    // Resets to desktop default state on resize
    if (previousWidth < 768 && resizedWidth >= 768) {
      calendarSection.style.display = "flex";
      todoWrapper.style.display = "block";
      todoIcon.classList.remove("active");
      calendarIcon.classList.remove("active");
      aside.classList.remove("hidden");
      main.classList.remove("hidden");
    }

    previousWidth = resizedWidth;
  });

  calendarBtn.addEventListener("click", () => {
    calendarSection.style.display = "flex";
    todoWrapper.style.display = "none";

    main.classList.remove("hidden");
    aside.classList.add("hidden");
    todoIcon.classList.remove("active");
    calendarIcon.classList.add("active");
  });

  todoBtn.addEventListener("click", () => {
    todoWrapper.style.display = "block";
    calendarSection.style.display = "none";

    main.classList.add("hidden");
    aside.classList.remove("hidden");
    calendarIcon.classList.remove("active");
    todoIcon.classList.add("active");
  });
}
