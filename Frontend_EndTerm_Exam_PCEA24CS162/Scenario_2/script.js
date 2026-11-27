document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("theme-toggle");
  const body = document.body;

  if (!toggleButton) {
    console.warn("Theme toggle button (#theme-toggle) not found.");
    return;
  }

  function getSavedTheme() {
    try {
      return localStorage.getItem("theme");
    } catch {
      return null;
    }
  }

  function saveTheme(theme) {
    try {
      localStorage.setItem("theme", theme);
    } catch {
      // Ignore storage errors on restricted origins
    }
  }

  if (getSavedTheme() === "dark") {
    body.classList.add("dark");
    toggleButton.textContent = "Light mode";
  }

  toggleButton.addEventListener("click", () => {
    const isDark = body.classList.toggle("dark");
    toggleButton.textContent = isDark ? "Light mode" : "Dark mode";
    saveTheme(isDark ? "dark" : "light");
  });
});