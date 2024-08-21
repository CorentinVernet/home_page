document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search");

  function searchWeb() {
    const query = searchInput.value.trim();
    if (query) {
      window.location.href = `https://www.google.com/search?q=${encodeURIComponent(
        query
      )}`;
      searchInput.value = "";
    }
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      if (document.activeElement === searchInput) {
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

  displayShortcuts();
});
