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
//end of switch
//Start of Basic calculator function
function Basic_calculator(){
  var number_1 = parseFloat(prompt("Please enter first number"));
  var op = prompt("Please enter operator");
  var number_2 = parseFloat(prompt("Please enter second number"));
//Allows user to add two numbers
  if (op == "+")
  {
    alert(number_1 + number_2);
  }
//Allows user to subtract 2 numbers
  if (op == "-")
  {
    alert(number_1 - number_2);
  }
//Allows user multiply 2 numbers
  if (op == "*")
  {
    alert(number_1 * number_2);
  }
// Allows user to divide 2 numbers
  if (op == "/")
  {
    alert(number_1 / number_2);
  }
}
//end of basic calculator function
// Start of the advanced calculator
//Allows user to choose power or squareroot function
function Advanced_calculator(){
  var op = prompt("Enter 1 for power or 2 for squareroot");
// Allows user to workout the power of any numbers
  if (op == 1){
    var number_1 = parseFloat(prompt("Enter base number"));
    var number_2 = parseFloat(prompt("Enter power number"));
    alert(Math.pow(number_1,number_2));
  }
// Allows user to workout the squareroot of any numbers
  if (op == 2){
    var number_1 = parseFloat(prompt("Enter a number"));
    alert(Math.sqrt(number_1));
  }
}
// end of the advanced calculator
// Start of the BMI calculator
// Allows user to choose Metric or Imperial calculation
function BMI_calculator(){
  var op = prompt("Enter 1 for Metric(kg and cm) and 2 for Imperial (lb and inch)");
//calculation for metric units
  if (op == 1){
    var weight =parseFloat(prompt("Enter your weight(kg)"));
    var height =parseFloat(prompt("Enter your height (m)"));
    alert(weight / (height * height));
  }
// calculation for imperial units
  if (op == 2)
  var weight =parseFloat(prompt("Enter your weight(lb)"));
  var height =parseFloat(prompt("Enter your height (inch)"));
  alert((weight / (height * height)) * 703);
}
// end of BMI calculator
// start of the trip calculator
function Trip_calculator() {
  var distance =parseFloat(prompt("Enter your distance (miles)"));
  var fuelefficiency =parseFloat(prompt("Enter the fuel efficiency"));
  var costpergallon =parseFloat(prompt("Enter the cost per gallon"));
  var speed =parseFloat(prompt("Enter your speed"));
  alert(distance / speed);
  alert((distance / fuelefficiency) * costpergallon);
}
