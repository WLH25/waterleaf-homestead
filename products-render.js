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

  const products = {
    turkeys: window.turkeyContent,
    chickens: window.chickenContent,
    eggs: window.eggContent,
    rewards: window.rewardsContent,
    market: window.marketContent
  };

  for (const id in products) {
    const container = document.getElementById(id);
    if (container && products[id]) {
      container.innerHTML = renderTab(products[id]);
    }
  }
});

function renderTab({ intro, benefits = [], menu = "" }) {
  let html = '';

  if (intro) {
    html += `<div class="intro-message">${intro}</div>`;
  }

  if (benefits.length) {
    html += `<div class="health-benefits"><h3>Why This Matters</h3><ul>`;
    benefits.forEach(b => {
      html += `<li>${b}</li>`;
    });
    html += `</ul></div>`;
  }

  if (menu) {
    html += `<details><summary>View Full Menu</summary>${menu}</details>`;
  }

  return html;
}
