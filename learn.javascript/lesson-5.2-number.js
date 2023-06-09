// 1. Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.
// P.S. Есть «подводный камень» при работе с типами.

a = +prompt(); // *видимо, речь о prompt, которая возвращает строку
b = +prompt();
alert(a + b);

/////////////////////////////////////////////////////////////////////////////////////////

// 3. Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.
// Функция должна возвращать числовое значение.
// Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена».
// В этом случае функция должна вернуть null.

function readNumber() {
    let num;
    do {
      num = prompt(, 0);
    } while ( !isFinite(num) ); // пока num не число
    if (num === null || num === '') return null; // пустая строка или отмена
    return +num;
  }

/////////////////////////////////////////////////////////////////////////////////////////////

// 4. Этот цикл – бесконечный. Он никогда не завершится, почему?

let i = 0;
while (i != 10) {
  i += 0.2;
}

// потеря точности, сумма 49 и 50 сложений 0.2 "промахнется" мимо 10, цикл продолжится

//////////////////////////////////////////////////////////////////////////////////////////////

// 5. Встроенный метод Math.random() возвращает случайное число от 0 (включительно) до 1 (но не включая 1)
// Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max (но не включая max).
// Пример работы функции:

alert( random(1, 5) ); // 1.2345623452
alert( random(1, 5) ); // 3.7894332423
alert( random(1, 5) ); // 4.3435234525

function random(min, max) {
    let sum = 0;
    sum += Math.random() * (max - min) + min;
    return sum;
}

// 6. Случайное целое число от min до max
// Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно).
// Любое число из интервала min..max должно появляться с одинаковой вероятностью.
// Пример работы функции:

alert( randomInteger(1, 5) ); // 1
alert( randomInteger(1, 5) ); // 3
alert( randomInteger(1, 5) ); // 5

// Можно использовать решение из предыдущей задачи.

function random(min, max) {
    let sum = 0;
    sum += Math.floor(Math.random() * (max - min) + min);
    return sum;
} 
