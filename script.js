// HEADER
const MENU = document.getElementById('menu')

MENU.addEventListener('click', (event) => {
	MENU.querySelectorAll('a').forEach(element => element.classList.remove('active'));
	event.target.classList.add('active');
});
