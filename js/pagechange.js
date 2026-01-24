// Smooth fade on link click
document.querySelectorAll('a.glitch').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const href = link.getAttribute('href');

        document.body.style.transition = "opacity 0.5s ease";
        document.body.style.opacity = "0";

        setTimeout(() => {
            window.location.href = href;
        }, 500);
    });
});

// Restore page when navigating back
window.addEventListener("pageshow", () => {
    document.body.style.opacity = "1";
});
