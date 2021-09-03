const express = require('express');
const bodyParser = require('body-parser');

const songController = require('./controllers/songController');

const app = express();
app.use(bodyParser.json());

const PORT = '3001';

app.get('/songs', songController.getAll);

app.get('/songs/:id', songController.getById);

app.post('/songs', songController.create);

app.delete('/songs/:id', songController.remove);

app.listen(PORT, () => {
  console.log('🚀 Segura que nossa app tá rodando!');
});
