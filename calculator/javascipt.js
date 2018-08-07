//using the switch method to enable user to select the calculator type
var calculator_type = prompt("Enter 1 for basic calculator, 2 for advanced calculator, 3 for BMI calculator, 4 for trip calculator");

switch (calculator_type) {
  case "1":Basic_calculator();
    break;
    case "2":Advanced_calculator();
      break;
      case "3":BMI_calculator();
        break;
        case "4":Trip_calculator();
          break;
  default:
}

function Basic_calculator(){
  var number_1 = parseFloat(prompt("Please enter first number"));
  var op = prompt("Please enter operator");
  var number_2 = parseFloat(prompt("Please enter second number"));

  if (op == "+")
  {
    alert(number_1 + number_2);
  }

  if (op == "-")
  {
    alert(number_1 - number_2);
  }

  if (op == "*")
  {
    alert(number_1 * number_2);
  }

  if (op == "/")
  {
    alert(number_1 / number_2);
  }
}

function Advanced_calculator(){
  var op = prompt("Enter 1 for power or 2 for squareroot");

  if (op == 1){
    var number_1 = parseFloat(prompt("Enter base number"));
    var number_2 = parseFloat(prompt("Enter power number"));
    alert(Math.pow(number_1,number_2));
  }

  if (op == 2){
    var number_1 = parseFloat(prompt("Enter a number"));
    alert(Math.sqrt(number_1));
  }
}

function BMI_calculator(){
  var op = prompt("Enter 1 for Metric(kg and cm) and 2 for Imperial (lb and inch)");

  if (op == 1){
    var weight =parseFloat(prompt("Enter your weight(kg)"));
    var height =parseFloat(prompt("Enter your height (m)"));
    alert(weight / (height * height));
  }

  if (op == 2)
  var weight =parseFloat(prompt("Enter your weight(lb)"));
  var height =parseFloat(prompt("Enter your height (inch)"));
  alert((weight / (height * height)) * 703);
}
