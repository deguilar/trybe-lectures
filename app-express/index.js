const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const STATUS_OK=200;

app.get('/', function(_req, res) {
	res.status(STATUS_OK).json({message: 'Hello World!'});
});

const books = [
	{ id: 1, title: 'The Lord of Rings', author: 'J.R.R. Tolkien'},
	{ id: 2, title: 'Dune', author: 'Frank Herbert'},
	{ id: 3, title: 'Foundation', author: 'Isaac Asimov'},
	{ id: 4, title: 'The Man in The High Castle', author: 'Philip K Dick'},
	{ id: 5, title: '1984', author: 'George Orwell'},
	{ id: 6, title: 'Brave New World', author: 'Aldous Huxley'}
];

app.get('/books', (_req, res) => {
	res.status(STATUS_OK).json({ books });
});

app.get('/books/search', (req, res) => {
	const { title, author, releaseYear } = req.query;

	const filteredBooks = books.filter(b => b.title.includes(title));

	// res.status(STATUS_OK).json({ books: filteredBooks });

	res.status(STATUS_OK).json({ title, author, releaseYear });
});

app.get('/books/:id', (req, res) => {
	const { id } = req.params;

	const book = books.find(b => b.id === +id);

	if (!book) return res.status(404).json({ message: 'Book not found!'})

	res.status(STATUS_OK).json({ book });
});

app.post('/books', (req, res) => {
	const { id, title, author } = req.body;

	books.push({ id, title, author });

	res.status(201).json({ ok: true });
});

app.put('/books/:id', function (req, res) {
	const { id } = req.params;
	const { title, author } = req.body;
	const bookIndex = books.findIndex((b) => b.id === +id);

	if (bookIndex === -1) return res.status(404).send({ message: "Book not found!" });

	books[bookIndex] = { id, title, author };

	res.status(204).end();
});

app.delete('/books/:id', function (req, res) {
	const { id } = req.params;
	const bookIndex = books.findIndex((b) => b.id === parseInt(id));

	if (bookIndex === -1) return res.status(404).send({ message: "Book not found!" });

	books.splice(bookIndex, 1);

	res.status(204).end();
});


app.listen(3001, () => console.log('API It`s alive!'));