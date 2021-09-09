const express = require('express');
const middlewares = require('../middlewares/validation');
const database = require('../database');

const router = express.Router();

// Listando todas as pessoas
router.get('/', (req, res) => res.status(200).json({ clients: database }));

// Cadastrando nova pessoa
router.post('/',
  middlewares.isValidName,
  (req, res) => {
    const newClient = {
      ...req.body,
      id: database.length + 1,
    };

    database.push(newClient);

    res.status(201).json({ clients: database[database.length-1] });
  }
);

module.exports = router;
