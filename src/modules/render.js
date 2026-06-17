import state, { getCurrentProject } from "./states";
import { saveProjects } from "./storage";
export function renderProjects(projects) {
  const container = document.getElementById("projects-container");

  container.innerHTML = "";

  projects.forEach((project) => {
    const projectElement = document.createElement("div");

    projectElement.textContent = project.name;
    projectElement.dataset.id = project.id;

    projectElement.addEventListener("click", () => {
      state.currentProjectId = project.id;

      const currentProject = getCurrentProject();

      renderTodos(currentProject.todos);
    });

    container.append(projectElement);
  });
}

export function renderTodos(todos) {
  const main = document.getElementById("main");

  main.innerHTML = "";

  todos.forEach((todo) => {
    const todoElement = document.createElement("div");

    todoElement.classList.add("todo-card");

    todoElement.innerHTML = `
      <h3>${todo.title}</h3>

      <p>${todo.description}</p>

      <div class="todo-meta">
        <span>📅 ${todo.dueDate || "No due date"}</span>
        <span>⚡ ${todo.priority}</span>
        <span>${todo.completed ? "✅ Done" : "⏳ Pending"}</span>
      </div>

      <button class="complete-btn">
    ${todo.completed ? "Undo" : "Complete"}
      </button>
      <button class="delete-btn">Delete</button>
    `;
    const deleteBtn = todoElement.querySelector(".delete-btn");

    deleteBtn.addEventListener("click", () => {
      const currentProject = state.projects.find(
        (project) => project.id === state.currentProjectId,
      );

      currentProject.removeTodo(todo.id);
      saveProjects();
      renderTodos(currentProject.todos);
    });
    const completeBtn = todoElement.querySelector(".complete-btn");

    completeBtn.addEventListener("click", () => {
      const currentProject = state.projects.find(
        (project) => project.id === state.currentProjectId,
      );

      todo.completed = !todo.completed;

      saveProjects();

      renderTodos(currentProject.todos);
    });
    main.append(todoElement);
  });
}
