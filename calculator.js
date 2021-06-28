/*function calculate() {
  let value1 = Number(document.getElementById("value1").value);
  let value2 = Number(document.getElementById("value2").value); 
  let menu = document.getElementById("dropdownmenu").value;


 let value = 0 
  if (menu == "add") {
     value = value1 + value2;
  } else if (menu == "subtract") {
    value = value1 - value2;
  } else if (menu == "multiply") {
    value = value1 * value2; 
  } else if (menu == "divide") {
    value = value1/value2; }
  


document.getElementById("result").innerHTML = value;
}*/

function calculate() {
  let value1 = Number(document.getElementById("value1").value);
  let value2 = Number(document.getElementById("value2").value);
  let menu = document.getElementById("dropdownmenu").value;
 
  let value = 0;

switch (menu) {
  case "add":
  value = value1 + value2;
  break;
  case "subtract":
  value = value1 - value2;
  break;
  case "multiply":
  value = value1 * value2;
  break;
  case "divide":
  value = value1 / value2;
  break;
}
document.getElementById("result").innerHTML = value;
}