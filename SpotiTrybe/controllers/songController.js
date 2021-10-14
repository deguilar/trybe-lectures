const { Song } = require('../models');

const createMusic = async (req, res, next) => {
const { title, durationTime} = req.body;

await Song.create({title,durationTime});

res.status(201).json({message:'cadastrado com sucesso'});
};

module.exports = {
  createMusic,
}