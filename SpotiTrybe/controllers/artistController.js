const { Artist, Album } = require('../models');

const getById = async (req, res, _next) => {
  const { id } = req.params;

  const artist = await Artist.findByPk(id, {
    include: { model: Album, as: 'listAlbums', attributes: { exclude: ['id'] } },
    attributes: { exclude: ['id'] },
  });

  return res.status(200).json(artist);
};

module.exports = {
  getById
};
