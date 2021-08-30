const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs').promises;
const userRouter = require('./userRouter');
const booksRouter = require('./booksRouter');

const app = express();

app.use(bodyParser.json());

// lendo do arquivo json
// app.get('/books', async (_req, res, next) => {
// 	try {
// 		const content = await fs.readFile('./book.json');
// 		const books = JSON.parse(content);
// 		res.status(200).json(books);
// 	} catch (e) {
// 		console.log('Tratando no middleware específico!');
// 		// res.status(400).json({ message: e.message });

// 		next(e.message);
// 	}

// 	// res.status(200).json(books);
// });

// lendo direto da array

app.use('/users', userRouter);
app.use('/books', booksRouter);

app.use((err, _req, res, _next) => {
  console.log('⚠️ Passou pelo middleware genérico!');
  res.status(400).json({ message: err });
});

app.listen(3001, () => console.log('🚀 here we go!'));