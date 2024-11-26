function add(num1, num2) {
    return num1 + num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}

function Sub(num1, num2) {
    return num1 - num2;
}

function div(num1, num2) {
    return num1 / num2;
}

var num1 = parseInt(prompt("Number 1"));
var num2 = parseInt(prompt("Number 2"));
var result = prompt("Operation");

var applyOperation = function (num1, num2, Operate, Operation) {
    var out = Operate(num1, num2);
    document.write("<h2>" + out + " (" + num1 + Operation + num2 + ")" + "</h2>");
}
if (result === "add" || result === '+') {
    applyOperation(num1, num2, add, ' + ');
} else if (result === "multiply" || result === '*') {
    applyOperation(num1, num2, multiply, ' * ');
}
else if (result === "division" || result === '/') {
    if (num2 != 0) {
        applyOperation(num1, num2, div, ' / ');
    } else
        document.write("<h2>Operation Error</h2>");
} else if (result === "subtraction" || result === '-') {
    applyOperation(num1, num2, Sub, ' - ');
}