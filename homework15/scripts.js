// ДЗ 15. Рекурсивне зведення в ступінь
// Реалізувати рекурсивну функцію, яка зводить число в ступінь.
// Число, яке треба піднести до ступеню,
// передається як перший аргумент у функції;
// Ступінь передається як другий аргумент у функціюpow (num, degree).
const getNumber = +prompt('Enter any number: ');
const getDegree = +prompt('Enter degree: ');

function pow(num, degree) {
  const numberForPow = getNumber;
  if (degree > 1) {
    pow(num * numberForPow, degree - 1);
  } else {
    console.log(num);
  }
}
pow(getNumber, getDegree);
