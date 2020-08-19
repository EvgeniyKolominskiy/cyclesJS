'use strict';

/*
 Задания, в которых необходимо использовать WHILE.
 1. Вывести # столько раз, сколько указал пользователь.
 2. Пользователь ввел число, а на экран вывелись все числа
 от введенного до 0.
 3. Запросить число и степень. Возвести число в указанную
 степень и вывести результат.
 4. Запросить 2 числа и найти все общие делители.
 5. Посчитать факториал введенного пользователем числа.
*/

//Task 1

const userNum = Number(prompt('Enter a number, please.'));

let i = 0;
while (i++ < userNum) {
	console.log(`I printed the number ${userNum} times.`);
}

//Task 2

i = userNum;

while (i >= 0) {
	console.log(i--);
}

//Task 3

const num = Number(prompt('Enter your number.'));
const power = Number(prompt('Enter your power'));

let result = num;
i = 0;

while (i++ < (power - 1)) {
	result *= num;
}

console.log(`Your number is: ${result}.`);

//Task 4

const num1 = Number(prompt('Enter your first number, please.'));
const num2 = Number(prompt('Enter your second number, please.'));

i = 0;
if (num1 < num2) {
	i = num1;
} else {
	i = num2;
}

while (i > 0) {
	if (num1 % i === 0 && num2 % i === 0) {
		console.log(`Common divisor of higher numbers ${i}.`);
	}
	i--;
}

//Task 5

const factorial = Number(prompt('Enter your factorial number, please.'));

function fac(n) {
	if (n <= 1) {
		return 1;
	}
	return n * fac(n - 1);
}

console.log(fac(factorial));


