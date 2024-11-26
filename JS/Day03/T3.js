data = {
    name: "Mohamed",
    age: 22,
    grades: {
        datastructue: 95,
        oop: 90,
        javaScript: 100,
    },
    contactInfo: {
        email: "mohamedelgohary410@gmail.com",
        phone: "01093441358"
    }
}
function printer(obj) {
    for (var key in obj) {
        if (key == "name") {
            document.write("name: ", obj.name);
            document.write("<br></br>");
        }
        if (key == "age") {
            document.write("age: ", obj.age);
            document.write("<br></br>");
        }
        if (key == "grades") {
            document.write("grades.Data Structure: ", obj.grades.datastructue);
            document.write("<br></br>");
            document.write("grades.Oop: ", obj.grades.oop);
            document.write("<br></br>");
            document.write("obj.grades.JavaScript: ", obj.grades.javaScript);
            document.write("<br></br>");
        }
        if (key == "contactInfo") {
            document.write("myContacts.email: ", obj.contactInfo.email);
            document.write("<br></br>");
            document.write("myContacts.phone: ", obj.contactInfo.phone);
        }
    }
}


printer(data)