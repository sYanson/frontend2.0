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

