var arr = [];
var num = parseInt(prompt("Enter number of names"));
var rand1, rand2;
function nameTake() {
    var arr1 = [];
    var name_data;
    for (let i = 0; i < num; i++) {
        name_data = prompt("Enter name number: " + (i + 1))
        arr1.push(name_data)
    }

    return arr1;
};
arr = nameTake();
//---------------------------------------//

function rand() {
    rand1 = Math.floor(Math.random() * num);
    rand2 = Math.floor(Math.random() * num);
    if (rand1 == rand2 || rand1 > num ||
        rand2 > num) {
        rand();
    } else {
        document.write("[ " + arr[rand1] + "  :  " + arr[rand2] + " ]");
    }
};
rand();