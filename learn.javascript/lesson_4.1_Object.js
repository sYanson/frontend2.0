// 1. Напишите код, выполнив задание из каждого пункта отдельной строкой:

let user = {}; // Создайте пустой объект user.
user.name = "John"; // Добавьте свойство name со значением John.
user.surname = "Smith"; // Добавьте свойство surname со значением Smith.
user.name = "Pete"; // Измените значение свойства name на Pete.
delete user.name; // Удалите свойство name из объекта.

//////////////////////////////////////////////////////////////////////////////////////////

// 2. Проверка на пустоту. Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

Должно работать так:

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false

// решение:

let schedule = {}; // у нас есть объект schedule

function = isEmpty(obj) {
    for (let key in obj) { // 
return true
}
return false
}

/////////////////////////////////////////////////////////////////////////////////

// 3. Можно ли изменить объект, объявленный с помощью const? Как вы думаете?

const user = {
    name: "John"
  };
  
  user.name = "Pete";
  
  // это будет работать?
  // содержимое объекта может быть изменено, значение name изменится c John на Pete:
  
const user = {
    name: "Pete"
  };

  ////////////////////////////////////////////////////////////////////////////////

// 4. У нас есть объект, в котором хранятся зарплаты нашей команды:

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
// Если объект salaries пуст, то результат должен быть 0.

function counter() {
    let sum = 0;
for (let key in salaries) { 
    sum = sum + salaries[key];
} return sum; 
}

////////////////////////////////////////////////////////////////////////////////////////

// 5. Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

Например:

// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// после вызова функции

menu = {
  width: 400,
  height: 600,
  title: "My menu"
};

// Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.
// P.S. Используйте typeof для проверки, что значение свойства числовое.

function multiplyNumeric() {
    for (let key in menu) {
        if (tupeof menu[key] == 'number') {
            menu[key] = key*2;
        }
    }
}