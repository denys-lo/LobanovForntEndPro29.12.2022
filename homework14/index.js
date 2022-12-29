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
