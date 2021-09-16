const express = require('express');
const bodyParser = require('body-parser');
const postsController = require('../controllers/postsController');
const usersController = require('../controllers/usersController');
const loginController = require('../controllers/loginController');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.json());

app.get('/api/posts', postsController);
app.post('/api/users', usersController);
app.post('/api/login', loginController);

app.listen(PORT, () => console.log(`Conectado na porta ${PORT}`));
