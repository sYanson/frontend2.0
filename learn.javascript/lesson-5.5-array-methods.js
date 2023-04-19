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
            arr[i+1] = arr[i+1].toUpperCase(); // d-color -> d-Color
            arr.splice(i, 1); // d-Color -> dColor
        }
        newarr.push(arr[i]);
    }
    newstr = newarr.join("");
    return newstr;
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

function filterRange(arr, a, b) {
    let newarray =[];
    for (i = 0; i < arr.length; ++i) {
        if (arr[i] < a || arr[i] > b) continue;
        newarray.push(arr[i]);
    } return newarray;
}

//////////////////////////////////////////////////////////////////////////