// QUERYSELECTOR //
var header = document.querySelector("#main-header");
header.getElementsByClassName.borderBottom = "solid 4px #ccc";

var input = document.querySelector("input");
input.value = "Hello world";

var submit = document.querySelector('input[type="submit"]');
submit.value = "SEND";

var item = document.querySelector(".list-group-item");
item.style.color = "red";

var lastItem = document.querySelector(".list-group-item:last-child");
console.log("lastItem is", lastItem);
lastItem.style.color = "blue";

///deliverable 1
var secondItem = document.querySelector(".list-group-item:nth-child(2)");
secondItem.style.backgroundColor = "green";

var thirdItem = document.querySelector(".list-group-item:nth-child(3)");
thirdItem.style.visibility = "hidden";
