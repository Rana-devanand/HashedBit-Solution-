// Q6) inputArr = [1,2,3,9,10,7,5,4,3]
// answer = [9, 10, 7]
// User array.filter and return numbers greater than 5.

function filterGreaterThanFive(inputArr) {
  return inputArr.filter((number) => number > 5);
}

let inputArr = [1, 2, 3, 9, 10, 7, 5, 4, 3];
let result = filterGreaterThanFive(inputArr);
console.log(result);
