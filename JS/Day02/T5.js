var meesage = prompt("Enter ur String")
var letter = prompt("Enter ur Letter")
function found(in1, char) {
    var arr = [];
    for (let i = 0; i < in1.length; i++) {
        if (in1[i] === char) {
            arr.push(i)
        }
    }
    return arr
}

document.write(found(meesage, letter))