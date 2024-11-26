var options = parseInt(prompt("Pick calculate by number\n 1.Circle area\n2.Square root\n3.Cos values"));
var result;
if (options == 1) {
    var rad = parseInt(prompt("Enter Radius"));
    document.write(Math.PI * Math.pow(rad, 2))
} else if (options == 2) {
    var squ = parseInt(prompt("Enter ur number"));
    document.write(Math.sqrt(squ))
} else if (options == 3) {
    var deg = parseInt(prompt("Enter Degree"));
    document.write(Math.cos(deg * Math.PI / 180));
}