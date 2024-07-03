function checkWordLength(string, value = 1) {
    if(typeof string != 'string') return 'Введите строку';
    return string.length <= value;
}

console.log(checkWordLength('проверяемая строка', 20));

function isPalindrome(string) {
    const changedString = string.toString().toLowerCase().replaceAll(' ', '');
    return changedString === changedString.split('').reverse().join('');
}

console.log(isPalindrome('Лёша на полке клопа нашёл '));

function getNumber(param) {
    if(typeof param != 'number' && typeof param != 'string') return 'Введите строку или число';
    if(typeof param === 'number') return Number.isInteger(param) ? Math.abs(param) : parseInt(Math.abs(param * 10));

    let number = '';

    for(let i = 0; i < param.length; i++) {
        if(param[i] != ' ' && typeof Number(param[i]) === 'number' && !isNaN(Number(param[i]))) {
            number += param[i];
        }
    }

    return parseInt(number);
}

console.log(getNumber('2023 год'));
console.log(getNumber('ECMAScript 2022'));
console.log(getNumber('1 кефир, 0.5 батона'));
console.log(getNumber('агент 007'));
console.log(getNumber('а я томат'));
console.log(getNumber(true));
console.log(getNumber(1.5));
console.log(getNumber(-1));