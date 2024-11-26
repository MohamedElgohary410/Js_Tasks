var data;
var arr = [];
var numbers = parseInt(prompt("how many number?"))
for (let i = 0; i < numbers; i++) {
    data = parseInt(prompt("enter number " + (i + 1)))
    arr.push(data);
}
document.write("Entered values : " + arr);
//----------------------------------------//
arr.sort((a, b) => a - b);
document.write("<br>ascending order values : " + arr);
//---------------------------------------//
arr.reverse();
document.write("<br>descending order values : " + arr)