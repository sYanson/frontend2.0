// 1. Напишите код, выполнив задание из каждого пункта отдельной строкой:

let user = {}; // Создайте пустой объект user.
user.name = "John"; // Добавьте свойство name со значением John.
user.surname = "Smith"; // Добавьте свойство surname со значением Smith.
user.name = "Pete"; // Измените значение свойства name на Pete.
delete user.name; // Удалите свойство name из объекта.

// 2. Проверка на пустоту. Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

Должно работать так:

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false

// Мое решение:

let schedule = {}; // у нас есть объект schedule

function = isEmpty(obj) {
    for (let key in obj) { //перебираем возможные ключи
        if key === undefined { // если ключи не найдены, должно вернуться undefined
            alert( isEmpty(obj) ); // true
}       else {
            alert( isEmpty(obj) ); // false
}
}
}

// Решение учебника:

function isEmpty(obj) {
    for (let key in obj) {
      // если тело цикла начнет выполняться - значит в объекте есть свойства
      return false;
    }
    return true;
  }

// 3. Можно ли изменить объект, объявленный с помощью const? Как вы думаете?

const user = {
    name: "John"
  };
  
  // это будет работать?
  user.name = "Pete";
  // содержимое объекта может быть изменено, значение name изменится c John на Pete:
  
const user = {
    name: "Pete"
  };

// 4. У нас есть объект, в котором хранятся зарплаты нашей команды:

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
// Если объект salaries пуст, то результат должен быть 0.

let result = (let (for key in obj)) ? sum[key] : 0 ;