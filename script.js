document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search");

  // Fonction pour afficher l'heure actuelle
  function updateTime() {
    const dateTimeElement = document.getElementById("date-time");
    const now = new Date();

    // Formatage de l'heure (Ex: 15:30:45)
    const formattedTime = now.toLocaleTimeString("fr-FR");

    // Mise à jour de l'heure uniquement
    dateTimeElement.innerHTML = `
      <div class="time">${formattedTime}</div>
    `;
  }

  // Fonction pour afficher un calendrier avec le jour actuel
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

    // Affichage du mois et de l'année
    const header = `<div class="calendar-header">${currentMonth} ${currentYear}</div>`;

    // Générer le calendrier avec les jours
    let days = "<div class='calendar-days'>";
    const firstDay = new Date(currentYear, now.getMonth(), 1).getDay(); // Premier jour du mois
    const lastDay = new Date(currentYear, now.getMonth() + 1, 0).getDate(); // Dernier jour du mois

    // Ajouter des cases vides avant le premier jour du mois
    for (let i = 0; i < firstDay; i++) {
      days += "<div class='calendar-day empty'></div>";
    }

    // Ajouter les jours du mois
    for (let day = 1; day <= lastDay; day++) {
      days += `<div class='calendar-day${
        day === now.getDate() ? " today" : ""
      }'>${day}</div>`;
    }
    days += "</div>";

    calendarElement.innerHTML = header + days;
  }

  // Met à jour l'heure et affiche le calendrier
  setInterval(() => {
    updateTime();
    showCalendar();
  }, 1000);

  // Initialisation de l'affichage
  updateTime();
  showCalendar();
});
