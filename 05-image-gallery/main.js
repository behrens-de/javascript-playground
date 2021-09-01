/**
 * JP BEHRENS - (jpbehrens.de@gmail.com)
 * Javascript Image Gallery Panels
 */
const panels = document.querySelectorAll(".panel");

function toggleOpen() {
  if (this.className.includes("open")) {
    this.classList.remove("open");
  } else {
    panels.forEach((panel) => panel.classList.remove("open"));
    this.classList.add("open");
  }
}

function toggleActive(e) {
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}

panels.forEach((panel) => panel.addEventListener("click", toggleOpen));
panels.forEach((panel) =>
  panel.addEventListener("transitionend", toggleActive)
);
