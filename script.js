// HEADER
const MENU = document.getElementById('menu')

MENU.addEventListener('click', (event) => {
	MENU.querySelectorAll('a').forEach(element => element.classList.remove('active'));
	event.target.classList.add('active');
});

//SCREEN OFF/ON
const layer_h = document.getElementById('layer-h')
const layer_v = document.getElementById('layer-v')
const square_h = document.getElementById('square-h')
const square_v = document.getElementById('square-v')

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