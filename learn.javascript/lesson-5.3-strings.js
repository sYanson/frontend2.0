// 1. Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом
// Например:

ucFirst("вася") == "Вася";

//
function ucFirst(str) {
    return str[0].toUpperCase() + str.slice(1); // 0й символ в верхнем регистре + остальная строка
}

/////////////////////////////////////////////////////////////////////////////

// 2. Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.
// Функция должна быть нечувствительна к регистру:

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false

//

function checkSpam(str) {
    let newstr = str.toLowerCase();
    if (newstr.indexOf("viagra") || newstr.indexOf("xxx")) {
        return true;
    } else return false;
}

///////////////////////////////////////////////////////////////////////////////

// 3. Создайте функцию truncate(str, maxlength), которая проверяет длину строки str
// и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
// Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

// Например:
// truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"
// truncate("Всем привет!", 20) = "Всем привет!"

function truncate(str, maxlength) { 10; 20
    let newstr = "";
    for (let i = 0; i < maxlength; ++i) { 0; i < 20
        newstr += str[i]
    } return newstr + "...";
}

/////////////////////////////////////////////////////////////////////////

// 4. Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
// Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.
// Например:

alert( extractCurrencyValue('$120') === 120 ); // true

//

function extractCurrencyValue(str) {
    let newstr = "";
    for (let i = 1; i < str.length; ++i) {
        newstr += str[i]
    } return +newstr;
}
// str = "$120";
// alert( extractCurrencyValue('$120') === 120 );