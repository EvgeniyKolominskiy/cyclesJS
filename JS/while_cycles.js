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



//Task 2


//Task 3

function pow(base, extend) {
 if (extend < 0) {
 	return 1 /pow(base, Math.abs(extend));
 }
 if (extend === 0) {
 	return  1;
 }
 return base * pow(base, extend - 1);
}

console.log(pow(4, 2));

//Task 4


//Task 5

const num = Number(prompt('Enter your factorial:'));

function fac(num) {
	if (num < 0) {
		return;
	}
	if (num <= 1) {
		return 1;
	}
	return num * fac(num - 1);
}

console.log(fac(num));

