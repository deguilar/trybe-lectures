const express = require('express');
const bodyParser = require('body-parser');
const catsController = require('./controllers/catController');

const app = express();

/* O que é isso? */
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', './views')

/* Busca todos os gatos */
app.get('/cats', catsController.getAll);

/* Cria um novo gato */
app.post('/cats', catsController.create);

/* Busca um gato por ID */
app.get('/cats/:id', catsController.getById);

app.listen(3001, () => {
  console.log('Ouvindo a porta 3001!');
});