const buttons = Array.from(document.querySelectorAll('.button'));
const operatorButton = Array.from(document.querySelectorAll('.operator'));
const display = document.querySelector('.main-display');
const buttonNumbers = buttons.map(button => button);
const operators = operatorButton.map(operator => operator);
const equalButton = document.querySelector('.equal');
const clearButton = document.querySelector('.clear');
let answer = [];
let num1 = [];

function clearCalc(){
  display.innerHTML = '';
  num1 = [];
}
function caluculate() {
  num1.push(this.innerHTML);
  display.innerHTML = num1.join('');
  answer = num1.join('');
}
function executeProb(){  
  display.innerHTML = eval(answer);
  num1 = [];
  display.classList.add('bounceInLeft');
}


buttonNumbers.forEach(button => button.addEventListener("click", caluculate));
equalButton.addEventListener('click', executeProb);
clearButton.addEventListener('click', clearCalc);