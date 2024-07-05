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


// Task 5.16. Функции возвращаются

function isWorkTime(startWorkTime, endWorkTime, startMeetingTime, meetingMunutes) {
	startWorkTime = startWorkTime.split(':');
	endWorkTime = endWorkTime.split(':');
	startMeetingTime = startMeetingTime.split(':');

	if(Number(startMeetingTime[0]) < Number(startWorkTime[0])) return false;

	const fullWorkTimeInMinutes = (endWorkTime[0] - startWorkTime[0]) * 60 + (endWorkTime[1] - startWorkTime[1]);
	if(meetingMunutes > fullWorkTimeInMinutes) return false;

	const meetingHour = [parseInt(meetingMunutes / 60), meetingMunutes % 60];
	const endMeetingTime = [Number(startMeetingTime[0]) + Number(meetingHour[0]), Number(startMeetingTime[1]) + Number(meetingHour[1])];

	if(Number(endMeetingTime[0]) > Number(endWorkTime[0])) {
			return false
	} else if(Number(endMeetingTime[0]) < Number(endWorkTime[0])) {
			return true;
	} else if(Number(endMeetingTime[0]) === Number(endWorkTime[0]) && Number(endMeetingTime[1]) <= Number(endWorkTime[1])) {
			return true;
	} else {
			return false;
	}
}

console.log(isWorkTime('8:45', '18:30', '14:00', 271));