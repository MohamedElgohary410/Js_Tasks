var message = "Lorem ipsum dolor sit"
function startmessage() {
    window.open("message.html", "", "width=300,height=300")
}
//---------------------------------------//
var p = document.getElementById('p')
var i = 0;
function typing(i) {
    p.textContent += message[i];
}
//---------------------------------------//
var start = setInterval(function () {
    if (i == message.length - 1) {
        clear()
    }
    typing(i);
    i++;

}, 300);
//---------------------------------------//
function clear() {
    clearInterval(start)
    window.close()
}