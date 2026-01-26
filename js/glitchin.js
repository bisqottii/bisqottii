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
