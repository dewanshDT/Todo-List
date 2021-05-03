const inputGroup = document.querySelector(".input-group");
const todoInput = document.querySelector(".todo-input");
const addButton = document.querySelector(".add-todo-btn");
const todoList = document.querySelector(".todo-container");
const todo = document.querySelector(".todo-element");
const todoCount = document.querySelector(".todo-count")

const addTodo = () => {
  todoList.innerHTML += `<li class="todo-element">
  ${todoInput.value.trim()}<div><span class="todo-status"></span>
  <button class="remove-todo-btn fas fa-minus-square"></button>
  <button class="todo-complete-btn fas fa-check-square"></button></div>
</li>`;
};

todoInput.addEventListener("input", () => {
  if (inputGroup.classList.contains("input-error")) {
    inputGroup.classList.remove("input-error");
    todoInput.value = "";
  }
});

todoList.addEventListener("mouseover", (e) => {
  console.log(e.target);
  if (e.target.classList.contains("remove-todo-btn")) {
    e.target.parentNode.querySelector(".todo-status").innerText = "Delete!";
    e.target.parentNode.querySelector(".todo-status").classList.add("delete");
  } else if (e.target.classList.contains("todo-complete-btn")){
    e.target.parentNode.querySelector(".todo-status").innerText = "Complete!";
    e.target.parentNode.querySelector(".todo-status").classList.add("done");
  } else {
    e.target.querySelector(".todo-status").innerText = "";
    e.target.querySelector(".todo-status").classList.remove("delete");
    e.target.querySelector(".todo-status").classList.remove("done");
  }
});

todoList.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove-todo-btn")) {
    e.target.parentNode.parentNode.remove();
  } else if (e.target.classList.contains("todo-complete-btn")) {
    e.target.parentNode.parentNode.classList.add("complete");
  }
});

addButton.addEventListener("click", (e) => {
  e.preventDefault();
  if ((todoInput.value.trim() == "") || (todoInput.value.trim() == "write something!!")) {
    console.error("write something!!");
    inputGroup.classList.add("input-error");
    todoInput.value = "write something!!";
  } else {
    inputGroup.classList.remove("input-error");
    addTodo();
    todoCount.innerText = todoList.childElementCount;
    console.log(todoList.childElementCount);
    todoInput.value = "";
  }
});
