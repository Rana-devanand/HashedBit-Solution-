function taxCalculation(salary) {
  let tax = 0;

  switch (true) {
    case salary > 0 && salary <= 500000:
      tax = 0;
      break;

    case salary > 500000 && salary <= 1000000:
      tax = salary * 0.1;
      break;

    case salary > 1000000 && salary <= 1500000:
      tax = salary * 0.2;
      break;

    case salary > 1500000:
      tax = salary * 0.3;
      break;

    default:
      return "Error: Invalid salary";
  }

  return tax;
}

console.log(taxCalculation(450000)); // Output: 0
console.log(taxCalculation(750000)); // Output: 75000
console.log(taxCalculation(1250000)); // Output: 250000
console.log(taxCalculation(2000000)); // Output: 600000
console.log(taxCalculation(-50000)); // Output: Error: Invalid salary
