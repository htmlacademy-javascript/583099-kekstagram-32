function checkWordLength(string, value = 1) {
  return string.length <= value;
}

console.log(checkWordLength('проверяемая строка', 20));

function isPalindrome(string) {
  const changedString = string.toLowerCase().replaceAll(' ', '');
  return changedString === changedString.split('').reverse().join('');
}

console.log(isPalindrome('Лёша на полке клопа нашёл '));

function getNumber(param) {
  if (typeof param === 'number') {
    return Number.isInteger(param)
      ? Math.abs(param)
      : parseInt(Math.abs(param * 10));
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

// Task 5.16. Функции возвращаются

function isWorkTime(
  startWorkTime,
  endWorkTime,
  startMeetingTime,
  meetingMunutes
) {
  const startWorkTimeArray = startWorkTime.split(':');
  const endWorkTimeArray = endWorkTime.split(':');
  const startMeetingTimeArray = startMeetingTime.split(':');

  if (Number(startMeetingTimeArray[0]) < Number(startWorkTimeArray[0])) {
    return false;
  }

  const MINUTES_IN_HOUR = 60;

  const fullWorkTimeInMinutes =
    (endWorkTimeArray[0] - startWorkTimeArray[0]) * MINUTES_IN_HOUR +
    (endWorkTimeArray[1] - startWorkTimeArray[1]);
  if (meetingMunutes > fullWorkTimeInMinutes) {
    return false;
  }

  const meetingHour = [
    parseInt(meetingMunutes / MINUTES_IN_HOUR, 10),
    meetingMunutes % MINUTES_IN_HOUR,
  ];
  const endMeetingTime = [
    Number(startMeetingTimeArray[0]) + Number(meetingHour[0]),
    Number(startMeetingTimeArray[1]) + Number(meetingHour[1]),
  ];

  if (Number(endMeetingTime[0]) > Number(endWorkTimeArray[0])) {
    return false;
  } else if (Number(endMeetingTime[0]) < Number(endWorkTimeArray[0])) {
    return true;
  } else if (
    Number(endMeetingTime[0]) === Number(endWorkTimeArray[0]) &&
    Number(endMeetingTime[1]) <= Number(endWorkTimeArray[1])
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(isWorkTime('8:45', '18:30', '14:00', 288));
