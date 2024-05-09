// var input = document.getElementById("num");
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var result = document.getElementById("result");
var result2 = document.getElementById("result2");
var result3 = document.getElementById("result3");
//declaration
// function isEven(num) {
//   if (num % 2 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function checkNumber() {
//   if (isEven(input.value)) {
//     result.innerText = "Number is Even";
//   } else {
//     result.innerText = "Number is Odd";
//   }
// }

// --------------------


function calculate(sign = "+") {
  var num1Val = num1.value;
  var num2Val = num2.value;
  var num3Val = result3.value;
  if (sign == "+")
    return (result.innerText = parseInt(num1Val & result3.innerText == result.innerText ) )
  
  if (sign == "-") return (result2.innerText = (num2Val))
    else{
      return (result3.innerText = parseInt(num2Val - num3Val ) )
  };
 


 
}

// ---------------------


// const display = document.getElementById("display");


// function appandTodisplay(input) {
//   display.value += input;
// }


// function cleardisplay(){
//   display.value = "";
// }


// function calculate(){
//   display.value = eval(display.value);
// }



