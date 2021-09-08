const express = require('express');
const bodyParser = require('body-parser');
const peopleController = require('./controllers/peopleController');

const app = express();

app.use(bodyParser.json());

app.get('/people', peopleController.getAll);
app.get('/people/:id', peopleController.getById);
app.post('/people', peopleController.create);
app.put('/people/:id', peopleController.update);
app.delete('/people/:id', peopleController.exclude);

app.listen(3001, () => console.log('REST, here we go!'));