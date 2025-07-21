// products-render.js

document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab-buttons button");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(btn => btn.classList.remove("active"));
      tab.classList.add("active");

      contents.forEach(content => content.classList.remove("active"));
      const selected = document.getElementById(tab.dataset.tab);
      if (selected) selected.classList.add("active");
    });
  });

  for (const id in productData) {
    const section = productData[id];
    const container = document.getElementById(id);
    if (container && section) {
      container.innerHTML = renderTab(section);
    }
  }
});

function renderTab({ intro, health = [], menu = [] }) {
  let html = '';

  if (intro) {
    html += `<div class="intro-message">${intro}</div>`;
  }

  if (health.length) {
    html += `<div class="health-benefits"><h3>Why This Matters</h3><ul>`;
    health.forEach(item => {
      html += `<li>${item}</li>`;
    });
    html += `</ul></div>`;
  }

  if (menu.length) {
    html += `<details><summary>View Full Menu</summary>`;
    menu.forEach(section => {
      html += `<h4>${section.title}</h4>`;
      if (section.note) html += `<p><em>${section.note}</em></p>`;
      if (section.items && section.items.length) {
        html += `<ul>`;
        section.items.forEach(item => {
          html += `<li>${item}</li>`;
        });
        html += `</ul>`;
      }
    });
    html += `</details>`;
  }

  return html;
}
