
(function arr() {
    var message = prompt("Enter your word")
    var caseSen = confirm("Wanna Consider case sensitivity")
    var opArray = message.split("");
    opArray.reverse();
    var matching = opArray.join("");
    //------------------------------//
    if (caseSen) {
        var regex = new RegExp(matching)
        var matched = message.match(regex)
        if (matched) {
            document.write("Palindorme")
        } else { document.write("Not Palindorme") }
    } 
    else {
        var regex = new RegExp(matching, 'i')
        var matched = message.match(regex)
        if (matched) {
            document.write("Palindorme")
        } else { document.write("Not Palindorme") }
    }

}
)();