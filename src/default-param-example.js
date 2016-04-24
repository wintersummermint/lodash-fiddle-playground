window.lodashExample.defaultParam = {};

window.lodashExample.defaultParam.code = [
    'function sayMsg(msg=\'This is a default message.\') {',
    '\tconsole.log(msg);',
    '}',
    '',
    'sayMsg();',
    'sayMsg(\'This is a different message!\');',
    ''
].join('\n');

window.lodashExample.defaultParam.display = 'Default Parameters';
