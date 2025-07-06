const express = require('express');
var cors = require('cors')

const { addTodo, deleteTodo, getTodos, updateTodo } = require('./in-memory-db');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('A simple todo app');
});

app.get('/todos', (req, res) => {
  console.log('get todos was called');
  res.send(getTodos());
});

app.post('/todos', (req, res) => {
  console.log('post todos was called');
  addTodo(req.body);
  res.send(getTodos());
});

app.delete('/todos/:id', (req, res) => {
  console.log('delete todos was called');
  deleteTodo(req.params.id);
  res.send(getTodos());
});

app.put('/todos/:id', (req, res) => {
  console.log('put todos was called');
  updateTodo(req.params.id, req.body);
  res.send(getTodos());
});



app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
