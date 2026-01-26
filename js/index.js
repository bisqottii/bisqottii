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

});
