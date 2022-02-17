const socialDesktop = document.querySelector(".social-desktop");
const socialMobile = document.querySelector(".social-mobile");
const share = document.getElementById("share");
const shareIcon = document.querySelector(".icon-color");

window.addEventListener("resize", () => {
  socialDesktop.classList.remove("social-visible");
  socialMobile.classList.remove("social-visible");
  share.style.backgroundColor = "hsl(210, 46%, 95%)";
  shareIcon.style.fill = "hsl(214, 17%, 51%)";
});

share.addEventListener("mouseover", event => {
  socialDesktop.classList.add("social-visible");
  event.preventDefault();
});

share.addEventListener("mouseleave", event => {
  socialDesktop.classList.remove("social-visible");
  event.preventDefault();
});

share.addEventListener("touchstart", event => {
  socialMobile.classList.add("social-visible");
  share.style.backgroundColor = "hsl(214, 17%, 51%)";
  shareIcon.style.fill = "white";
  event.preventDefault();
});

socialMobile.addEventListener("touchstart", event => {
  socialMobile.classList.remove("social-visible");
  share.style.backgroundColor = "hsl(210, 46%, 95%)";
  shareIcon.style.fill = "hsl(214, 17%, 51%)";
  event.preventDefault();
});
