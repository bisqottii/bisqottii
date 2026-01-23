const searchBox = document.getElementById("searchBox");
const sortSelect = document.getElementById("sortSelect");
const articles = document.querySelectorAll(".file-card");
const tagLinks = document.querySelectorAll(".search-tags a");
const content = document.querySelector(".content");

/* TAG COUNTS */
const tagCounts = {};
articles.forEach(a =>
  a.dataset.tags.split(" ").forEach(t =>
    tagCounts[t] = (tagCounts[t] || 0) + 1
  )
);
tagLinks.forEach(l => {
  const t = l.dataset.tag;
  if (tagCounts[t]) l.textContent += ` (${tagCounts[t]})`;
});

/* HIGHLIGHT */
function highlight(text, q) {
  if (!q) return text;
  return text.replace(new RegExp(`(${q})`, "gi"), "<mark>$1</mark>");
}

/* SEARCH */
searchBox.addEventListener("input", e => {
  const q = e.target.value.toLowerCase();
  articles.forEach(a => {
    const h = a.querySelector("h3");
    const title = a.dataset.title;
    const match = title.toLowerCase().includes(q) ||
                  a.dataset.tags.includes(q);
    a.style.display = match ? "" : "none";
    h.innerHTML = highlight(title, q);
  });
});

/* TAG FILTER */
tagLinks.forEach(l => l.addEventListener("click", e => {
  e.preventDefault();
  const tag = l.dataset.tag;
  articles.forEach(a =>
    a.style.display =
      tag === "all" || a.dataset.tags.includes(tag) ? "" : "none"
  );
}));

/* SORT */
sortSelect.addEventListener("change", () => {
  [...articles]
    .sort((a, b) =>
      new Date(b.dataset.date) - new Date(a.dataset.date)
    )
    .forEach(a => content.appendChild(a));
});
