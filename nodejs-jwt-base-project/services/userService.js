const userModel = require('../models/userModel');
const jwt = require('jsonwebtoken');

const SECRET = 'meusupersegredo';

const findByCredentials = async (username, password) => {
  if (!username || !password) return (
    { status: 401, message: 'É necessário usuário e senha para fazer login' }
  );

  const userSearch = await userModel.findByUsername(username);

  if (!userSearch || userSearch.password !== password) return (
    { status: 401, message: 'Usuário não existe ou senha inválida' }
  );

  const { password: _, ...userPayload } = userSearch;

  const token = jwt.sign(userPayload, SECRET, {
    algorithm: 'HS256',
    expiresIn: '15d15m'
  });

  return ({ status: 200, message: 'Login efetuado com sucesso', token })
};

const create = async (username, password) => {
  if (!username || !password) return (
    { status: 500, message: 'Erro ao salvar o usuário no banco' }
  );

  await userModel.create(username, password);

  return ({ status: 201, message: 'Novo usuário cadastrado com sucesso!' });
};

module.exports = { 
  findByCredentials, 
  create 
};