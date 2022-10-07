// Task-7 //

//TRAVERSING THE DOM
var itemList = document.querySelector("#items");

//parentNode
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = "#f4f4f4";
console.log(itemList.parentNode.parentNode.parentNode);
parentNode = document.getElementById("items");
parentNode.innerHTML =
  "<li>Item 1</li><li>Item 2</li><li>Item 3</li><li>Item 4</li>";

parentNode.innerHTML = "<li>Hello World</li>" + parentNode.innerHTML;

//parentElement
/*console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = "#f4f4f4";
console.log(itemList.parentElement.parentElement.parentElement);
*/

//childNodes
//console.log(itemList.childNodes);

/*console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = "yellow";

*/
/*firstChild
console.log(itemList.firstChild);

//firstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = "Hello 1";

*/

/*LastChild
console.log(itemList.lastChild);
//lastElementChild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = "Hello 4";

*/

/*nextSibling
console.log(itemList.nextSibling);
//nextElementSibling
console.log(itemList.nextElementSibling);
*/

/*previousSibling
console.log(itemList.previousSibling);

//previousElementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = "green";
*/

//createElement

//create a div
var newDiv = document.createElement("div");

//Add class
newDiv.className = "hello";

//Add id
newDiv.id = "hello 1";

//Add attr
newDiv.setAttribute("title", "hello Div");

//create text node
var newDivText = document.createTextNode("Hello World");

//Add text to Div
newDiv.appendChild(newDivText);

var container = document.querySelector("header .container");
var h1 = document.querySelector("header h1");

console.log(newDiv);

newDiv.style.fontSize = "30px";

container.insertBefore(newDiv, h1);
