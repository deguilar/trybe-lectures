const express = require('express')
const bodyParser = require('body-parser');

const app = express()
app.use(bodyParser.json());

const port = 3000

const productsController = require('./controllers/productsController');

app.get('/products', productsController.getAll);
app.get('/products/:id', productsController.getById);
app.post('/products', productsController.create);


app.listen(port, () => console.log(`Example app listening on port port!`))