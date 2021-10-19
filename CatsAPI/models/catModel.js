const connection = require('./connection')

const getAll = async () =>{
    const [cats] = await connection.execute('SELECT id, name, age FROM cats_api.cats');
    return cats;
}

const getById = async (id) => {
  const [[cat]] = await connection.execute(
    'SELECT id, name, age FROM cats_api.cats WHERE id = ?',
    [id],
  );
  return cat;
}

const create = async (name, age) => connection.execute(
  'INSERT INTO cats_api.cats (name, age) VALUES (?,?)',
  [name, age],
);



module.exports = {
  getAll,
  getById,
  create,
};


