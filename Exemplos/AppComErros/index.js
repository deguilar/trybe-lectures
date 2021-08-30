const express = require('express');
const fetch = require('node-fetch');
const fs = require('fs').promises;
const app = express();

app.get('/fazerRequest', async (req, res, next) => {
	const { url } = req.query;

	try {
		const response = await fetch(url).then((resp) => resp.json());

		res.status(200).json({ data: response });
	} catch (e) {
		res.status(500).json({ error: err, code: 001 })
		// next(e.message);
	}
});

app.get('/lerArquivo', async (req, res, next) => {
	const { fileName } = req.query;

	try {
		const response = await fs.readFile(fileName);

		res.status(200).json({ data: response });
	} catch (e) {
		// res.status(500).json({ error: e.message, code: 001 })
		next(e.message);
	}
});

app.use((err, req, res, next) => {
	console.log('middleware genérico de erro!');
	res.status(500).json({ error: err, code: 001 })
});


app.listen(3002);