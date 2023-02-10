let number1 = parseFloat(prompt("Enter the first number:"));
let number2 = parseFloat(prompt("Enter the second number:"));
let operator = prompt(
  "Enter operator to perform the calculation ( 1 -Add, 2 -Subtract, 3 -Multiply, 4 -Divide ): "
);
let result;

if (operator == "1") {

  result = number1 + number2;
  alert(` The sum is ${result}`);

} else if (operator == "2") {

  result = number1 - number2;
  alert(` The difference is ${result}`);

} else if (operator == "3") {

  result = number1 * number2;
  alert(` The product is ${result}`);

} else {
  
  result = number1 / number2;
  alert(` The qoutient is ${result}`);
}
