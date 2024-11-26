function addNumbers() {
    if (arguments.length === 0) {
        throw new Error("Function requires at least one parameter.");
    }

    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] !== "number") {
            throw new Error("All parameters must be numbers.");
        }
        sum += arguments[i];
    }
    return sum;
}

function testAddFunction() {
    try {

        var result = addNumbers(1, 2, 3, 4, 5);
        alert("Sum: " + result);

        // addNumbers();
        // addNumbers(1, "two", 3);
    } catch (e) {
        alert(e.message);
    }
}