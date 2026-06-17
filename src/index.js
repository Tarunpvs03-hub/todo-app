import "./style.css";
import Todo from "./modules/todo";
import Project from "./modules/project";
import state, { getCurrentProject } from "./modules/states";
import { renderProjects, renderTodos } from "./modules/render";
import { loadProjects, saveProjects } from "./modules/storage";
console.log("Webpack is working!");

const button = document.getElementById("add-project-btn");
state.projects = loadProjects();

renderProjects(state.projects);
button.addEventListener("click", () => {
  const name = prompt("Project name:");

  if (!name) return;

  const project = new Project(name);

  state.projects.push(project);
  saveProjects();
  renderProjects(state.projects);
});

const addTodoBtn = document.getElementById("add-todo-btn");

addTodoBtn.addEventListener("click", () => {
  const currentProject = getCurrentProject();

  if (!currentProject) {
    alert("Select a project first!");
    return;
  }

  const title = prompt("Todo title:");
  if (!title) return;

  const todo = new Todo(title, "", "", "Low");

  currentProject.addTodo(todo);
  saveProjects();
  renderTodos(currentProject.todos);
});
