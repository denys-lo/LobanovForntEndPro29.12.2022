// Дано масив [5, 66, 'pool', 7, 99, null, { name: 'Sam' }, [], true, 78]
// з елементами різних типів. Створити функцію яка вираховує середнє
// арифметичне лише числових елементів даного масиву.
const arr = [5, 66, 'pool', 7, 99, null, { name: 'Sam' }, [], true, 78];
function sumOfNumbers(array) {
  let quantity = 0;
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'number') {
      quantity += 1;
      sum += array[i];
    }
  }
  console.log(sum / quantity);
}
sumOfNumbers(arr);
// Написати функцію doMath(x, znak, y), яка отримує 3 аргументи:
// числа x і y, рядок znak. У змінній znak може бути:
// +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії,
// вказаної в змінній znak.Обидва числа і знак виходять від користувача.
const getX = +prompt('Provide first number:');
const getZnak = prompt('Provide a math sign (+, -, *, /, %, ^):');
const getY = +prompt('Provide second number:');

function doMath(x, znak, y) {
  if (Number.isNaN(x) || Number.isNaN(y)) {
    console.log('You enetered something wrong, please reload the page and try again.');
  } else {
    switch (znak) {
      case '+':
        console.log(`${x} + ${y} = ${x + y}`);
        break;
      case '-':
        console.log(`${x} - ${y} = ${x - y}`);
        break;
      case '*':
        console.log(`${x} * ${y} = ${x * y}`);
        break;
      case '/':
        console.log(`${x} / ${y} = ${x / y}`);
        break;
      case '%':
        console.log(`${x} % ${y} = ${x % y}`);
        break;
      case '^':
        console.log(`${x} ^ ${y} = ${x ** y}`);
        break;
      default:
        console.log('You enetered something wrong, please reload the page and try again.');
        break;
    }
  }
}
doMath(getX, getZnak, getY);
