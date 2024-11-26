var child1 = document.getElementById("red");
var child2 = document.getElementById("yellow");
var child3 = document.getElementById("green");
var span = document.getElementById("span");

var currentLight = 'red';
setInterval(trafficLight, 1500);
function trafficLight() {

  child1.style.backgroundColor = "gray";
  child2.style.backgroundColor = "gray";
  child3.style.backgroundColor = "gray";

  if (currentLight === 'red') {
    child1.style.backgroundColor = "red";
    child2.style.backgroundColor = "gray";
    child3.style.backgroundColor = "gray";
    span.innerHTML = "Stop";
    span.style.color = "red";
    currentLight = 'yellow';
  } else if (currentLight === 'yellow') {
    child2.style.backgroundColor = "yellow";
    child1.style.backgroundColor = "gray";
    child3.style.backgroundColor = "gray";
    span.innerHTML = "Steady";
    span.style.color = "yellow";
    currentLight = 'green';
  } else if (currentLight === 'green') {

    child3.style.backgroundColor = "green";
    child1.style.backgroundColor = "gray";
    child2.style.backgroundColor = "gray";
    span.innerHTML = "Go";
    span.style.color = "green";
    currentLight = 'red';
  }

};

