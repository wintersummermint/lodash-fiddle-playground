window.lodashExample.random = {};

window.lodashExample.random.code = [
	'// Get a random number between 15 and 20.',
	'',
	'// Naive utility method',
	'function getRandomNumber(min, max){',
	'    return Math.floor(Math.random() * (max - min + 1)) + min;',
	'}',
	'',
	'getRandomNumber(15, 20);',
	'',
	'// Lodash',
	'let rand = _.random(15, 20);',
	'',
	'console.log(rand)'
].join('\n');

window.lodashExample.random.display = 'Random Function';
