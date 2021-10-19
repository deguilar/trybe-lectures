const connection = require('./connection')

const getAll = async () =>{
    const [cats] = await connection.execute('SELECT name, age FROM cats_api.cats');
    return cats;
}

const getCatById = async (id) => {
  const [[cat]] = await connection.execute(
    'SELECT name, age FROM cats_api.cats WHERE id = ?',
    [id],
  );
  return cat;
}

const create = async (name, age) => connection.execute(
  'INSERT INTO cats_api.cats (name, age) VALUES (?,?)',
  [name, age],
);

const isValid = (name, age) =>
  typeof name === 'string' &&
  name.length >= 3 &&
  name.length < 30 &&
  age &&
  age > 0;

module.exports = {
  getAll,
  getCatById,
  create,
  isValid,
};


