import state from "./states";
import Project from "./project";
import Todo from "./todo";

export function saveProjects() {
  localStorage.setItem("projects", JSON.stringify(state.projects));
}

export function loadProjects() {
  const data = localStorage.getItem("projects");

  if (!data) return [];

  const projectsData = JSON.parse(data);

  const projects = projectsData.map((projectData) => {
    const project = new Project(projectData.name);

    project.id = projectData.id;

    projectData.todos.forEach((todoData) => {
      const todo = new Todo(
        todoData.title,
        todoData.description,
        todoData.dueDate,
        todoData.priority,
      );

      todo.id = todoData.id;
      todo.completed = todoData.completed;

      project.addTodo(todo);
    });

    return project;
  });

  return projects;
}
