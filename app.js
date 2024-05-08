var input = document.getElementById("num");
// var num1 = document.getElementById("num1");
// var num2 = document.getElementById("num2");
var result = document.getElementById("result");
//declaration
function isEven(num) {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

function checkNumber() {
  if (isEven(input.value)) {
    result.innerText = "Number is Even";
  } else {
    result.innerText = "Number is Odd";
  }
}