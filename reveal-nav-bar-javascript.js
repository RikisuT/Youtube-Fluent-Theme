document.getElementById('guide').style.display = 'none';

document.getElementById('guide-button').addEventListener('click', () => {
	document.getElementById('guide').style.display = 'block';
});

document.addEventListener('afterscriptexecute', () => {
	window.dispatchEvent(new Event('resize'));
});