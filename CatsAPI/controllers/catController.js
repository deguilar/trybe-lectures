const catModel = require('../models/catModel');

const getAll = async (req, res) => {
  try {
    const cats = await catModel.getAll();
    res.render('getAll', { message: "Hello World", cats });
  } catch (err) {
    console.error(err);
    res.status(500).render('generalError');
  }
}

const create = async (req, res) => {
  const { name, age } = req.body;
  
  console.log(name, age);
  
  if (typeof name !== 'string' || name.length < 3 || name.length >= 30) {
    return res.status(400).render('error', { error: 'O nome digitado não é válido!'})
  }
  
  try {
    await catModel.create(name, age)
    
    res.render('created', { message: 'Gato cadastrado com sucesso! '});
  } catch (error) {
    console.error(error);
    res.status(500).render('errorCat');
  }
}

const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const cat = await catModel.getById(id);
    
    if (!cat) {
      return res.status(404).render('notFound');
    }
    
    const { name, age } = cat;
    
    return res.status(200).render('getCatById', { id, name, age });
    
  } catch (error) {
    console.error(error);
    res.status(500).render('generalError');
  }
}

module.exports = {
  getAll,
  create,
  getById,
}