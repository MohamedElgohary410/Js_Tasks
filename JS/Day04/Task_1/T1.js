let studentID = 1;

document.getElementById("studentForm").addEventListener("submit", function (event) {
    event.preventDefault();

    var nameInput = document.getElementById("studentName");
    var ageIn = document.getElementById("studentAge");
    var nameError = document.getElementById("nameError");
    var ageError = document.getElementById("ageError");
    var name = nameInput.value;
    var age = parseInt(ageIn.value);
    let isValid = true;

    //-------------------------------------------//
    if (!name) {
        nameError.textContent = "Student Name is Required";
        isValid = false;
    } else if (name.length <= 3) {
        nameError.textContent = "Name Length Must Be Greater Than 3";
        isValid = false;
    } else {
        nameError.textContent = "";
    }
    //---------------------------------------------------------//
    if (!age) {
        ageError.textContent = "Age is Required";
        isValid = false;

    } else {
        ageError.textContent = "";
    }

    if (isValid) {
        addStudentToTable(name, age);
        nameInput.value = "";
        ageIn.value = "";
    }
});
//---------------------------------------------------------//
function addStudentToTable(name, age) {
    var tableBody = document.getElementById("studentTableBody");

    var row = document.createElement("tr");

    row.innerHTML = `
    <td>${studentID}</td>
    <td>${name}</td>
    <td>${age}</td>
    <td><button class="deleteBtn" onclick="deleteStudent(this)">Delete Student</button></td>
  `;

    tableBody.appendChild(row);
    studentID++;
}

function deleteStudent(button) {
    var row = button.parentNode.parentNode;
    row.remove();
}
