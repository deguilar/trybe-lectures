const { Album } = require('../models');

const createAlbum = async (req, res, next) => {
  const { title, releaseDate, artistId } = req.body;

  await Album.create({title, releaseDate, artistId});

  res.status(201).json({message: 'cadastrado com sucesso'});
}

module.exports = {
  createAlbum,
}
