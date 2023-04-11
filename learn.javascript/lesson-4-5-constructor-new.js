// 1. Возможно ли создать функции A и B, чтобы new A() == new B()?

function A() { ... }
function B() { ... }

let a = new A();
let b = new B();

alert( a == b ); // true

// Если да – приведите пример вашего кода.

/////////////////////////////////////////////////////////////////////////////////////////

// 2. Создайте калькулятор при помощи конструктора, new Calculator
// Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:

read() // запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
sum() // возвращает сумму этих свойств.
mul() // возвращает произведение этих свойств.

// Например:

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

//

function Calculator() {
    this.a = 0;
    this.b = 0;
    this.read = function() {
      this.a = +prompt(); // prompt возвращает строку!
      this.b = +prompt();
    };
    this.sum = function() {
      return (this.a + this.b);
    };
    this.mul = function() {
      return (this.a * this.b);
    };
}

let calculator = new Calculator(); // calculator{}

calculator.read(); // 6, 7
alert( "Sum=" + calculator.sum() ); // 13 
alert( "Mul=" + calculator.mul() ); // 42

///////////////////////////////////////////////////////////////////////////////////

// 3. Создайте new Accumulator.
// Создайте функцию-конструктор Accumulator(startingValue).

// Объект, который она создаёт, должен уметь следующее:
// Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
// Метод read() должен использовать prompt для считывания нового числа и прибавления его к value.
// Другими словами, свойство value представляет собой сумму всех введённых пользователем значений, с учётом начального значения startingValue.

// Ниже вы можете посмотреть работу кода:

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

alert(accumulator.value); // выведет сумму этих значений

//

function Accumulator(startingValue) {
    this.value = startingValue;
    this.b = 0;
    this.read = function() {
        let b = prompt();
        return value += b; // прибавляет введённое пользователем значение к текущему значению
    };
}