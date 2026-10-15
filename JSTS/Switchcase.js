let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Some other day");
}
console.log('----break------');
let x = 1;

switch (x) {
  case 1:
    console.log("One");
  case 2:
    console.log("Two");
  default:
    console.log("Default");
}
console.log('--------grouping cases------');

let days = "Sat";

switch (days) {
  case "Sat":
  case "Sun":
    console.log("Weekend");
    break;
  case "Mon":
  case "Tue":
  case "Wed":
  case "Thu":
  case "Fri":
    console.log("Weekday");
    break;
  default:
    console.log("Invalid day");
}

console.log('-------switch with strings,a small calculator--------');
let a = 10, b = 5;
let operator = "*";

switch (operator) {
  case "+":
    console.log(a + b);
    break;
  case "-":
    console.log(a - b);
    break;
  case "*":
    console.log(a * b);
    break;
  case "/":
    console.log(a / b);
    break;
  default:
    console.log("Unknown operator");
}