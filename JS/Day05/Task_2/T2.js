document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var pass = document.getElementById("pass").value;
    var email = document.getElementById("email").value;
    var nameError = document.getElementById("nameError");
    var emailError = document.getElementById("emailError");;
    var passError = document.getElementById("passError");
    //--------------------------------------------------//
    var gender = document.getElementById("gen").checked;
    var gnError = document.getElementById("genError");
    var sp1 = document.getElementById("sp1").checked;
    var sp2 = document.getElementById("sp2").checked;
    var sp3 = document.getElementById("sp3").checked;
    var spError = document.getElementById("spError");
    //--------------------------------------------------//
    var country = document.getElementById("country").value;
    var cnError = document.getElementById("cnError");
    //-------------------------------------------//
    var gmail = /[a-z]+@[a-z]+.com/;
    var rege = email.match(gmail)
    //-------------------------------------------//
    if (!name) {
        nameError.textContent = "Name is Required";
    } else if (name.length <= 3) {
        nameError.textContent = "Name Length Must Be Greater Than 3";
    } else {
        nameError.textContent = "";
    }
    //---------------------------------------------------------//
    if (!pass) {
        passError.textContent = "password is Required";

    } else if (pass.length < 8) {
        passError.textContent = "password must be 8 character at least";
    }
    if (!rege) {
        emailError.textContent = "Email Invalid"
    } else {
        emailError.textContent = ""
    }
    if (!gender) {
        gnError.textContent = "Please select your gender"
    } else {
        gnError.textContent = ""
    }
    if ((!sp1 && !sp2) || (!sp1 && !sp3) || (!sp2 && !sp3)) {
        spError.textContent = "Please Select at least 2 sports"
    } else {
        spError.textContent = ""

    }
    if (!country) {
        cnError.textContent = "Please Select your Country"
    } else {
        cnError.textContent = ""
    }
});
//---------------------------------------------------------//