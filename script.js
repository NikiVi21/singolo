// HEADER
const MENU = document.getElementById('menu')

MENU.addEventListener('click', (event) => {
	MENU.querySelectorAll('a').forEach(element => element.classList.remove('active'));
	event.target.classList.add('active');
});

//HEADER SCROLL
/*
document.addEventListener('scroll', onScroll);

function onScroll(event) {
	const cursorPos = window.scrollY;
	const divs = document.querySelectorAll('.scroll');
	const links = document.querySelectorAll('a');


divs.forEach((elem) => {
	if (elem.offsetTop <= cursorPos && (elem.offsetTop + elem.offsetHeight) > cursorPos) {
		links.forEach((a) => {
			a.classList.remove('active');
			if (elem.getAttribute('id') === a.getAttribute('href').substring(1)) {
				a.classList.add('active');
			}
		})
	}
});
}
*/

//SCREEN OFF/ON
const layer_h = document.getElementById('layer-h')
const layer_v = document.getElementById('layer-v')
const square_h = document.getElementById('square-h')
const square_v = document.getElementById('square-v')
const circle_v = document.getElementById('circle-v')
const circle_h = document.getElementById('circle-h')

square_h.addEventListener('click', (event) => {
	if (layer_h.classList.contains('none')) {
		layer_h.classList.remove('none');
	}
	else {
		layer_h.classList.add('none');
	}
});

square_v.addEventListener('click', (event) => {
	if (layer_v.classList.contains('none')) {
		layer_v.classList.remove('none');
	}
	else {
		layer_v.classList.add('none');
	}
});

circle_v.addEventListener('click', (event) => {
	if (layer_v.classList.contains('none')) {
		layer_v.classList.remove('none');
	}
	else {
		layer_v.classList.add('none');
	}
});

circle_h.addEventListener('click', (event) => {
	if (layer_h.classList.contains('none')) {
		layer_h.classList.remove('none');
	}
	else {
		layer_h.classList.add('none');
	}
});

//PORTFOLIO BORDER
const portf = document.getElementById('gallery')

portf.addEventListener('click', (event) => {
	portf.querySelectorAll('img').forEach(element => {
		element.classList.remove('border');
		if (event.target === element) {
			event.target.classList.add('border');
		}
	})
});