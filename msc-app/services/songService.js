const songModel = require('../models/songModel');

const getAll = async () => {
  const songs = await songModel.getAll();

  return songs;
};

const getById = async (id) => {
  const song = await songModel.getById(id);

  return song;
};

const create = async (title, album) => {
  if (!title) return { errorMessage: 'Title is required!' };

  if (!album) return { errorMessage: 'Album is required!' };

  const song = await songModel.findByTitleAndAlbum(title, album);

  if (song) return { errorMessage: 'Song already exists' };

  const createdSong = await songModel.create(title, album);

  return { song: createdSong };
};

const remove = async (id) => {
  await songModel.remove(id);
};

module.exports = {
  create,
  getById,
  getAll,
	remove,
};