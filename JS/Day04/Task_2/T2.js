function output() {
    var tags = document.getElementById('tagname').value.trim()
    var classN = document.getElementById('className').value.trim()
    var id = document.getElementById('id').value.trim()
    var name = document.getElementById('name').value.trim()
    var div = document.getElementById('result')


    var out = "";
    if (tags) {
        var tagCount = document.getElementsByTagName(tags).length;
        out += `Number of ${tags}: ${tagCount} `;
    }
    if (classN) {
        var classCount = document.getElementsByClassName(classN).length;
        out += ` Class ${classN}:  ${classCount} `;
    }
    if (id) {
        var idbool = document.getElementById(id) ? true : false;
        out += ` ID ${id}: ${idbool}`;
    }
    if (name) {
        var nameCount = document.getElementsByName(name).length;
        out += ` Name ${name}:  ${nameCount}`
    }
    div.innerHTML = out
}