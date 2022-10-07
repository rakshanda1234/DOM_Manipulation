function saveToLocalStorage(event) {
  event.preventDefault();
  const name = event.target.name.value;
  const email = event.target.email.value;

  const obj = {
    name,
    email,
  };
  localStorage.setItem(obj.email, JSON.stringify(obj));
  showNewUserOnScreen(obj);
}

window.addEventListener("DOMContentLoaded", () => {
  const localStorageObj = localStorage;
  const localStoragekeys = Object.keys(localStorageObj);

  for (var i = 0; i < localStoragekeys.length; i++) {
    const key = localStoragekeys[i];
    const userDetailsString = localStorageObj[key];
    const userDetailsObj = JSON.parse(userDetailsString);
    showNewUserOnScreen(userDetailsObj);
  }
});

function showNewUserOnScreen(user) {
  const parentNode = document.getElementById("listOfUsers");
  const childHTML = `<li id=${user.email}>${user.name}-${user.email}
  <button onClick=deleteUser("${user.email}")>Delete</button>
  <button onClick=editUserDetails("${user.email}","${user.name}")>Edit</button>
  </li>`;

  parentNode.innerHTML = parentNode.innerHTML + childHTML;
}

//edit user
function editUserDetails(emailId, name) {
  document.getElementById("email").value = emailId;
  document.getElementById("name").value = name;

  deleteUser(emailId);
}

//deleteUser('abc@gmail.com')
function deleteUser(emailId) {
  console.log(emailId);
  localStorage.removeItem(emailId);
  removeUserFromScreen(emailId);
}

function removeUserFromScreen(emailId) {
  const parentNode = document.getElementById("listOfUsers");
  const childNodeToBeDeleted = document.getElementById(emailId);

  if (childNodeToBeDeleted) {
    parentNode.removeChild(childNodeToBeDeleted);
  }
}
