const Cats = require('../models/catModel');

const listCats = async (req, res) => {
  const cats = await Cats.getAll();
  
  if (!cats) {
    return res.status(404).json({ message: 'Gatos não encontrados' });
  }
  
  res.status(200).json(cats);
};

const catDetails = async (req, res) => {
  const { id } = req.params;

  const cat = await Cats.getCatById(id);
  console.log(cat);

  if (!cat) {
    return res.status(404).json({ message: 'Não encontrado' });
  }

  res.status(200).json(cat);
};

const newCat = async (req, res) => {
  const { name, age } = req.body;

  if (!Cats.isValid(name, age)) {
    return res.status(400).json({ message: 'O nome ou idade digitados não são válidos' });
  }

  await Cats.create(name, age);

  res.status(200).json({ message: 'Cadastrado com sucesso!'});
};

module.exports = {
  listCats,
  catDetails,
  newCat,
};