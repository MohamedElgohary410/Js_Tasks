var arr = [];
(function add() {
    var numbers = parseInt(prompt("how many number?"))
    for (let i = 0; i < numbers; i++) {
        arr.push(parseInt(prompt("enter number " + (i + 1)))
        );
    }
})();

arr.sort((a, b) => a - b);
//----------------------------------------------------------//
function dub(arr) {
    var merge = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            merge.push(arr[i + 1]);
            i++;
        } else {
            merge.push(arr[i]);
        }
    }
    return merge
}
var arr2 = dub(arr);
document.write("values : " + arr2[1] + " , " + arr2[arr2.length - 2]);
console.log(arr2)