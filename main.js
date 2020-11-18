const $btn = document.getElementById('btn-kick');
const $fire = document.getElementById('btn-fire');
const $ball = document.getElementById('btn-ball');

const character = {
	name: 'Pikachu',
	defaultHP: 100,
	damageHP: 100,
	elHP: document.getElementById('health-character'),
	elProgressbar: document.getElementById('progressbar-character'),
}

const enemy = {
	name: 'Charmander',
	defaultHP: 100,
	damageHP: 100,
	elHP: document.getElementById('health-enemy'),
	elProgressbar: document.getElementById('progressbar-enemy'),
}

$btn.addEventListener('click', function () {
	console.log('Kick');
	changeHP(random(20), character);
	changeHP(random(20), enemy);
});

$fire.addEventListener('click', function () {
	console.log('Kick');
	changeHP(random(60), character);
	changeHP(random(66), enemy);
});

$ball.addEventListener('click', function () {
	console.log('Kick');
	changeHP(random(99), character);
	changeHP(random(99), enemy);
});

function init() {
	console.log('Start game!');
	renderHP(character);
	renderHP(enemy);
}

function renderHP(person) {
	renderHPlife(person);
	renderProgressbarHP(person);

}

function renderHPlife(person) {
	person.elHP.innerText = person.damageHP + ' / ' + person.defaultHP;
}

function renderProgressbarHP(person) {
	person.elProgressbar.style.width = person.damageHP + '%';
}

function changeHP(count, person) {
	if (person.damageHP < count) {
		person.damageHP = 0;
		alert('Бедный ' + person.name + ' проиграл бой!');
		$btn.disabled = true;
	} else {
		person.damageHP -= count;
	}

	renderHP(person);
}

function random(num) {
	return Math.ceil(Math.random() * num)

}

init();