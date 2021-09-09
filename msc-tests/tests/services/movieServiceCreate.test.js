const { expect } = require('chai');
const sinon = require('sinon');

const MoviesServices = require('../../services/movieService')
const MoviesModel = require('../../models/movieModel');


describe('Insere um filme novo no DB', () => {
	before(() => {
		const ID_EXAMPLE = '604cb554311d68f491ba5781';

		sinon.stub(MoviesModel, 'create').resolves({ id: ID_EXAMPLE });
	});

	after(() => {
		MoviesModel.create.restore();
	})

 describe('quando um payload informado não é válido', () => {
	const payloadMovie = {};

	it('retorna um boolean', async () => {
		const response = await MoviesServices.create(payloadMovie);

		expect(response).to.be.a('boolean');
	});

	it('o boolean contém `false`', async () => {
		const response = await MoviesServices.create(payloadMovie);

		expect(response).to.be.equal(false);
	});
 });

 describe('quando é inserido com sucesso', () => {
	const payloadMovie = {
		title: 'Pulp Fiction',
		directedBy: 'Quentin Tarantino',
		releaseYear: 1994,
	};

	 it('retorna um objeto', async () => {
		const response = await MoviesServices.create(payloadMovie);

		expect(response).to.be.a('object');
	 });

	 it('o objeto retornado possui um id válido', async () => {
		const response = await MoviesServices.create(payloadMovie);

		expect(response).to.have.a.property('id');
	 });
 })
});