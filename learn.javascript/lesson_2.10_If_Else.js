// 1. Выведется ли alert?

if ("0") {
    alert( 'Привет' );
  } // "0" = truthy, +

// 2. Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“
// Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!»

let call = prompt("Какое «официальное» название JavaScript?");

if (call == "ECMAScript") {
   alert("Верно!");
} else {
   alert("Не знаете? ECMAScript!");
  };

// 3. Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:
// 1, если значение больше нуля,
// -1, если значение меньше нуля,
// 0, если значение равно нулю
// Предполагается, что пользователь вводит только числа

let number =prompt();
if (number > 0) {
    alert(1); // 1
} else if (number < 0) {
    alert(-1); // -1
} else {
    alert(0); // 0
};

// 4. Перепишите конструкцию if с использованием условного оператора '?':

let result;

if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
}

(a + b < 4) ? result = 'Мало' : result = 'Много';

// 5. Перепишите if..else с использованием нескольких операторов '?'
// Для читаемости рекомендуется разбить код на несколько строк.

let message;

if (login == 'Сотрудник') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
}

