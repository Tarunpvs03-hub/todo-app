import "./style.css";
import Todo from "./modules/todo";
import Project from "./modules/project";
import state from "./modules/states";
import { renderProjects } from "./modules/render";
console.log("Webpack is working!");

const project = new Project("DSA");
const todo1 = new Todo("Stack", "do 2 problems", "12/10/20", "low");
const todo2 = new Todo("Stack", "do 2 problems", "12/10/20", "low");
const todo3 = new Todo("Stack", "do 2 problems", "12/10/20", "low");
const project2 = new Project("placements");
state.projects.push(project);
state.projects.push(project2);
project.addTodo(todo1);
project.addTodo(todo2);
project.addTodo(todo3);
project.removeTodo(todo2.id);

project.updateTodo(todo1.id, {
  priority: "High",
  completed: true,
});

renderProjects(state.projects);

const button = document.getElementById("add-project-btn");

button.addEventListener("click", () => {
  const name = prompt("Project name:");

  if (!name) return;

  const project = new Project(name);

  state.projects.push(project);

  renderProjects(state.projects);
});
