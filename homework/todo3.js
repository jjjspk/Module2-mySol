// 1. init() :: Add an event listener to the "addButton" button to call the "addTask" function
// when clicked.
// 2. addTask() ::
// 2.1 Create a <li> tag and set its textContent to the value from the <input type="text"
//  id="todoInput" placeholder="Enter a new task"> field.
// 2.2 Add a <li> tag to the <ul id="todoList"></ul>
// 2.3 After adding the item, clear the <input type="text" id="todoInput"
//  placeholder="Enter a new task"> field to prepare for the next task.

function init() {
  //your code here
  const addButton = document.getElementsByTagName("button")[0]; //ทำให้เป็น node ตอนแรกเป็น collection
  addButton.addEventListener("click", addTask);
}
function addTask() {
  //your code here
  const liElement = document.createElement("li");

  const input = document.querySelector(".input").value;

  liElement.textContent = input;
}
init();
