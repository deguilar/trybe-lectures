const fs = require('fs');

const callback =  function (err, content) {
	if (err) {
	} else {
		console.log(content.toString());
	}
};

fs.readFile('codigos/promise_all_referencia', callback);
fs.readFile('script.md', callback);

console.log('executou primeiro!')