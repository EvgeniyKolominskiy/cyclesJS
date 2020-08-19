'use strict';

/*
 Задания, в которых необходимо использовать FOR.
 1. Вывести все числа от 1 до 100, которые кратные указанному
 пользователем числу.
 */

//Task 1

const userNumber = Number(prompt('Please enter your number'));

for(let i = 1; i <= 100; i++) {
	if (i % userNumber === 0) {
		console.log(i);
	}
}