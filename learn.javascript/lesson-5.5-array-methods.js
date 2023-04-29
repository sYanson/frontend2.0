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

let result = powerCalc.calculate("2 ** 3"); // 8

// Для этой задачи не нужны скобки или сложные выражения.
// Числа и оператор разделены ровно одним пробелом.
// Не лишним будет добавить обработку ошибок.

//
function Calculator() {
  this.methods = {
  "-": (a, b) => a - b,
  "+": (a, b) => a + b
};

  this.calculate = function(str) {
    let split = str.split(' '),
      a = +split[0],
      op = split[1],
      b = +split[2]
      if (!this.methods[op] || isNaN(a) || isNaN(b)) {
        return NaN;
  } return this.methods[op](a, b);
}

  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };
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
let names = users.map(item => item.name);

// 8. У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.
// Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.
// Например:

let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = /* ... ваш код ... */

/*
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
*/

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // Вася Пупкин

// Итак, на самом деле вам нужно трансформировать один массив объектов в другой. Попробуйте использовать =>. Это небольшая уловка.

//
let usersMapped = users.map(user => ({fullName: `${user.name} ${user.surname}`, id: user.id}));

//
function transform() {
    let userMapped = [];
    for (i = 0; i < users.length; ++i) {
        userMapped[i] = {fullname: `${users[i].name} ${users[i].surname}`, id: users[i].id};
    } return userMapped;
} // почему не видно массив, а по вызову функции массив получается??

// 9. Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.

function sortByAge(arr) {
    arr.sort((x, y) => x.age - y.age);
};

// 10.

// 11. Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.

function getAverageAge(users) {
    let sum = 0;
    for (i = 0; i < users.length; ++i) {
        sum += users[i].age;
    } return (sum / users.length);
}

// 12. Оставить уникальные элементы массива
// Пусть arr – массив строк.

// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

// Например:

function unique(arr) {
  /* ваш код */
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

alert( unique(strings) ); // кришна, харе, :-O

//
function unique(arr) {
    let newarr = [];
    for (let str of arr) {
      if (!newarr.includes(str)) {
        newarr.push(str);
      }
    } return result;
  }
  
//
function unique() {
    let newarr = ((acc, item) => {
        if (acc.includes(item)) {
            return acc;
        } return [...acc, item];
    }, []);
} // не работает ??


