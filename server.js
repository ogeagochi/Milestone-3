const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

let todos = [];

// Route to get all todos
app.get('/submit-form', (req, res) => {
  res.json(todos);
});

// Route to add a new todo
app.post('/todos', (req, res) => {
  const todo = req.body;
  todos.push(todo);
  res.status(201).json(todo);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
