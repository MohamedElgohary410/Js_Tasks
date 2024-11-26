// var p = document.getElementsByTagName("p")[0];

// console.log(p);
// function changeContent() {
// 	/** object */
// 	// set
// 	// p.innerText = "<h1>Welcome Front End</h1>";
// 	// get
// 	// console.log(p.innerText);
// 	p.innerHTML = "<h1>Welcome Front</h1>";
// }

/** change style */
// var input1 = document.getElementById("input1");
// var span = document.getElementById("output");
// var inputs = document.getElementsByName("choose");
// function execute() {
// 	for (var i = 0; i < inputs.length; i++) {
// 		if (inputs[i].checked) {
// 			span.innerHTML = inputs[i].value;
// 		}
// 	}
// }

// var p = document.querySelector("#parent").firstElementChild;
// var img = document.getElementById("img1");

// function execute() {
// 	if (img.hasAttribute("alt")) {
// 		img.removeAttribute("alt");
// 	} else {
// 		img.setAttribute("alt", "welcome");
// 	}
// 	// console.log(img.hasAttribute("alt"));
// 	// div.setAttribute("class", "jsClass");
// 	// console.log(div.getAttribute("class"));
// 	// console.log(div.getAttribute("id"));
// 	// console.log(img.getAttribute("id"));
// 	// img.setAttribute("src", "./2.jpg");
// }
// function execute() {
// 	// p.classList.add("jsClass");
// 	// p.classList.remove("info");
// 	// console.log(p.classList);
// 	// p.classList.toggle("jsClass");
// }
// function execute() {
// 	p.className += " jsClass";
// }
// function execute() {
// 	p.style.backgroundColor = "red";
// 	p.style.padding = "60px";
// 	p.style.color = "#000";
// }
/**
 *
 * <p>Welcome Front</p>
 */
// var div = document.getElementById("parent");
// var result = document.getElementById("result");
// var element = document.createElement("p");
// element.innerHTML = "Welcome Front";
// element.setAttribute("class", "info testData");

// function execute() {
// 	// div.remove();
// 	// document.body.appendChild(element);
// 	// result.before(element);
// 	// div.append(element, span, "Hello");
// 	// div.appendChild(element);
// }

/** Bom --> Browser Object Model
 * == window
 * == screen // self study
 * == history
 * == location
 * == navigation
 *
 *
 */
// var myWindow;
// function openWindow() {
// 	myWindow = window.open("about.html", "", "width=200,height=200");
// }
// function closeWindow() {
// 	myWindow.close();
// }
// function moveToWindow() {
// 	myWindow.moveTo(300, 300);
// }
// function moveByWindow() {
// 	myWindow.moveBy(-100, -100);
// }
// function resizeToWindow() {
// 	myWindow.resizeTo(400, 400);
// }
// function resizeByWindow() {
// 	myWindow.resizeBy(100, 100);
// }
//

// var person = {
// 	fname: "ali",
// 	display: function () {
// 		console.log("sdd");
// 	},
// };

// person.display()

// setTimeout(function () {
// 	open("about.html");
// }, 3000);
// var i = 0;

// var myInterval = setInterval(function () {
// 	console.log(i++);
// }, 1000);

// setTimeout(function () {
// 	clearInterval(myInterval);
// }, 5000);
// var myInterval;
// var span = document.getElementById("output");
// var i = 0;
// function start() {
// 	myInterval = setInterval(function () {
// 		span.innerHTML = ++i;
// 	}, 1000);
// }
// function stop() {
// 	clearInterval(myInterval);
// }

// var span = document.getElementById("output");

// function startDownload() {
// 	span.style.display = "block";
// 	setTimeout(function () {
// 		span.style.color = "green";
// 		span.innerHTML = "<a href='#google'>click here</a>";
// 	}, 3000);
// }

// function execute() {
// 	// location.reload();
// 	// get
// 	// location.href = "https://www.google.com.eg/";
// 	// console.log(location.href);
// 	// console.log(location.pathname);
// 	// location.pathname = "./about.html";
// 	// location.reload();
// 	// location.assign("https://www.google.com.eg/");
// 	// location.replace("https://www.google.com.eg/");
// }

// navigator.geolocation.getCurrentPosition(
// 	function (position) {
// 		console.log(position.coords.latitude);
// 		console.log(position.coords.longitude);
// 	},
// 	function () {
// 		console.log("user denied the access");
// 	}
// );
/** Events */
// var btn = document.getElementById("btn");
// var p = document.getElementsByClassName("info")[0];
// function execute(e) {
// 	console.log(e);
// 	p.style.background = "red";
// }

// btn.onclick = function (e) {
// 	console.log(e.target);
// };
// btn.addEventListener("click", changeStyle);
// function changeStyle(color) {
// 	p.style.background = color;
// }

// btn.addEventListener("click", changeContent);
// function changeContent() {
// 	p.innerHTML = "<h1>Welcome Front</h1>";
// }

// btn.addEventListener("click", changeContent);

// btn.removeEventListener("click", changeContent);
// setTimeout(function () {
// 	btn.removeEventListener("click", changeStyle);
// 	console.log("done");
// }, 5000);
// btn.onclick = function () {
// 	changeStyle("green");
// 	changeContent();
// };

// btn.onclick = changeContent;
// btn.onmouseenter = function () {
// 	p.style.background = "red";
// };
// callback function
// function first() {
// 	console.log("First");
// }
// function second(e) {
// 	e.stopPropagation();

// 	console.log("second");
// }
// function third() {
// 	console.log("Third");
// }

// var input = document.getElementById("input1");
// var output = document.getElementById("output");

// input.addEventListener("focus", function () {
// 	input.style.border = "2px solid blue";
// });
// input.addEventListener("blur", function () {
// 	input.style.border = "2px solid orange";
// });
// input.addEventListener("input", function (e) {
// 	if (input.value.length >= 3) {
// 		input.style.border = "5px solid green";
// 		output.innerHTML = "";
// 	} else {
// 		input.style.border = "5px solid red";
// 		output.innerHTML = "length > 3";
// 	}
// });