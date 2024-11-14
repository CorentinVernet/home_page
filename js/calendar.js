function showCalendar() {
  const calendarElement = document.getElementById("calendar");
  const now = new Date();
  const monthNames = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ];
  const currentMonth = monthNames[now.getMonth()];
  const currentYear = now.getFullYear();

  const header = `<div class="calendar-header">${currentMonth} ${currentYear}</div>`;

  let days = "<div class='calendar-days'>";
  const firstDay = new Date(currentYear, now.getMonth(), 1).getDay();
  const lastDay = new Date(currentYear, now.getMonth() + 1, 0).getDate();

  for (let i = 0; i < firstDay; i++) {
    days += "<div class='calendar-day empty'></div>";
  }

  for (let day = 1; day <= lastDay; day++) {
    days += `<div class='calendar-day${
      day === now.getDate() ? " today" : ""
    }'>${day}</div>`;
  }
  days += "</div>";

  calendarElement.innerHTML = header + days;
}
