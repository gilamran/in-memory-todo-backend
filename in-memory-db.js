const todos = [
  {
    id: 1,
    title: "Buy groceries",
    description: "Buy groceries for the week",
    completed: false,
  },
  {
    id: 2,
    title: "Walk the dog",
    description: "Walk the dog for 30 minutes",
    completed: true,
  },

  {
    id: 3,
    title: "Buy a new phone",
    description: "Buy a new phone for the week",
    completed: false,
  },
];

const addTodo = (todo) => {
  todos.push(todo);
};

const deleteTodo = (id) => {
  const index = todos.findIndex((todo) => todo.id === id);
  if (index !== -1) {
    todos.splice(index, 1);
  }
};

const getTodos = () => {
  return todos;
};

const updateTodo = (id, todo) => {
  const index = todos.findIndex((todo) => todo.id === id);
  if (index !== -1) {
    todos[index] = todo;
  }
};

module.exports = {
  addTodo,
  deleteTodo,
  getTodos,
  updateTodo,
};
