const catsService = require('../services/catsService');

const listCats = async (req, res) => {
  const result = await catsService.getAll();
  
  if (result.isError) return res.status(404).json({ message: result.message });
  
  res.status(200).json(result);
};

const catDetails = async (req, res) => {
  const { id } = req.params;

  const result = await catsService.getById(id);
  
  if (result.isError) return res.status(404).json({ message: result.message });

  res.status(200).json(result);
};

const newCat = async (req, res) => {
  const { name, age } = req.body;

  const result = await catsService.create(name, age);

  if (result.isError) return res.status(400).json({ message: result.message})

  res.status(201).json({ message: result.message });
};

module.exports = {
  listCats,
  catDetails,
  newCat,
};