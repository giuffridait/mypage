import { loadJSON, renderHeader, renderFooter } from "/scripts/site.js";

export async function renderProjectPage(projectId) {
  renderHeader("projects");
  renderFooter();

  const data = await loadJSON("/content/projects.json");
  const project = data.projects.find((item) => item.id === projectId);

  if (!project) {
    document.getElementById("project-detail").innerHTML =
      "<p>Project not found.</p>";
    return;
  }

  document.getElementById("project-title").textContent = project.title;

  const detail = document.getElementById("project-detail");
  detail.innerHTML = `
    <div class="detail-section">
      <h3>Problem</h3>
      <p>${project.problem}</p>
    </div>
    <div class="detail-section">
      <h3>Target user</h3>
      <p>${project.targetUser}</p>
    </div>
    <div class="detail-section">
      <h3>Solution (MVP scope)</h3>
      <p>${project.solution}</p>
    </div>
    <div class="detail-section">
      <h3>Architecture (lightweight)</h3>
      <p>${project.architecture}</p>
    </div>
    <div class="detail-section">
      <h3>Key decisions & tradeoffs</h3>
      <p>${project.decisions}</p>
    </div>
    <div class="detail-section">
      <h3>Next steps</h3>
      <p>${project.nextSteps}</p>
    </div>
    <div class="detail-section">
      <h3>Demo / Link</h3>
      <a href="${project.demoLink}" target="_blank" rel="noreferrer">${project.demoLink}</a>
    </div>
  `;

}
