let guide = document.querySelector('#guide');
let container = document.querySelector('#contentContainer');
let button = document.querySelector('#guide-button');

guide.removeAttribute("guide-persistent-and-visible");
guide.removeAttribute("opened");
guide.setAttribute("mini-guide-visible", "");
container.removeAttribute("opened");

button.addEventListener("click", () => {
  guide.setAttribute("reveal-nav-bar", "");
});

document.addEventListener('afterscriptexecute', () => {
  window.dispatchEvent(new Event('resize'));
});