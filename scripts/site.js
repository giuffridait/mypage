export async function loadJSON(path) {
  const response = await fetch(path);
  if (!response.ok) {
    throw new Error(`Failed to load ${path}`);
  }
  return response.json();
}

export function renderHeader(active) {
  const header = document.querySelector(".site-header");
  header.innerHTML = `
    <div class="brand">Laura Barbosa</div>
    <nav class="nav">
      <a href="/" ${active === "home" ? "aria-current=page" : ""}>Home</a>
      <a href="/projects/" ${active === "projects" ? "aria-current=page" : ""}>Projects</a>
      <a href="/personal/" ${active === "personal" ? "aria-current=page" : ""}>Personal</a>
      <a href="https://www.linkedin.com/in/laura-barbosa-a33b9614/" target="_blank" rel="noreferrer">LinkedIn</a>
      <a href="https://x.com/laurbarbos" target="_blank" rel="noreferrer">X</a>
      <a href="mailto:lauragiuffridabarbosa@gmail.com">Email me</a>
    </nav>
  `;
}

export function renderFooter() {
  const footer = document.querySelector(".footer");
  footer.textContent = "Built as a fast, static-first portfolio.";
}

export function createTagList(tags) {
  return tags
    .map((tag) => `<span class="tag">${tag}</span>`)
    .join("");
}
