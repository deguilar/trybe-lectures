const express = require('express');
const TasksController = require('./controllers/TasksController');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use('/tasks', TasksController);

const PORT = process.env.PORT || 3000;

app.listen(PORT);