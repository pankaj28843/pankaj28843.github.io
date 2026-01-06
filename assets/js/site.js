const toggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("site-nav");
const overlay = document.querySelector(".nav-overlay");
const themeToggle = document.querySelector(".theme-toggle");

if (toggle && nav) {
  const closeNav = () => {
    document.body.classList.remove("nav-open");
    toggle.setAttribute("aria-expanded", "false");
  };

  toggle.addEventListener("click", () => {
    const isOpen = document.body.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeNav);
  });

  if (overlay) {
    overlay.addEventListener("click", closeNav);
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeNav();
    }
  });
}

if (themeToggle) {
  const themeLabel = themeToggle.querySelector(".theme-toggle-label");
  const storageKey = "theme";
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const readStoredTheme = () => {
    try {
      return localStorage.getItem(storageKey);
    } catch (error) {
      return null;
    }
  };

  const getSystemTheme = () => (mediaQuery.matches ? "dark" : "light");

  const applyTheme = (theme, persist) => {
    document.documentElement.setAttribute("data-theme", theme);
    themeToggle.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
    if (themeLabel) {
      themeLabel.textContent = theme === "dark" ? "Dark" : "Light";
    }
    if (persist) {
      try {
        localStorage.setItem(storageKey, theme);
      } catch (error) {
        // no-op
      }
    }
  };

  const storedTheme = readStoredTheme();
  if (storedTheme === "light" || storedTheme === "dark") {
    applyTheme(storedTheme, false);
  } else {
    applyTheme(getSystemTheme(), false);
  }

  themeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme") || getSystemTheme();
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    applyTheme(nextTheme, true);
  });

  mediaQuery.addEventListener("change", (event) => {
    if (readStoredTheme()) {
      return;
    }
    applyTheme(event.matches ? "dark" : "light", false);
  });
}
