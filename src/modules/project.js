export default class Project {
  constructor(name) {
    this.id = crypto.randomUUID();
    this.name = name;
    this.todos = [];
  }

  addTodo(todo) {
    this.todos.push(todo);
  }
  removeTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
  getTodo(id) {
    return this.todos.find((todo) => todo.id === id);
  }
  updateTodo(id, updates) {
    const todo = this.getTodo(id);

    if (todo) {
      Object.assign(todo, updates);
    }
  }
}
