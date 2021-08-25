const fs = require('fs').promises;


// Promise.all com then
fs.readdir('./')
	.then((fileNames) => {
		console.log(fileNames);
		const fileBytesPromises = fileNames.map((fileName) => {
			return fs.readFile(fileName)
				.then((file) => { return file.byteLength });
		});

		Promise.all(fileBytesPromises)
			.then((fileBytes) => console.log(fileBytes))
	});


