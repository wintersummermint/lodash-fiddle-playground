window.lodashExample.sortBy = {};

window.lodashExample.sortBy.code = [
	'',
	'let articles = [',
	'	{ article: 41,   quantity: 24 },',
	'	{ article: 2323, quantity: 2  },',
	'	{ article: 655,  quantity: 23 }',
	'];',   
	'',
	'let sortByArticles = _.sortBy(articles, function(item){',
	'	return -item.quantity;',
	'});',
	'console.log(JSON.stringify(sortByArticles));'
].join('\n');

window.lodashExample.sortBy.display = 'sortBy Collection';