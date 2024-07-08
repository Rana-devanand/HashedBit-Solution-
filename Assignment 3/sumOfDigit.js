// 8) Write a function to find repeated sum of digits until there is only a single digit in the number.
// Example - 456 - 4+5+6 = 15 - 1+5 = 6.

function repeatedSumOfDigits(num) {
  while (num >= 10) {
    num = num
      .toString()
      .split("")
      .reduce((sum, digit) => sum + parseInt(digit), 0);
  }
  return num;
}

// Example usage:
let number = 456;
let result = repeatedSumOfDigits(number);
console.log(result);
