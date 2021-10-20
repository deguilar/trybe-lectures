const getAll = async () => {
  const [cats] = await connection.execute('SELECT id, name, age FROM cats_api.cats');
  return cats;
}

const create = async (name, age) => {
  await connection.execute(
    'INSERT INTO cats_api.cats (name, age) VALUES (?,?)',
    [name, age],
  );

  return true;
}

const getById = async (id) => {
  const [[cat]] = await connection.execute(
    'SELECT name, age FROM cats_api.cats WHERE id = ?',
    [id]
  );

  return cat;
}

module.exports = {
  getAll,
  create,
  getById,
}