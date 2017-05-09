$(document).ready(function() {

  let $span = $('span');
  let $screen = $('#screen');
  let $clear = $('#clear');
  let $operator = $('.operator');
  let $equals = $('#equals');
  let expression = [];
  let num1 = 0;
  let num2 = 0;
  let oper = "";
  let result;

  let mathObj = {
    '+': add,
    '-': sub,
    '*': mult,
    '/': div,
  };

  function add(a, b) {
    return a + b;
  };

  function sub(a, b) {
    return a - b;
  };

  function mult(a, b) {
    return a * b;
  };

  function div(a, b) {
    return a / b;
  };

  function evaluate(arr) {
    let count = 0;
    let op = 0;
    num1 = 0;
    num2 = 0;

    for (let i = 0; i < arr.length; i++) {
      if (Number.isInteger(arr[i])) {
        if (op === 0) {
          num1 = (num1 * 10) + arr[i];
          count++;
        } else {
          num2 = (num2 * 10) + arr[i];
          count++;
        }
      } else {
        oper = arr[i];
        count++;
        op++;
      }
    }
  }

  $span.click(function() {
    $screen.append(($(this).text()));
    if (($(this).text()) === '÷') {
      expression.push('/');
    } else if (($(this).text()) === 'x') {
      expression.push('*');
    } else if (($(this).text()) === '+') {
      expression.push('+');
    } else if (($(this).text()) === '-') {
      expression.push('-');
    } else if (($(this).text()) === '=') {
      evaluate(expression);
      result = mathObj[oper](num1, num2);
      $screen.text(result);
      expression = [];
      expression[0] = result;
    } else if (($(this).text()) === 'C') {
      $screen.text('');
      expression = [];
      num1 = 0;
      num2 = 0;
      oper = "";
    } else {
      expression.push(parseInt(($(this).text())));
    }

  })

});
