function loadProjects() {
  const tbody = document.getElementById("data-body");
  projects.forEach(p => {
    const row = document.createElement("tr");
    row.className = `risk-${p.risk}`;

    row.innerHTML = `
      <td>${p.name}</td>
      <td>${p.cod}</td>
      <td>${p.acceptance}</td>
      <td>${p.fit}</td>
      <td>${p.risk.replace("_", " ").toUpperCase()}</td>
      <td>${p.recommendation}</td>
    `;
    tbody.appendChild(row);
  });
}

document.addEventListener("DOMContentLoaded", loadProjects);

