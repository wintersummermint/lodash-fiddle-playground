window.lodashExample.cls = {};

window.lodashExample.cls.code = [
    'class Polygon {',
    '\tconstructor(height, width) { //class constructor',
    '\t\tthis.name = \'Polygon\';',
    '\t\tthis.height = height;',
    '\t\tthis.width = width;',
    '\t}',
    '',
    '\tsayName() { //class method',
    '\t\tconsole.log(\'Hi, I am a\', this.name + \'.\');',
    '\t}',
    '}',
    '',
    'class Square extends Polygon {',
    '\tconstructor(length) {',
    '\t\tsuper(length, length); //call the parent method with super',
    '\t\tthis.name = \'Square\';',
    '\t}',
    '',
    '\tget area() { //calculated attribute getter',
    '\t\treturn this.height * this.width;',
    '\t}',
    '}',
    '',
    'let s = new Square(5);',
    '',
    's.sayName();',
    'console.log(s.area);',
    ''
].join('\n');

window.lodashExample.cls.display = 'Classes and Inheritance';
