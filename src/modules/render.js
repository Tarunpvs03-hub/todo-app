import state, { getCurrentProject } from "./states";

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

    todoElement.textContent = `${todo.title} | ${todo.priority} | ${todo.completed}`;

    main.append(todoElement);
  });
}
