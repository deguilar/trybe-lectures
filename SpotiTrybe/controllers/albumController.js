const { Album, Artist } = require('../models');

const createAlbum = async (req, res, next) => {
  const { title, releaseDate, artistId } = req.body;

  await Album.create({title, releaseDate, artistId});

  res.status(201).json({message: 'cadastrado com sucesso'});
}

const getAlbum = async (req, res, next) => {
  const { id } = req.params;

  const album = await Album.findByPk(id);

  const artist = await album.getArtist()
  
  // const artist = await Artist.findByPk(album.id)

  return res.status(200).json({...album.dataValues, artist})
}

module.exports = {
  createAlbum, getAlbum,
}


// const artist = await Artist.findByPk(id, {
//   include: { model: Album, as: 'listAlbums', attributes: { exclude: ['id'] } },
//   attributes: { exclude: ['id'] },
// });