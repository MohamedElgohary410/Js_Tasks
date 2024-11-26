var data;
var arr = [];
for (let i = 0; i < 3; i++) {
    data = parseInt(prompt("enter number " + (i + 1)))
    arr.push(data);
}

function sum(num1, num2, num3) {
    return num1 + num2 + num3
}

function mul(num1, num2, num3) {
    return num1 * num2 * num3
}

function div(num1, num2, num3) {
    return num1 / num2 / num3
}

document.write("sum of 3 values " + arr[0] + "+" + arr[1] + "+" + arr[2] + "=" + sum(arr[0], arr[1], arr[2]));
document.write("<br>multiplication of 3 values " + arr[0] + "*" + arr[1] + "*" + arr[2] + "=" + mul(arr[0], arr[1], arr[2]));
document.write("<br>division of 3 values " + arr[0] + "/" + arr[1] + "/" + arr[2] + "=" + div(arr[0], arr[1], arr[2]));