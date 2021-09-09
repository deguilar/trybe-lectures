const sinon = require('sinon');
const { expect } = require('chai');
const { MongoClient, ObjectId } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server-core');

const mongoConnection = require('../../models/connection');
const MoviesModel = require('../../models/movieModel');
const { afterEach } = require('mocha');


describe('Insere um novo filme no BD', () => {
	const payloadMovie = {
    id: '604cb554311d68f491ba5781',
		title: 'Example Movie',
		directedBy: 'Jane Dow',
		releaseYear: 1999
	};

	let DBServer = new MongoMemoryServer();;
	let connectionMock;

  before(async () => {
    const URLMock = await DBServer.getUri();

    connectionMock = await MongoClient.connect(URLMock, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
    .then((conn) => conn.db('model_example'));
		
		sinon.stub(mongoConnection, 'getConnection').resolves(connectionMock);
  });

	after(async () => {
		await mongoConnection.getConnection.restore();
	});


	describe('quando é inserido com sucesso' , async () => {
		it('retorna um objeto' , async () => {
			const response = await MoviesModel.create(payloadMovie);
			expect(response).to.be.a('object');
		});

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.have.a.property('id');
    });

		it('deve existir um filme com o título cadastrado!', async () => {
      await MoviesModel.create(payloadMovie);
      const movieCreated = await connectionMock.collection('movies').findOne({ title: payloadMovie.title });
      expect(movieCreated).to.be.not.null;
		});
	});
});