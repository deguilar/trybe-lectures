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

app.get('/planets', async(req, res) => {
	const { page, orderBy, orderDirection } = req.query;
	const offset = (page - 1) * 10;
	// observação: Não é recomendado interpolar nada dentro de uma query pois abre brecha para vulnerabilidades de segurança.
	const [rows] = await connection.execute(`SELECT * FROM star_wars.planet ORDER BY ${orderBy} ${orderDirection} LIMIT 10 OFFSET ?`, [`${offset}`]);
	res.status(200).json({ planets: rows })
});

app.listen(3001, () => console.log('SWAPI rodando localmente...'));
