const mysql2 = require('mysql2/promise');

const connection = mysql2.createPool({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'live_lecture_27_1'
});

module.exports = connection;