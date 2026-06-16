import "./style.css";
import Todo from "./modules/todo";
import Project from "./modules/project";
console.log("Webpack is working!");

const content = document.getElementById("content");

content.textContent = "Todo App";

const project = new Project("DSA");
const todo1 = new Todo("Stack", "do 2 problems", "12/10/20", "low");
const todo2 = new Todo("Stack", "do 2 problems", "12/10/20", "low");
const todo3 = new Todo("Stack", "do 2 problems", "12/10/20", "low");

project.addTodo(todo1);
project.addTodo(todo2);
project.addTodo(todo3);
project.removeTodo(todo2.id);
console.log(project);
console.log(todo2);
project.updateTodo(todo1.id, {
  priority: "High",
  completed: true,
});

console.log(todo2);
