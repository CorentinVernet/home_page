function searchWeb() {
  const query = document.getElementById("search").value.trim();
  if (query) {
    window.open(
      `https://www.google.com/search?q=${encodeURIComponent(query)}`,
      "_blank"
    );
    document.getElementById("search").value = "";
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
  const template = document.getElementById("shortcut-template").content;
  shortcutsDiv.innerHTML = "<h2>Vos raccourcis</h2>";
  const shortcuts = loadShortcuts();

  shortcuts.forEach(({ name, url }, index) => {
    const shortcutElement = template.cloneNode(true);

    const linkElement = shortcutElement.querySelector(".shortcut-link");
    linkElement.href = url;
    linkElement.textContent = name;

    const deleteButton = shortcutElement.querySelector(".delete-button");
    deleteButton.onclick = () => removeShortcut(index);

    shortcutsDiv.appendChild(shortcutElement);
  });
}

function addShortcut() {
  const name = document.getElementById("shortcut-name").value.trim();
  const url = document.getElementById("shortcut-url").value.trim();

  if (name && url && isValidURL(url)) {
    const shortcuts = loadShortcuts();
    shortcuts.push({ name, url });
    saveShortcuts(shortcuts);
    displayShortcuts();

    document.getElementById("shortcut-name").value = "";
    document.getElementById("shortcut-url").value = "";
  } else {
    alert("Veuillez entrer une URL valide.");
  }
}

function isValidURL(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

function removeShortcut(index) {
  const shortcuts = loadShortcuts();
  shortcuts.splice(index, 1);
  saveShortcuts(shortcuts);
  displayShortcuts();
}

function handleKeyPress(event) {
  if (event.key === "Enter") {
    if (document.activeElement.id === "search") {
      searchWeb();
    } else if (
      document.activeElement.id === "shortcut-name" ||
      document.activeElement.id === "shortcut-url"
    ) {
      addShortcut();
    }
  }
}

document.addEventListener("keypress", handleKeyPress);

window.onload = displayShortcuts;
