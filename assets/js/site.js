// Wired Village — shared site behaviour (no frameworks)
document.addEventListener("DOMContentLoaded", function () {
  // if the URL points at a <details> element (a collapsed section or a
  // challenge's hint/guide), open it and scroll to it
  if (location.hash) {
    var target = document.querySelector(location.hash);
    if (target && target.tagName === "DETAILS") {
      target.open = true;
      setTimeout(function () { target.scrollIntoView({ behavior: "smooth", block: "start" }); }, 50);
    }
  }

  // whole-row navigation for index-table rows marked with data-href
  document.querySelectorAll("tr[data-href]").forEach(function (row) {
    row.addEventListener("click", function (e) {
      if (e.target.closest("a")) return; // let a real link inside still work normally
      window.location.href = row.getAttribute("data-href");
    });
  });
});
