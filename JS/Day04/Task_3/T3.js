function changeMode() {
    var darkM = document.querySelector('body')
    var btn = document.getElementById("btn")
    if (darkM.style.backgroundColor == "white") {
        darkM.style.backgroundColor = "black"
        darkM.style.color = "white"
        btn.textContent = "White Mode"
    } else {
        darkM.style.backgroundColor = "white"
        darkM.style.color = "black"
        btn.textContent = "Dark Mode"
    }
}