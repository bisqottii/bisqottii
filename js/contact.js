document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const submitBtn = form.querySelector("button[type='submit']");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // prevent page reload

        // Store original button styles
        const originalText = submitBtn.textContent;
        const originalBg = submitBtn.style.background;
        const originalColor = submitBtn.style.color;
        const originalBoxShadow = submitBtn.style.boxShadow;

        // Change button to SUCCESS
        submitBtn.textContent = "SUCCESS";
        submitBtn.style.background = "rgba(0,255,0,0.2)";
        submitBtn.style.color = "#0f0";
        submitBtn.style.boxShadow = "0 0 12px rgba(0,255,0,0.5)";
        submitBtn.disabled = true; // disable clicking

        // Optional: CRT-style flicker/glow animation
        submitBtn.style.animation = "crt-glow 0.3s infinite alternate";

        // Clear the form immediately
        form.reset();

        // Restore button after 3 seconds
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.style.background = originalBg;
            submitBtn.style.color = originalColor;
            submitBtn.style.boxShadow = originalBoxShadow;
            submitBtn.disabled = false;
            submitBtn.style.animation = ""; // remove glow
        }, 3000);
    });
});
