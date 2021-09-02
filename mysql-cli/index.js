const mysql2 = require('mysql2/promise');

const connection = mysql2.createPool({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'live_lecture_27_1'
});

// connection.execute('SELECT * FROM characters')
// 	.then((rows) => console.log(rows[0]));

// connection.execute('SELECT * FROM characters')
// 	.then(([rows]) => console.log(rows));


async function selectFrom() {
	const [rows] = await connection.execute('SELECT * FROM characters');
	console.log(rows);
}

async function selectFromComWhere(id) { //binding
	const [rows] = await connection.execute(`SELECT * FROM characters WHERE id=?`, [id]);
	console.log(rows[0]);
}

async function insertCharacter(name, cartoon) { //binding
	const [result] = await connection.execute('INSERT INTO characters (name, cartoon) VALUES (?,?);', [name, cartoon]);
	const character = { id: result.insertId, name, cartoon }
	console.log(character);
}

// async function selectFromComWhere() {
// 	const [[character]] = await connection.execute('SELECT * FROM characters WHERE id=1');
// 	console.log(character);
// }

// selectFromComWhere('1 OR 1=1;');

// selectFromComWhere(1);

// const [primeiro, second, third] = ['Renato', 'Coruja', 'Italo'];
// console.log(primeiro, second, third)

insertCharacter('Irmão do Jorel', 'Irmão do Jorel');