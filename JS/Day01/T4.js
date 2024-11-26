var question1 = prompt("Do you fly?\ny for yes\n n for no");
if (question1 === "y") {
    var question2 = prompt("Are you Wild?\ny for yes\n n for no");
    if (question2 === "y") {
        document.write("You are Eagle<br>");
        document.write("<img src='https://th.bing.com/th/id/OIP.zHqDOl8tuZd8x32ghSvh7AHaEK?rs=1&pid=ImgDetMain.jpg' style='width:200px'/>");
    }
    else {
        document.write("You are Parrot<br>");
        document.write("<img src='https://2.bp.blogspot.com/-SWnnC9aFCSM/TmREVBdWNMI/AAAAAAAAA1s/FnhCBJ2Aew8/s1600/parrot_4.jpg' style='width:200px'/>");

    }
} else if (question1 === "n") {
    var question3 = prompt("Do you live under sea?\ny for yes\n n for no");
    if (question3 === "y") {
        var question4 = prompt("Are you Wild?\ny for yes\n n for no");
        if (question4 == "y") {
            document.write("You are Shark<br>");
            document.write("<img src='https://th.bing.com/th/id/OIP.v0pUXPj0NYJBrruMACbl6AAAAA?rs=1&pid=ImgDetMain' style='width:200px'/>");

        } else {
            document.write("You are Dolphin<br>");
            document.write("<img src='https://th.bing.com/th/id/OIP.NnjuVNclvr-qGKnfdd5OdgHaE8?rs=1&pid=ImgDetMain' style='width:200px'/>");

        }
    } else {
        var question4 = prompt("Are you Wild?\ny for yes\n n for no");
        if (question4 == "y") {
            document.write("You are Lion<br>");
            document.write("<img src='https://th.bing.com/th/id/R.d62f7a3c28313606a651d639987f7439?rik=n6GypXm3aJnSiA&riu=http%3a%2f%2fstreamafrica.com%2fwp-content%2fuploads%2f2014%2f01%2fafrican-lion-wallpapers-hd.jpg&ehk=mUq%2bogVKZgC%2btsGrakhLON30INbGT3mQxJofJBpSi9k%3d&risl=&pid=ImgRaw&r=0' style='width:200px'/>");

        } else {
            document.write("You are Cat<br>");
            document.write("<img src='https://th.bing.com/th/id/OIP.s_y0WF4OVKNpLln1IVtRXgHaEK?rs=1&pid=ImgDetMain' style='width:200px'/>");

        }
    }
}