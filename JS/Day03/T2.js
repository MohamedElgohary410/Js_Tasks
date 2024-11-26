function capitalize(str) {
    var arr = str.split(' ');
    for (var i = 0; i < arr.length; i++) {
        if (arr[i]) {
            arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase();
        }
    }
    return arr.join(' ');
}


var message = prompt("Enter ur letter");
var result = capitalize(message);
document.write("<h1>" + result + "</h1>");