'use strict';

/*
 Задания, в которых необходимо использовать DO WHILE.
 1. Предлагать пользователю решить пример 2 + 2 * 2 до тех
 пор, пока он не решит его правильно.
 2. Делить число 1000 на 2 до тех пор, пока не получится число
 меньше 50. Вывести это число и сколько делений произвели.
*/

//Task 1

let userInput = null;
do {
	userInput = Number (prompt(' Please work it out 2 + 2 * 2'));
} while (userInput !== 2 + 2 * 2);

//Task 2

let n = 1000;
let counter = 0;
do {
	n /= 2;
	counter++;
} while (n >= 50);

console.log(`Result: ${n}, Number of divisions: ${counter}`);