function checkWordLength(string, value = 1) {
  return string.length <= value;
}

checkWordLength('проверяемая строка', 20);

function isPalindrome(string) {
  const changedString = string.toLowerCase().replaceAll(' ', '');
  return changedString === changedString.split('').reverse().join('');
}

isPalindrome('Лёша на полке клопа нашёл ');

function getNumber(param) {
  if (typeof param === 'number') {
    return Number.isInteger(param)
      ? Math.abs(param)
      : parseInt(Math.abs(param * 10), 10);
  }

  let number = '';

  for (let i = 0; i < param.length; i++) {
    if (
      param[i] !== ' ' &&
      typeof Number(param[i]) === 'number' &&
      !isNaN(Number(param[i]))
    ) {
      number += param[i];
    }
  }

  return parseInt(number, 10);
}

getNumber('2023 год');
getNumber('ECMAScript 2022');
getNumber('1 кефир, 0.5 батона');
getNumber('агент 007');
getNumber('а я томат');
getNumber(true);
getNumber(1.5);
getNumber(-1);
