const { Router } = require('express');

const router = Router();

const books = [
  { id: 1, title: 'The Lord of Rings', author: 'J.R.R. Tolkien' },
  { id: 2, title: 'Dune', author: 'Frank Herbert' },
  { id: 3, title: 'Foundation', author: 'Isaac Asimov' }, 
];

router.get('/', async (_req, res) => {
  res.status(200).json(books);
});

const validateToken = (req, res, next) => {
  const { authorization } = req.headers;

  if (authorization !== 'secret') return res.status(400).json({ message: 'Invalid Token!' });

  req.createdAt = new Date();
	req.user = { username: 'admin' };

	console.log(`validateToken:  ${req.createdAt}`);

	next();
  // next(obj); // vai chamar o middleware de erro!
};

const validateParams = (req, res, next) => {
  const { title, author } = req.body;

	console.log(`validateParams:  ${req.createdAt}`);

  if (!title || title === '') return res.status(400).json({ message: 'Title is required!' });

  if (!author || author === '') return res.status(400).json({ message: 'Author is required!' });

  next();
};

const validations = [validateToken, validateParams];

router.post('/', validations,
(req, res) => {
  const { id, title, author } = req.body;

	console.log(`middleware final:  ${req.createdAt}`);

  books.push({ id, title, author, createdAt: req.createdAt, createdBy: req.user });

  res.status(200).json({ ok: true });
});

router.put('/:id', validateToken, validateParams,
(req, res) => {
  const { id } = req.params;
  const { title, author } = req.body;
  const bookId = books.findIndex((b) => b.id === +id);

  if (bookId === -1) return res.status(404).json({ message: 'Book not found!' });

  books[bookId] = { id, title, author };

  res.status(200).json({ id, title, author });
});

module.exports = router;