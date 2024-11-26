var sum = 0;
var number;
;
while (sum <= 100) {
    number = parseInt(prompt("enter number"));
    if (number) {
        sum += number;
    } else {
        break;
    }
}
if (!number) {
    document.write("the Sum of numbers is " + sum + " Zero case");

} else {
    document.write("the Sum of numbers is " + sum);

}
