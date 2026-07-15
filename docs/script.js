// Mobile navigation toggle
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });
}

// Optional: close mobile nav after clicking a link
document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu?.classList.remove("open");
  });
});
