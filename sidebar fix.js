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
