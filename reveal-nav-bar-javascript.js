let guide = document.querySelector('#guide');
let container = document.querySelector('#contentContainer');
let button = document.querySelector('#guide-button');

//Hides nav bar when loaded

guide.removeAttribute("guide-persistent-and-visible");
guide.removeAttribute("opened");
guide.setAttribute("mini-guide-visible", "");
container.removeAttribute("opened");

//Allow transitions to play

button.addEventListener("click", () => guide.setAttribute("reveal-nav-bar", ""));

//Re-arrange thumbnails

document.addEventListener('afterscriptexecute', () => window.dispatchEvent(new Event('resize')));

//When URL changes, hide nav bar

new MutationObserver(mutations => {
    if (container.hasAttribute("opened")) button.click();
}).observe(document.querySelector('title'), { childList: true });

(function() {
  'use strict';

  const header = document.querySelector('div#header.ytd-app');

  if (header) {
    function updateHeaderDisplay() {
      if (window.location.pathname === '/') {
        header.style.display = 'none';
      } else {
        header.style.display = 'flex';
      }
      requestAnimationFrame(updateHeaderDisplay);
    }
    updateHeaderDisplay();
  }
})();
