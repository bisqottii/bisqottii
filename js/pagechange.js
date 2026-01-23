// Smooth fade on link click
document.querySelectorAll('a.glitch').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const href = link.getAttribute('href');

    document.body.style.opacity = 0;

    setTimeout(() => {
      window.location.href = href;
    }, 40);
  });
});

// Fade in on load
window.addEventListener('DOMContentLoaded', () => {
  document.body.style.opacity = 1;
  document.body.classList.add('fade-in');

  document.querySelectorAll('.glitch-in').forEach(el => {
    const delay = Math.random() * 600 + 40;
    setTimeout(() => el.classList.add('active'), delay);
  });
});

// Handle back/forward cache navigation
window.addEventListener('pageshow', e => {
  if (e.persisted) {
    document.body.style.opacity = 1;
  }
});
