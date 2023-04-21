// 1. Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

То есть дефисы удаляются, а все слова после них получают заглавную букву.

Примеры:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно.

function camelize(str) {
    arr = str.split("");
    let newarr =[];
    for (i = 0; i < arr.length; ++i) {
        if (arr[i] = "-") { // true
            arr[i+1] = arr[i+1].toUpperCase(); // d-/c/olor -> d-/C/olor
            arr.splice(i, 1); // d/-/Color -> dColor
        }
        newarr.push(arr[i]);
    }
    newstr = newarr.join("");
    return newstr;
}

// Через map
function camelize(str) {
    return str.split('-').map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join('');
  }

////////////////////////////////////////////////////////////////////////////////////////////////

// 2. Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы со значениями больше или равными a
// и меньше или равными b и возвращает результат в виде массива.
// Функция должна возвращать новый массив и не изменять исходный.
// Например:

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (совпадающие значения)

alert( arr ); // 5,3,8,1 (без изменений)

//
function filterRange(arr, a, b) {
    let newarray =[];
    for (i = 0; i < arr.length; ++i) {
        if (arr[i] < a || arr[i] > b) continue;
        newarray.push(arr[i]);
    } return newarray;
}

//////////////////////////////////////////////////////////////////////////

// 3. Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr
// и удаляет из него все значения кроме тех, которые находятся между a и b.
// То есть, проверка имеет вид a ≤ arr[i] ≤ b.
// Функция должна изменять принимаемый массив и ничего не возвращать.
// Например:

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

alert( arr ); // [3, 1]

function filterRangeInPlace(arr, a, b) {
    for (i = 0; i < arr.length; ++i) {
        if (arr[i] < a || arr[i] > b) {
            arr.splise(i, 1);
        }
    }
}

///////////////////////////////////////////////////////////////////////////

// 4. Сортировать в порядке по убыванию

let arr = [5, 2, 1, -10, 8];
// ... ваш код для сортировки по убыванию
alert( arr ); // 8, 5, 2, 1, -10

arr.sort(function(a,b){ 
  return a - b
})
// (5) [-10, 1, 2, 5, 8]

/////////////////////////////////////////////////////////////////////////////

// 5. Скопировать и отсортировать массив
// У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.
// Создайте функцию copySorted(arr), которая будет возвращать такую копию.

let arr = ["HTML", "JavaScript", "CSS"];

copySorted(arr); // CSS, HTML, JavaScript
arr; // HTML, JavaScript, CSS (без изменений)
//
function copySorted(arr) {
    let clone = arr.slice(0); //
    return clone.sort();
}

copySorted(arr);
(3) ['CSS', 'HTML', 'JavaScript']
arr;
(3) ['HTML', 'JavaScript', 'CSS']

////////////////////////////////////////////////////////////////////////////////

// 6. Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.
// Задание состоит из двух частей.

// Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате
// «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.
// Пример использования:

let calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10

// Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции.
// Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.
// Например, давайте добавим умножение *, деление / и возведение в степень **:

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8

// Для этой задачи не нужны скобки или сложные выражения.
// Числа и оператор разделены ровно одним пробелом.
// Не лишним будет добавить обработку ошибок.

//
function Calculator() {
    this.calculate: function(str) {
  }

  /////////////////////////////////////////////////////////////////////////////

//   7. У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.

  Например:
  
  let vasya = { name: "Вася", age: 25 };
  let petya = { name: "Петя", age: 30 };
  let masha = { name: "Маша", age: 28 };
  
  let users = [ vasya, petya, masha ];
  
  let names = /* ... ваш код */
  
  alert( names ); // Вася, Петя, Маша

  // Через цикл
  function namesearch(users) {
    let names = [];
    for (i = 0; i < users.length; ++i) {
        names[i] = users[i].name;      // ?? names.push(users[i].name);
    } return names;
}

// Через forEach

// Через map