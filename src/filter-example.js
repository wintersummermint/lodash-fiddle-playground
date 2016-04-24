window.lodashExample.filter = {};

window.lodashExample.filter.code = [
	'let characters = [',
	'{ \'name\': \'barney\', \'age\': 36, \'pets\': [\'hoppy\'] },',
	'{ \'name\': \'fred\',   \'age\': 40, \'pets\': [\'baby puss\', \'dino\'] }',
	'];',   
	'',
	'let filterAge = _.filter(characters, { \'age\': 36 });',
	'console.log(JSON.stringify(filterAge));'
].join('\n');

window.lodashExample.filter.display = 'Filter Collection';
