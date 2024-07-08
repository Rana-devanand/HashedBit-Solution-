function reverseString(str) {
  return str.split("").reverse().join("");
}

let input = "Hello";
let output = reverseString(input);
console.log(output);
