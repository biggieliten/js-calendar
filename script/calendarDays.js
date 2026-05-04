const dayElements = [];
let _locale;

export function initializeCalendarDays(locale = "sv") {
  const elements = document.querySelectorAll(".calendar-day");

  for (const ele of elements) {
    dayElements.push(ele);
  }

  _locale = locale;
  UpdateDayNames(window.innerWidth);

  window.addEventListener("resize", () => UpdateDayNames(window.innerWidth));
}

function UpdateDayNames(width) {
  for (let i = 0; i < dayElements.length; i++) {
    dayElements[i].textContent = new Date(2026, 4, 4 + i).toLocaleDateString(
      _locale,
      getOptionsFromWidth(width),
    );
  }
}

function getOptionsFromWidth(width) {
  if (width >= 767) {
    return { weekday: "long" };
  } else if (width >= 375) {
    return { weekday: "short" };
  } else {
    return { weekday: "narrow" };
  }
}
