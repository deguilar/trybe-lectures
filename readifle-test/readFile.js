const fs = require('fs').promises;

async function readFile(fileName) {
	// try {
	// 	const content = await fs.readFile(fileName);
	// 	return content.toString();
	// } catch (e) {
	// 	return null;
	// }

	const content = await fs.readFile(fileName, 'utf-8')
		.catch(() => { return null });
	return content;
}

module.exports = readFile;