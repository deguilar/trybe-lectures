const { Router } = require('express');

const router = Router();

const users = [];

router.get('/', (req, res) => {
	res.status(200).json(users);
});

// router.get('/:id', (req, res) => {
// 	res.status(200).json(users);
// });

router.post('/', (req, res) => {
  const { id, email, phone } = req.body;

  users.push({ id, email, phone });

  res.status(200).json({ ok: true });
});

module.exports = router;