const catModel = require('../models/catModel');

const getAll = async () =>{
  const cats = await catModel.getAll();

  if (!cats || !cats.length) return { isError: true, message: 'Nenhum gato cadastraado!' };

  return cats;
}

const getById = async (id) => {
  const cat = await catModel.getById(id);

  if (!cat) return { isError: true, message: 'Não encontrado' };

  return cat;
}

const isValid = (name, age) =>
  typeof name === 'string' &&
  name.length >= 3 &&
  name.length < 30 &&
  age &&
  age > 0;

const create = async (name, age) => {
  if (!isValid(name, age)) {
    return { isError: true, message: 'O nome ou idade digitados não são válidos' };
  }

  await catModel.create(name, age);

  return { message: 'Cadastrado com sucesso!' };
}

module.exports = {
  getAll,
  getById,
  create,
  isValid,
};


