// 1. Использование This в литерале объекта.
// Здесь функция makeUser возвращает объект.

// Каким будет результат при обращении к свойству объекта ref? Почему?

function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser(); // user копирует объект, который вызывает makeUser()

alert( user.ref.name ); // Каким будет результат?
// undefined, this в этом случае неопределен?

//////////////////////////////////////////////////////////////////////////////

// 2. Создайте объект calculator (калькулятор) с тремя методами:
// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.

let calculator = {
  a: 0,
  b: 0,
  read() {
    this.a = +prompt(); // prompt возвращает строку!
    this.b = +prompt();
  },
  sum() {
    return (this.a + this.b);
  },
  mul() {
    return (this.a * this.b);
  }
};

/////////////////////////////////////////////////////////////////////////////////////////

// 3. У нас есть объект ladder (лестница), который позволяет подниматься и спускаться:

let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() { // показывает текущую ступеньку
    alert( this.step );
  }
};

// Теперь, если нам нужно выполнить несколько последовательных вызовов, мы можем сделать это так:

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0

// Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:
ladder.up().up().down().showStep().down().showStep(); // показывает 1 затем 0
// Такой подход широко используется в библиотеках JavaScript.

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this; // возвращаем объект с новым step
  },
  down() {
    this.step--;
    return this; // 
  },
  showStep: function() {
    alert( this.step );
    return this; //
  }
};