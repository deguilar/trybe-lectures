const express = require('express');
const bodyParser = require('body-parser');
const characterModel = require('./models/characterModel');

const app = express();
app.use(bodyParser.json());

app.get('/characters', async (req, res) => {
	const characters = await characterModel.getAll();
	res.status(200).json(characters)
});

app.get('/characters/:id', async (req, res) => {
	const { id } = req.params;

	const character = await characterModel.getById(id);
	
	if (!character) return res.status(404).json({ message: 'Character not found!'});

	res.status(200).json(character);
});

app.post('/characters', async (req, res) => {
	const { name, cartoon } = req.body;

	const character = await characterModel.create(name, cartoon);

	res.status(201).json(character);
});


app.listen(3001, () => console.log('🚀 Here we go again!'));