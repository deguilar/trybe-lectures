const fs = require('fs').promises;


// Promise.all com then
// fs.readdir('./')
// 	.then((fileNames) => {
// 		console.log(fileNames);
// 		const fileBytesPromises = fileNames.map((fileName) => {
// 			return fs.readFile(fileName)
// 				.then((file) => { return file.byteLength });
// 		});

// 		Promise.all(fileBytesPromises)
// 			.then((fileBytes) => console.log(fileBytes))
// 	});


async function runAsync() {
	const fileNames = await fs.readdir('./');
	console.log(fileNames);

	const filePromises = fileNames.map(async (fileName) => {
		const file = await fs.readFile(fileName);
		return file.byteLength;
	});
	console.log(filePromises);
	
	const fileBytes = await Promise.all(filePromises);
	console.log(fileBytes);

	const fileSizeAll = fileBytes.reduce((total, fileByte) => total + fileByte , 0);
	console.log(fileSizeAll);
}

runAsync();