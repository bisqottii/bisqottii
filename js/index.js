    // ==============================
    // NUMBERS STATION
    // ==============================
    const numbers = document.querySelector('.numbers');
    function updateNumbers() {
      const lines = [];
      for(let i=0;i<4;i++){
        const row = [];
        for(let j=0;j<5;j++){ row.push(Math.floor(Math.random()*100).toString().padStart(2,'0')); }
        lines.push(row.join(' '));
      }
      numbers.textContent = lines.join('\n');
    }
    setInterval(updateNumbers, 400);











if (!sessionStorage.getItem("codBriefingShown")) {
  sessionStorage.setItem("codBriefingShown", "true");
  document.body.classList.add("briefing");

  const lines = [
    "TASK FORCE 477 // SECURE CHANNEL ESTABLISHED",
    "",
    "LOCATION: VANCOUVER, B.C.",
    "MISSION: BRIEFING",
    "",
    "OBJECTIVE:",
    "- REVIEW SUBJECT FILES",
    "- ANALYZE OPERATIONS",
    "- MAINTAIN RADIO SILENCE",
    "",
    "STATUS: STANDING BY"
  ];

  const textEl = document.getElementById("briefing-text");
  const briefing = document.getElementById("briefing");

  let lineIndex = 0;
  let charIndex = 0;

  // Create a single block cursor
  const cursor = document.createElement("span");
  cursor.className = "typing-block";
  cursor.textContent = "█";
  textEl.appendChild(cursor);

  function typeLine() {
    if (lineIndex >= lines.length) {
      // Start blinking after a short delay
      setTimeout(() => cursor.classList.add("blink"), 0);

      // End briefing after a bit
      setTimeout(endBriefing, 3400);
      return;
    }

    const currentLine = lines[lineIndex];

    // Handle empty line
    if (currentLine === "") {
      textEl.insertBefore(document.createElement("br"), cursor);
      lineIndex++;
      charIndex = 0;
      setTimeout(typeLine, 500);
      return;
    }

    if (charIndex < currentLine.length) {
      const char = currentLine[charIndex];
      const textNode = document.createTextNode(char);
      cursor.parentNode.insertBefore(textNode, cursor);

      charIndex++;

      // Cursor solid while typing
      cursor.classList.remove("blink");

      const delay = char === "." ? 160 : 55 + Math.random() * 40;
      setTimeout(typeLine, delay);

    } else {
      // End of line
      textEl.insertBefore(document.createElement("br"), cursor);
      lineIndex++;
      charIndex = 0;
      setTimeout(typeLine, 420);
    }
  }

  function endBriefing() {
    briefing.classList.add("sweep");

    setTimeout(() => {
      briefing.style.transition = "opacity 0.4s ease";
      briefing.style.opacity = "0";

      setTimeout(() => {
        briefing.remove();
        document.body.classList.remove("briefing");

        // Activate glitch-in elements
        document.querySelectorAll(".glitch-in").forEach(el => {
          const delay = Math.random() * 220 + 60;
          setTimeout(() => el.classList.add("active"), delay);
        });


      }, 400);
    }, 600);
  }

  window.addEventListener("DOMContentLoaded", typeLine);

} else {
  document.getElementById("briefing")?.remove();
}
