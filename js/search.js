const searchBox = document.getElementById("searchBox");
const sortSelect = document.getElementById("sortSelect");
const articles = document.querySelectorAll(".file-card");
const tagLinks = document.querySelectorAll(".search-tags a");
const content = document.querySelector(".content");

/* ======================================================
   TAG COUNTS
====================================================== */
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

/* ======================================================
   HIGHLIGHT FUNCTION
====================================================== */
function highlight(text, q) {
  if (!q) return text;
  return text.replace(new RegExp(`(${q})`, "gi"), "<mark>$1</mark>");
}

/* ======================================================
   NO RESULTS ELEMENT
====================================================== */
let noResults = document.createElement("p");
noResults.textContent = "No results found";
noResults.style.textAlign = "center";
noResults.style.fontStyle = "italic";
noResults.style.color = "#cfd9df"; // match your theme
noResults.style.display = "none"; // hidden by default
content.appendChild(noResults);

/* ======================================================
   SEARCH
====================================================== */
searchBox.addEventListener("input", e => {
  const q = e.target.value.toLowerCase();
  let hasMatch = false;

  articles.forEach(a => {
    const title = a.dataset.title.toLowerCase();
    const tags = a.dataset.tags.toLowerCase();
    const match = title.includes(q) || tags.includes(q);

    a.style.display = match ? "" : "none";
    if (match) hasMatch = true;

    const h = a.querySelector("h3");
    h.innerHTML = highlight(a.dataset.title, q);
  });

  // Show/hide "No results" message
  noResults.style.display = hasMatch ? "none" : "";
});

/* ======================================================
   TAG FILTER
====================================================== */
tagLinks.forEach(l => l.addEventListener("click", e => {
  e.preventDefault();
  const tag = l.dataset.tag;
  let hasMatch = false;

  articles.forEach(a => {
    const match = tag === "all" || a.dataset.tags.includes(tag);
    a.style.display = match ? "" : "none";
    if (match) hasMatch = true;
  });

  // Show/hide "No results" message for tag filter
  noResults.style.display = hasMatch ? "none" : "";
}));

/* ======================================================
   SORT
====================================================== */
sortSelect.addEventListener("change", () => {
  [...articles]
    .sort((a, b) =>
      new Date(b.dataset.date) - new Date(a.dataset.date)
    )
    .forEach(a => content.appendChild(a));
});
