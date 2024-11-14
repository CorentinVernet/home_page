function updateTime() {
  const dateTimeElement = document.getElementById("date-time");
  const now = new Date();

  const formattedTime = now.toLocaleTimeString("fr-FR");

  dateTimeElement.innerHTML = `
    <div class="time">${formattedTime}</div>
  `;
}

setInterval(updateTime, 1000);
