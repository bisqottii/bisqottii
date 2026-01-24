// Smooth fade on link click
document.querySelectorAll('a.glitch').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const href = link.getAttribute('href');

        // Fade out the current page
        document.body.style.opacity = 0;

        // Navigate after fade-out
        setTimeout(() => {
        window.location.href = href;
        }, 40);
    });
});

window.addEventListener('DOMContentLoaded', () => {
    const elements = Array.from(document.querySelectorAll('.glitch-in'));

    elements.forEach(el => {
        // Random delay between 40ms and 640ms
        const delay = Math.random() * 600 + 40;

        setTimeout(() => {
        el.classList.add('active');
        }, delay);
    });
});

// Restore page when navigating back
window.addEventListener("pageshow", () => {
    document.body.style.opacity = "1";
});
