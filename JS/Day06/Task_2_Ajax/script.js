function fetchUserData() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var users = JSON.parse(xhr.responseText);
            displayUsers(users);
        }
    };
    xhr.send();
}
//------------------------------------------------------------------------//
function displayUsers(users) {
    var userTableBody = document.getElementById('user-table').getElementsByTagName('tbody')[0];
    for (var i = 0; i < 5; i++) {
        var row = document.createElement('tr');

        var cellId = document.createElement('td');
        cellId.innerText = users[i].id;
        row.appendChild(cellId);

        var cellName = document.createElement('td');
        cellName.innerText = users[i].name;
        row.appendChild(cellName);

        var cellEmail = document.createElement('td');
        cellEmail.innerText = users[i].email;
        row.appendChild(cellEmail);

        var cellActions = document.createElement('td');
        var detailsButton = document.createElement('button');
        detailsButton.innerText = "Show Details";
        detailsButton.setAttribute('data-user-id', users[i].id);
        detailsButton.onclick = function () {
            showUserDetails(this.getAttribute('data-user-id'));
        };
        cellActions.appendChild(detailsButton);
        row.appendChild(cellActions);

        userTableBody.appendChild(row);
    }
}
//-------------------------------------------------------------------------//
var data1 = document.getElementById("data1");
var data2 = document.getElementById("data2");
var data3 = document.getElementById("data3");
var data4 = document.getElementById("data4");
function showUserDetails(userId) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users/" + userId, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var user = JSON.parse(xhr.responseText);
            data1.innerHTML = "Address: " + user.address.street + ", " + user.address.city + ", " + user.address.zipcode + "";
            data2.innerHTML = "Name: " + user.name + " ";
            data3.innerHTML = "Email: " + user.email + "";
            data4.innerHTML = "Website: " + user.website + "";
        }
    };
    xhr.send();
}

window.onload = function () {
    fetchUserData();
};