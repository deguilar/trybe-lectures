const express = require('express')
const bodyParser = require('body-parser');

const app = express()
app.use(bodyParser.json());

const port = 3000

const productsController = require('./controllers/productsController');
const usersController = require('./controllers/usersController');
const selloffsController = require('./controllers/selloffsController');

app.get('/products', productsController.getAll);
app.get('/products/:id', productsController.getById);
app.post('/products', productsController.create);

app.get('/users', usersController.getAll);
app.get('/users/:id', usersController.getById);
app.post('/users', usersController.create);
app.put('/users/:id', usersController.update);
app.delete('/users/:id', usersController.remove);

app.get('/selloffs', selloffsController.getAll);
app.get('/selloffs/:id', selloffsController.getById);
app.post('/selloffs', selloffsController.create);
app.post('/selloffs/:id/addProducts', selloffsController.addProductsInSelloff);
app.put('/selloffs/:id', selloffsController.update);
app.delete('/selloffs/:id', selloffsController.remove);

app.listen(port, () => console.log(`Example app listening on port port!`))