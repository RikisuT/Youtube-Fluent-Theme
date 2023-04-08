let button = document.querySelector('#guide-button');

// Allow transitions to play
button.addEventListener("click", () => {
  const guide = document.querySelector('#guide');
  guide.setAttribute("reveal-nav-bar", "");
});

// Re-arrange thumbnails
document.addEventListener('afterscriptexecute', () => {
  window.dispatchEvent(new Event('resize'));
});

// When URL changes, hide nav bar
const container = document.querySelector('#contentContainer');
new MutationObserver(mutations => {
  if (container.hasAttribute("opened")) {
    button.click();
  }
}).observe(document.querySelector('title'), { childList: true });

// Add 'homepage' class to header element if on homepage
const header = document.querySelector('div#header.ytd-app');
if (header) {
  function updateHeaderDisplay() {
    if (window.location.pathname === '/') {
      header.style.display = 'flex';
    } else {
      header.style.display = 'none';
    }
    requestAnimationFrame(updateHeaderDisplay);
  }
  updateHeaderDisplay();
}
