// Adding task When the user enters text into the input field and clicks the button, add the
// text as a new item in the list <ul id="todoList"></ul>.

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
  const addbutton = document.querySelector(".addButton");
  addbutton.addEventListener("click", addTask);
  //   addbutton.addEventListener("click", (addTask) => console.log("ddsds")); //วิธีเอาไว้เช็ค
}

function addTask() {
  //your code here

  const liElement = document.createElement("li");

  const input = document.querySelector(".todoInput").value;

  liElement.textContent = input;

  //   const ulElement = document.getElementById("todoList"); //เก็บค่าเตรียม add
  //   ulElement.appendChild(liElement); //2.2 add

  document.getElementById("todoList").appendChild(liElement);  //เรียกจาก id ได้เลย
  input.value = ""; //2.3
}
init();
