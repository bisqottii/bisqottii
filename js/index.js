// ==============================
// UI ACTIVATION FUNCTION
// ==============================
function activateUI() {
  // Remove startup screen if it exists
  const screen = document.querySelector(".start-up-screen");
  if (screen) screen.remove();

  // Activate glitch-in elements
  document.querySelectorAll(".glitch-in").forEach(el => {
    setTimeout(() => el.classList.add("active"), Math.random() * 200);
  });

  // Make body visible if using fade-in CSS
  document.body.classList.add("fade-in");
}

// ==============================
// DOM CONTENT LOADED
// ==============================
document.addEventListener("DOMContentLoaded", () => {

  // --- NUMBERS STATION ---
  const numbers = document.querySelector('.numbers');
  if (numbers) {
    function updateNumbers() {
      const lines = [];
      for (let i = 0; i < 4; i++) {
        const row = [];
        for (let j = 0; j < 5; j++) {
          row.push(Math.floor(Math.random() * 100).toString().padStart(2,'0'));
        }
        lines.push(row.join(' '));
      }
      numbers.textContent = lines.join('\n');
    }
    updateNumbers(); // render immediately
    setInterval(updateNumbers, 400);
  }

  // --- START-UP SCREEN / CRT SWEEP ---
  const screen = document.querySelector(".start-up-screen");

  // Only show startup screen once per session
  if (screen && !sessionStorage.getItem("startupShown")) {
    sessionStorage.setItem("startupShown", "true");

    setTimeout(() => {
      screen.classList.add("sweep");

      setTimeout(() => {
        screen.style.transition = "opacity 1s ease";
        screen.style.opacity = 0;

        setTimeout(() => {
          activateUI();
        }, 400);
      }, 600);
    }, 200);
  } else {
    // If startup screen is already shown or missing
    activateUI();
  }
});

// ==============================
// HANDLE BACK/FORWARD NAVIGATION
// ==============================
window.addEventListener("pageshow", (event) => {
  if (event.persisted) {
    // Page restored from back/forward cache
    activateUI();
  }
});
