const getNumber = +prompt('Enter any number: ');
const getDegree = +prompt('Enter degree: ');

function pow(num, degree) {
  if (degree > 1) {
    return pow(num * getNumber, degree - 1);
  }
  return num;
}
console.log(pow(getNumber, getDegree));
