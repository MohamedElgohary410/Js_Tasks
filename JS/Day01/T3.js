var number = parseInt(prompt("enter number"));
if (number % 3 == 0 && number % 5 == 0) {
    document.write("fizz buzz")
}
else if (number % 3 == 0) {
    document.write("fizz")
} else if (number % 5 == 0) {
    document.write("buzz")

} else {
    document.write("none")
}