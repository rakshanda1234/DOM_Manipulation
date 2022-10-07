//deliverable 2
//QUERYSELECTORALL//

// var titles = document.querySelectorAll(".title");
// console.log(titles);
// titles[0].textContent = "Hello";

var item = document.querySelector(".list-group-item:nth-child(2)");
item.style.color = "green";

var odd = document.querySelectorAll("li:nth-child(odd)");
var even = document.querySelectorAll("li:nth-child(even)");

for (var i = 0; i < odd.length; i++) {
  odd[i].style.backgroundColor = "green";
  // even[i].style.backgroundColor = "#ccc";
}
