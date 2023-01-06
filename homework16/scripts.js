function addNum() {
  let lastNum = 0;
  return function (num) {
    lastNum += num;
    return lastNum;
  };
}
const sum = addNum();

console.log(sum(3));
console.log(sum(5));
console.log(sum(20));
