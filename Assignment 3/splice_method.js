let string = "INDIA";
let output = string.split("");
output.splice(3, 2, "O", "N", "E", "S", "I", "A");
output = output.join("");

console.log(output);
