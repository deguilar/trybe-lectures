const { expect } = require('chai'); //matcher
const sinon = require('sinon');
const readFile = require('../readFile');
const fs = require('fs').promises;

describe('Chama a função readFile', function () {


	describe('quando o arquivo é lido com sucesso', function () {
		const CONTENT_TEXT = 'Xablau!';

		before(function () {
			sinon.stub(fs, 'readFile').resolves(CONTENT_TEXT);
		});
	
		after(function() {
			fs.readFile.restore();
		});

		describe('a resposta', function () {
			it('é uma string', async function() {
				const resultado = await readFile('./xablau.txt');
				expect(resultado).to.be.a('string');
			});

			it('é igual ao conteúdo do arquivo', async function() {
				const resultado = await readFile('./xablau.txt');
				expect(resultado).to.be.equals(CONTENT_TEXT);
			});
		});
	});

	describe('quando ocorrer um erro na leitura do arquivo', function () {
		before(function () {
			sinon.stub(fs, 'readFile').rejects(null);
		});
	
		after(function() {
			fs.readFile.restore();
		});

		describe('a resposta', function () {
			it('é igual a "null"', async function() {
				const resultado = await readFile('./xablau.md');
				expect(resultado).to.be.null;
			});
		});
	});
})