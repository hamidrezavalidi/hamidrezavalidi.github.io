// Email address assembly and publication topic filters.
(function () {
  "use strict";

  // Build the mailto link at runtime so the address is not in the HTML source.
  document.querySelectorAll(".js-email").forEach(function (a) {
    var addr = a.dataset.user + "@" + a.dataset.domain;
    a.href = "mailto:" + addr;
    a.textContent = addr;
  });

  // Topic filters on the research page.
  var box = document.getElementById("pub-filters");
  if (!box) return;
  var chips = box.querySelectorAll(".chip");
  var groups = document.querySelectorAll("#journal .year-group");
  var count = document.getElementById("filter-count");
  var total = document.querySelectorAll("#journal .pub").length;
  box.hidden = false;

  function apply(topic) {
    var shown = 0;
    groups.forEach(function (g) {
      var any = false;
      g.querySelectorAll(".pub").forEach(function (li) {
        var tags = (li.dataset.tags || "").split(" ");
        var match = topic === "all" || tags.indexOf(topic) !== -1;
        li.hidden = !match;
        if (match) { any = true; shown += 1; }
      });
      g.hidden = !any;
    });
    chips.forEach(function (c) { c.setAttribute("aria-pressed", String(c.dataset.topic === topic)); });
    count.textContent = topic === "all" ? total + " articles" : shown + " of " + total + " articles";
  }

  chips.forEach(function (c) {
    c.addEventListener("click", function () { apply(c.dataset.topic); });
  });
  apply("all");
})();
