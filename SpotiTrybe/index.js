const express = require('express')
const  bodyParser = require('body-parser');
const app = express()
const port = 3000

const songController = require('./controllers/songController');
const albumController = require('./controllers/albumController');
const artistController = require('./controllers/artistController');

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log(`Example app listening on port port!`))

app.post('/songs', songController.createMusic);
app.post('/albums', albumController.createAlbum);
app.get('/artists/:id', artistController.getById);
app.get('/albums/:id', albumController.getAlbum)