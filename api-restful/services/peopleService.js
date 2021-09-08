const peopleModel = require('../models/peopleModel');

const getAll = async () => {
  const people = await peopleModel.getAll();

  return people;
};

const getById = async (id) => {
  const person = await peopleModel.getById(id);

  return person;
};

const create = async (name, age) => {
  const person = await peopleModel.create(name, age);

  return person;
}

const update = async (id, name, age) => {
  const person = await peopleModel.update(id, name, age);

  return person;
}

const exclude = async (id) => {
  await peopleModel.exclude(id);
}

module.exports ={ 
  getAll,
  getById,
  create,
  update,
  exclude,
}