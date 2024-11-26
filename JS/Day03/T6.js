var numbers = [9, 7, 2, 5, 6, 4]
var pow = parseInt(prompt())
function power(num, sq) {
    var count = 1;
    for (let i = 0; i < sq; i++) {
        count *= num
    }
    return count;
}
var square = function (squar) {
    var result = [];
    for (let i = 0; i < numbers.length; i++) {
        result.push(power(numbers[i], squar));
    }
    document.write(result)
}
square(pow)