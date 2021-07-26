const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');

const app = express();

const connection = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'star_wars'
});

app.use(cors());

app.get('/people', async(req, res) => {
	const [rows] = await connection.execute('SELECT * FROM star_wars.people');
	// const [rows] = await connection.execute(`
	// 	SELECT people.*, planet.name AS planet_name FROM star_wars.people AS people 
	// 	INNER JOIN star_wars.planet AS planet
	// 	ON people.planet_id=planet.id
	// `);
	res.status(200).json({ people: rows })
});

app.get('/planets', async(req, res) => {
	let { page, orderBy, orderDirection } = req.query;
	orderBy = orderBy || 'name';
	orderDirection = orderDirection || 'asc';
	const offset = (page - 1) * 10;
	// observação: Não é recomendado interpolar nada dentro de uma query pois abre brecha para vulnerabilidades de segurança.
	const [rows] = await connection.execute(`SELECT * FROM star_wars.planet ORDER BY ${orderBy} ${orderDirection} LIMIT 10 OFFSET ?`, [`${offset}`]);
	const [results] = await connection.execute('SELECT count(*) as total FROM star_wars.planet');
	const { total } = results[0]
	res.status(200).json({ planets: rows, total  })
});

app.get('/planet/:id', async(req, res) => {
	const { id } = req.params;
	console.log(id);
	const [rows] = await connection.execute('SELECT * FROM star_wars.planet WHERE id=?', [id]);
	console.log(rows);
	res.status(200).json({ planet: rows[0] })
});

app.listen(3001, () => console.log('SWAPI rodando localmente...'));
