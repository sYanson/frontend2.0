// Замените код Function Expression стрелочной функцией:

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  // это function expression ??
  ask(
    "Вы согласны?",
    function() { alert("Вы согласились."); },
    function() { alert("Вы отменили выполнение."); }
  );

//   решение

  let ask = (confirm("Вы согласны?"),
  () => alert("Вы согласились."),
  () => alert("Вы отменили выполнение.");
  )
  ask(); // question(Вы согласны?), ok(yes) -> Вы согласились, отмена/esc(no) -> Вы отменили выполнение