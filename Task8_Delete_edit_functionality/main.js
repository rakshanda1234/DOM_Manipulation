//Task - 8

var form = document.getElementById("addForm");
var itemList = document.getElementById("items");

//Form submit event
form.addEventListener("submit", addItem);

//Delete event
itemList.addEventListener("click", removeItem);

//Add Item
function addItem(e) {
  e.preventDefault();

  // console.log(1);

  //Get input value
  var newItem = document.getElementById("item").value;

  ///create new li element
  var li = document.createElement("li");

  //add class
  li.className = "list-group-item";

  //add text node with input value
  li.appendChild(document.createTextNode(newItem));

  itemList.appendChild(li);

  // create del button element
  var deleteBtn = document.createElement("button");

  //Add classes to del button
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";

  //Append text node
  deleteBtn.appendChild(document.createTextNode("X"));

  //Append button to li
  li.appendChild(deleteBtn);

  //Append li to list
  itemList.appendChild(li);
}

//Remove item
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure?")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}
