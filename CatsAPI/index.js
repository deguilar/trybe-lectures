const express = require('express')
const bodyParser = require('body-parser');
const catController = require('./controllers/catsController');

const app = express()
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/cats', catController.listCats);

app.get('/cats/:id', catController.catDetails);

app.post('/cats', catController.newCat);


app.listen(port, () => console.log(`Example app listening on port port!`))