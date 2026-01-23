
    // ==============================
    // ATMOSPHERE & GRAIN MOVEMENT
    // ==============================
    const atmosphere = document.querySelector('.atmosphere');
    function animateLayers() {
        const t = Date.now()*0.001;
        atmosphere.style.transform = `translate(${Math.sin(t)*3}px, ${Math.cos(t)*3}px)`;
        requestAnimationFrame(animateLayers);
    }
    animateLayers();

    // ==============================
    // TITLE GLITCH
    // ==============================
    const title = document.querySelector('.title');
    title.dataset.original = title.textContent;

    function titleGlitch() {
        const chars = title.dataset.original.split('');
        const glitchChars = chars.map(c => {
            if (Math.random() < 0.01) { // 1% chance to glitch each character
            return Math.random() < 0.5 ? '█' : Math.floor(Math.random() * 9);
            }
            return c;
        });
        title.textContent = glitchChars.join('');
        // Restore original text shortly after
        setTimeout(() => {
            title.textContent = title.dataset.original;
        }, 120);
    }

    // Run glitch effect repeatedly
    setInterval(titleGlitch, 200);