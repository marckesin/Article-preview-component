const tooltip = document.querySelector(".social");

document.getElementById("share").addEventListener("mouseenter", event => {
  tooltip.classList.add("social-visible");
});

document.getElementById("share").addEventListener("mouseleave", event => {
  tooltip.classList.remove("social-visible");
});
