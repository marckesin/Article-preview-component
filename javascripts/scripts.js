const tooltip = document.querySelector(".social-desktop");

document.getElementById("share").addEventListener("mouseenter", event => {
  tooltip.classList.add("social-visible");
});

document.getElementById("share").addEventListener("mouseleave", event => {
  tooltip.classList.remove("social-visible");
});
