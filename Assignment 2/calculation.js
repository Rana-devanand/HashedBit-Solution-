const calculation = (operations, num1, num2) => {
  switch (operations) {
    case "add":
      return num1 + num2;

    case "sub":
      return num1 - num2;

    case "multi":
      return num1 * num2;
    case "div":
      return num1 / num2;
    default:
      return "Invalid inputs";
  }
};

const num1 = 30;
const num2 = 10;
console.log(calculation("add", num1, num2));
console.log(calculation("sub", num1, num2));
console.log(calculation("multi", num1, num2));
console.log(calculation("div", num1, num2));
console.log(calculation("random", num1, num2));
