const { expect } = require('chai');
const sinon = require('sinon');

const MovieService = require('../../services/MovieService');

const getAll = async (req, res) => {
  const books = await MovieService.getAll();
  res.status(200).json(books);
}

describe('Testando a função getAll do controller BooksController', () => {
  describe('Quando não existe nada no banco', () => {
    const request = {};
    const response = {};

    before(async () => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns(response);

      sinon.stub(MovieService, 'getAll').resolves([]);
    });

    after(() => {
      MovieService.getAll.restore();
    })

    it('deve chamar a função `status` passando 200 como parâmetro', async  () => {
      await getAll(request, response);

      expect(response.status.calledWith(200)).to.be.equal(true);
    });

    it('deve chamar a função `json` passando uma array como parâmetro', async  () => {
      await getAll(request, response);

      expect(response.json.calledWith([])).to.be.equal(true);
    });
  });

  describe('Quando existe algo no banco', () => {
    const request = {};
    const response = {};
    const expectedResults = [
      {
        id: 1,
        title: 'Dune',
        author: 'Frank Hebert'
      }
    ]

    before(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns(response);

      sinon.stub(MovieService, 'getAll').resolves(expectedResults);
    });

    after(() => {
      MovieService.getAll.restore();
    })

    it('deve chamar a função `status` passando 200 como parâmetro', async  () => {
      await getAll(request, response);

      expect(response.status.calledWith(200)).to.be.equal(true);
    });

    it('deve chamar a função `json` passando com o resultado de uma query como parâmetro', async  () => {
      await getAll(request, response);

      expect(response.json.calledWith(expectedResults)).to.be.equal(true);
    });
  });
});


// const sum = (num1, num2) => { return num1 +  num2 }

// describe('Testando a função soma', () => {
  
//   it('quando os parametros forem 2 e 2 o resultado deve ser 4', () => {
//     const resultado = sum(2,2)
//     expect(resultado).to.be.equal(4);
//   });

// })