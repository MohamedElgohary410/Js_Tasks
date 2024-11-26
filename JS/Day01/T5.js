var fname, name_err, phone_num
    , mob_num, mob_num1, email,
    gmail, colorCh, colorPicked;
//-----------------------------------------------------------------//
fname = prompt("Enter your name")
do {
    for (let i = 0; i < fname.length; i++) {
        name_err = Number(fname.charAt(i));
        name_err += 10;
        if (name_err) {
            fname = prompt("Enter your name Without Numbers")
            break;
        }
    }
} while (!isNaN(name_err))
//-----------------------------------------------------------------//
do {
    phone_num = prompt("Enter phone number\n8 numbers");
} while (phone_num.length != 8 || isNaN(Number(phone_num)))
//-----------------------------------------------------------------//
do {
    mob_num = prompt("Enter mobile number\n11 numbers");
    mob_num1 = mob_num.startsWith("010");
    if (!mob_num1) {
        mob_num1 = mob_num.startsWith("011");
    }
    else if (!mob_num1) {
        mob_num1 = mob_num.startsWith("012");
    }
} while (mob_num.length != 11 || isNaN(Number(phone_num))
    || !mob_num1)
//-----------------------------------------------------------------//
gmail = /[a-z]+@[0-9]+.com/;
do {
    email = prompt("Enter your email");
    rege = email.match(gmail)
} while (!rege)
colorCh = prompt("choose your fav color\nr for Red\ng for Green \nb for Blue")
if (colorCh === 'r')
    colorPicked = '#f00'
else if (colorCh === 'g')
    colorPicked = '#0f0'
else
    colorPicked = '#00f'
//-----------------------------------------------------------------//
document.write("<p style='color:" + colorPicked + "'>Welcome Dear guest " + fname + "<p/>")
document.write("<p style='color:" + colorPicked + "'>Your telephone number is " + phone_num + "<p/>")
document.write("<p style='color:" + colorPicked + "'>Your mobile number is " + mob_num + "<p/>")
document.write("<p style='color:" + colorPicked + "'>Your email address is " + email + "<p/>")