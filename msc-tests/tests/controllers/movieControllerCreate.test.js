const { expect } = require('chai');
const sinon = require('sinon');

const MoviesController = require('../../controllers/movieController');

const MoviesServices = require('../../services/movieService');

describe('Ao chamar o controller de create', () => {
	describe('Quando o payload informado não é válido', () => {
		const response = {};
		const request = {};

		before(() => {
			request.body = {};

			response.status = sinon.stub().returns(response);
			response.json = sinon.stub().returns();
		});

		it('é chamado com o código 400', async () => {
			await MoviesController.create(request, response);

      expect(response.status.calledWith(400)).to.be.equal(true);
		});

		it('é chamado json com a mensage "Dados inválidos"', async () => {
			await MoviesController.create(request, response);

			expect(response.json.calledWith({ message: 'Dados inválidos' })).to.be.equal(true);
		});
	});

	describe('Quando o payload informado é válido', () => {
		const response = {};
		const request = {};
		const ID_EXAMPLE = '604cb554311d68f491ba5781';

		before(() => {
			request.body = {
				title: 'Pulp Fiction',
				directedBy: 'Quentin Tarantino',
				releaseYear: 1994,
			};

			response.status = sinon.stub().returns(response);
			response.json = sinon.stub().returns();

			sinon.stub(MoviesServices, 'create').resolves({ id: ID_EXAMPLE });
		});

		after(() => {
			MoviesServices.create.restore();
		});

		it('é chamado com o código 201', async () => {
			await MoviesController.create(request, response);

      expect(response.status.calledWith(201)).to.be.equal(true);
		});

		it('é chamado o send com a mensagem "Filme criado com sucesso!"', async () => {
			await MoviesController.create(request, response);

			expect(response.json.calledWith({ message: 'Filme criado com sucesso!' })).to.be.equal(true);
		});

		it ('é chamado o service para cadastrar o filme', async () => {
			await MoviesController.create(request, response);

			expect(MoviesServices.create.calledWith(request.body)).to.be.equal(true);;
		});
	});
});