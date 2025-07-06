const express = require('express');
const { addTodo, deleteTodo, getTodos, updateTodo } = require('./in-memory-db');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('A simple todo app');
});

app.get('/todos', (req, res) => {
  res.send(getTodos());
});

app.post('/todos', (req, res) => {
  addTodo(req.body);
  res.send(getTodos());
});

app.delete('/todos/:id', (req, res) => {
  deleteTodo(req.params.id);
  res.send(getTodos());
});

app.put('/todos/:id', (req, res) => {
  updateTodo(req.params.id, req.body);
  res.send(getTodos());
});



app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
