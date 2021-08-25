const fs = require('fs');
const util = require('util');

function readFilePromise(fileName) {
	return new Promise(function (resolve, reject) {
		fs.readFile(fileName, (err, content) => {
			if (err) return reject(new Error('Erro ao ler arquivo'));

			resolve(content.toString());
		});
	});
}

const readFilePromise = util.promisify(fs.readFile);

// readFilePromise('scrip.md')
// 	.then((content) => console.log(content.toString()))
// 	.catch((err) => console.log(`⚠️ err: ${err}`));

// fs.readFile('scrip.md')
// 	.then((content) => console.log(content.toString()))
// 	.catch((err) => console.log(`⚠️ err: ${err}`));

console.log('executou primeiro!');

