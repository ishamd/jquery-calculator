$(document).ready(function() {

  let $span = $('span');
  let $screen = $('#screen');
  let $clear = $('#clear');
  let $operator = $('.operator');
  let $equals = $('#equals');
  let expression = [];

  // tofixed

  $span.click(function() {
    $screen.append(($(this).text()));
    if (($(this).text()) === '÷') {
      expression.push('/');
    } else if (($(this).text()) === 'x') {
      expression.push('*');
    } else if (($(this).text()) === '=') {
      let solution = eval(expression.join(''));
      $screen.text(solution);
    } else if (($(this).text()) === 'C') {
      $screen.text('');
      expression = [];
    } else {
      expression.push(($(this).text()));
    }
    console.log(expression);
  })

});
