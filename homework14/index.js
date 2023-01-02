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

// Написати функцію заповнення даними користувача двомірного масиву.
// Довжину основного масиву і внутрішніх масивів задає користувач.
// Значення всіх елементів всіх масивів задає користувач.
const getLengthMainArray = +prompt('Provide the length of the main array:');
const getLengthInternalArray = +prompt('Provide the length of the internal array:');
function makeArray(lengthMainArray, lengthInternalArray) {
  if (Number.isNaN(lengthMainArray) || Number.isNaN(lengthInternalArray)) {
    return 'You enetered something wrong, please reload the page and try again.';
  }

  const newArr = [];
  for (let i = 0; i < lengthMainArray; i++) {
    newArr.push(new Array(lengthInternalArray));
  }
  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < newArr[0].length; j++) {
      const getItem = prompt('Enter anytinhg what you want to add to your array:');
      newArr[i][j] = getItem;
    }
  }
  return newArr;
}
console.log(makeArray(getLengthMainArray, getLengthInternalArray));

// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом.
// 'func(" hello world", ['l', 'd'])' поверне нам "heo wor".
// Вихідний рядок та символи для видалення задає користувач.
const getItem = prompt('Enter any sentence:');
const getSymbols = prompt('Enter symbols you want to delete:');
function deleteSymbols(item, symbols) {
  const allSymbolsOfItem = item.toLowerCase().split('');
  const symbolsForDelete = symbols.toLowerCase().replace(/ /g, '').split('');

  for (let i = 0; i < allSymbolsOfItem.length; i++) {
    for (let j = 0; j < symbolsForDelete.length; j++) {
      if (allSymbolsOfItem[i] === symbolsForDelete[j]) {
        allSymbolsOfItem.splice(i, 1);
        i -= 1;
        console.log(allSymbolsOfItem);
      }
    }
  }
  console.log(allSymbolsOfItem.join(''));
}
deleteSymbols(getItem, getSymbols);
