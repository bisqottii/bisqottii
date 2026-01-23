document.addEventListener("DOMContentLoaded", () => {
  // ==============================
  // NUMBERS STATION
  // ==============================
  const numbers = document.querySelector('.numbers');
  function updateNumbers() {
    const lines = [];
    for(let i=0;i<4;i++){
      const row = [];
      for(let j=0;j<5;j++){
        row.push(Math.floor(Math.random()*100).toString().padStart(2,'0'));
      }
      lines.push(row.join(' '));
    }
    numbers.textContent = lines.join('\n');
  }
  updateNumbers(); // render immediately
  setInterval(updateNumbers, 400);

  // ==============================
  // START-UP SCREEN / CRT SWEEP
  // ==============================
  const screen = document.querySelector(".start-up-screen");
  if (!screen) return;

  // Only show once per session
  if (sessionStorage.getItem("startupShown")) {
    screen.remove();
    document.querySelectorAll(".glitch-in").forEach(el => el.classList.add("active"));
    return;
  }

  sessionStorage.setItem("startupShown", "true");

  // Animate sweep
  setTimeout(() => {
    screen.classList.add("sweep");

    setTimeout(() => {
      screen.style.transition = "opacity 1s ease";
      screen.style.opacity = "0";

      setTimeout(() => {
        screen.remove();

        // Activate UI
        document.querySelectorAll(".glitch-in").forEach(el => {
          setTimeout(() => el.classList.add("active"), Math.random() * 200);
        });

      }, 400);
    }, 600);
  }, 200);
});
