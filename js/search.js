const searchInput = document.getElementById("search");

function handleSearch(event) {
  if (event.key === "Enter") {
    const query = searchInput.value.trim();
    if (query) {
      const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(
        query
      )}`;
      window.location.href = searchUrl;
    }
  }
}

searchInput.addEventListener("keydown", handleSearch);
