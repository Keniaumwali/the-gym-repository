// Function checkEvenOrOdd(number) {
//     if (number % 2) {
//         return 'Even';
//     }else{
//         return 'odd';
//     }
// }
console.log(checkEvenOrOdd(5));
console.log(checkEvenOrOdd(6));
function calculate (num1,num2,operator) {
    switch (operator){
         case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
     return num2 !== 0 ? num1 / num2 : "Error: Cannot divide by zero";
    default:
      return "Error: Invalid operator";
    }
  }
console.log(calculate(4,2,'+'));
console.log(calculate(5,0,'/'));