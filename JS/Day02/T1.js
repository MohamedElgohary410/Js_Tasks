function count(counter) {
    var numberOfElement = 0;
    for (var i = 0; i < counter.length; i++) {
        if (counter[i] == 'e')
            numberOfElement++;
    }
    return numberOfElement;
}

var message = prompt("Enter Your Message")
document.write(count(message))
