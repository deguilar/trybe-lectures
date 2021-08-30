const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const books = [
  { id: 1, title: 'The Lord of Rings', author: 'J.R.R. Tolkien' },
  { id: 2, title: 'Dune', author: 'Frank Herbert' },
  { id: 3, title: 'Foundation', author: 'Isaac Asimov' }, 
];

app.get('/books', (_req, res) => {
  res.status(200).json(books);
});

app.post('/books', (req, res) => {
  const { id, title, author } = req.body;

  books.push({ id, title, author });

  res.status(200).json({ ok: true });
});

app.put('/books/:id', (req, res) => {
  const { id } = req.params;
  const { title, author } = req.body;
  const bookId = books.findIndex((b) => b.id === +id);

  if (bookId === -1) return res.status(404).json({ message: 'Book not found!' });

  books[bookId] = { id, title, author };

  res.status(200).json({ id, title, author });
});

app.listen(3001, () => console.log('🚀 here we go!'));