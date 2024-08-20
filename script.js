function searchWeb() {
  const query = document.getElementById("search").value;
  if (query) {
    window.open(`https://www.google.com/search?q=${query}`, "_blank");
    document.getElementById("search").value = "";
  }
}

function addShortcut() {
  const name = document.getElementById("shortcut-name").value;
  const url = document.getElementById("shortcut-url").value;

  if (name && url) {
    const shortcutsDiv = document.getElementById("shortcuts");

    const shortcutElement = document.createElement("div");
    shortcutElement.className = "shortcut";

    const linkElement = document.createElement("a");
    linkElement.href = url;
    linkElement.target = "_blank";
    linkElement.textContent = name;

    shortcutElement.appendChild(linkElement);

    shortcutsDiv.appendChild(shortcutElement);

    document.getElementById("shortcut-name").value = "";
    document.getElementById("shortcut-url").value = "";
  } else {
    alert("Veuillez entrer un nom et une URL pour le raccourci.");
  }
}

function saveShortcuts(shortcuts) {
  localStorage.setItem("shortcuts", JSON.stringify(shortcuts));
}

function loadShortcuts() {
  const shortcuts = localStorage.getItem("shortcuts");
  return shortcuts ? JSON.parse(shortcuts) : [];
}

function displayShortcuts() {
  const shortcutsDiv = document.getElementById("shortcuts");
  shortcutsDiv.innerHTML = "<h2>Vos raccourcis</h2>";

  const shortcuts = loadShortcuts();
  shortcuts.forEach(({ name, url }, index) => {
    const shortcutElement = document.createElement("div");
    shortcutElement.className = "shortcut";

    const linkElement = document.createElement("a");
    linkElement.href = url;
    linkElement.target = "_blank";
    linkElement.textContent = name;

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.innerHTML = '<img src="poubelle.png" alt="Supprimer">';

    deleteButton.onclick = function () {
      removeShortcut(index);
    };

    shortcutElement.appendChild(linkElement);
    shortcutElement.appendChild(deleteButton);
    shortcutsDiv.appendChild(shortcutElement);
  });
}

function addShortcut() {
  const name = document.getElementById("shortcut-name").value;
  const url = document.getElementById("shortcut-url").value;

  if (name && url) {
    const shortcuts = loadShortcuts();
    shortcuts.push({ name, url });
    saveShortcuts(shortcuts);
    displayShortcuts();

    document.getElementById("shortcut-name").value = "";
    document.getElementById("shortcut-url").value = "";
  } else {
    alert("Veuillez entrer un nom et une URL pour le raccourci.");
  }
}

function removeShortcut(index) {
  let shortcuts = loadShortcuts();
  shortcuts.splice(index, 1);
  saveShortcuts(shortcuts);
  displayShortcuts();
}

function handleKeyPress(event, action) {
  if (event.key === "Enter") {
    action();
  }
}

document
  .getElementById("search")
  .addEventListener("keypress", (event) => handleKeyPress(event, searchWeb));
document
  .getElementById("shortcut-name")
  .addEventListener("keypress", (event) => handleKeyPress(event, addShortcut));
document
  .getElementById("shortcut-url")
  .addEventListener("keypress", (event) => handleKeyPress(event, addShortcut));

window.onload = displayShortcuts;
