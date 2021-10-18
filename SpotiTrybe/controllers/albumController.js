const { Album, Artist, SongAlbum, Song } = require('../models');

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

const addSongs = async (req, res, next) => {
  const { id } = req.params;
  const { songIds } = req.body;

  const album = await Album.findByPk(id);
  if (!album) return res.status(400).json({message: 'album not exists'})

  const songs = await Song.findAll({where: { id: songIds }});
  
  await album.addSongs(songs)

  return res.status(200).send('hello');
};

/* 

FAZENDO DA FORMA RAIZ:

const addSongs = async (req, res, next) => {
  const { id } = req.params;
  const { songIds } = req.body;

  const album = await Album.findByPk(id);
  if (!album) return res.status(400).json({message: 'album not exists'})

  const promises = songIds.map(async (songId) => {
    const songAlbum = await SongAlbum.create({ albumId: id, songId })
  })
  
  const resolvedPromises = await Promise.all(promises);    

  return res.status(200).send('hello');
};

*/



module.exports = {
  createAlbum, getAlbum, addSongs,
}

