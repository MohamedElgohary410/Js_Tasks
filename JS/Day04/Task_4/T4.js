var arr = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"
]
var img = document.getElementById('img1')
var i = 0

function updateimg(i) {
    img.src = arr[i];
}

function nextimg() {
    i++;
    if (i > arr.length - 1) {
        i = 0
    }
    updateimg(i)
}

function lastimg() {
    i--;
    if (i < 0) {
        i = arr.length - 1
    }
    updateimg(i)
}
var myInterval;
function palyimg() {
    myInterval = setInterval(
        function () {
            i++;
            if (i > arr.length - 1) {
                i = 0
            }
            updateimg(i);
        }, 1000
    )
}
function stop() {
    clearInterval(myInterval);
}