const HTTP_OK_STATUS = 200;
const HTTP_CREATED_STATUS = 201;
const HTTP_NO_BODY_STATUS = 422;
const HTTP_401 = 401;
const HTTP_NOT_FOUND_STATUS = 404;

const songService = require('../services/songService');

const getAll = async (_req, res) => {
  const songs = await songService.getAll();

  res.status(HTTP_OK_STATUS).json(songs);
};

const getById = async (req, res) => {
  const song = await songService.getById(req.params.id);

  if (!song) return res.status(HTTP_NOT_FOUND_STATUS).json({ message: 'Song not found!' });

  res.status(HTTP_OK_STATUS).json(song);
};

const create = async (req, res) => {
  const { title, album } = req.body;

  const { errorMessage, song } = await songService.create(title, album);

  if (errorMessage) return res.status(HTTP_401).json({ message: errorMessage });

  res.status(HTTP_CREATED_STATUS).json(song);
};

const remove = async (req, res) => {
  const song = await songService.getById(req.params.id);

  if (!song) return res.status(HTTP_NOT_FOUND_STATUS).json({ message: 'Song not found!' });

  await songService.remove(req.params.id);

  res.status(HTTP_NO_BODY_STATUS).end();
};

module.exports = {
  getAll,
  getById,
  create,
  remove,
};