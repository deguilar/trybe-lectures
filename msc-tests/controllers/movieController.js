const isBlank = (value) => (!value || value === '');

const MoviesServices = require('../services/movieService');

const create = async (req, res) => {
	const { title, directedBy, releaseYear } = req.body;

	if (isBlank(title)) return res.status(400).json({ message: 'Dados inválidos'});

	await MoviesServices.create({ title, releaseYear, directedBy });

	res.status(201).json({ message: 'Filme criado com sucesso!'});
};

module.exports = {
	create,
}
