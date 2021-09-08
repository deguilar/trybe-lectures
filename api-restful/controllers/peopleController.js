const peopleService = require('../services/peopleService');

const getAll = async (req, res) => {
  const people = await peopleService.getAll();

  res.status(200).json(people);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const person = await peopleService.getById(id);

  if (!person) return res.status(404).json({ message: 'Pessoa não encontrada'});

  res.status(200).json(person);
};

const create = async (req, res) => {
  const { name, age } = req.body;

  
  const people = await peopleService.create(name, age);

  res.status(201).json({ message: 'Cadastrado com sucesso!', people })
}

const update = async (req, res) => {
  const { id } = req.params;
  const { name, age } = req.body;

  const person = await peopleService.update(id, name, age);

  res.status(200).json({ message: 'Atualizado com sucesso', person });
}

const exclude = async (req, res) => {
  const { id } = req.params;

  await peopleService.exclude(id);

  res.status(204).end();
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  exclude,
}