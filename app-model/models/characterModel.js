/* MySQL */

// const connection = require('./connection');

// const getAll = async () => {
// 	const [characters] = await connection.execute('SELECT * FROM characters');
// 	return characters;
// }

// const getById = async (id) => {
// 	const [rows] = await connection.execute(`SELECT * FROM characters WHERE id=?`, [id]);
// 	const character = rows[0];
// 	return character;
// }

// const create = async (name, cartoon) => {
// 	const [result] = await connection
// 		.execute('INSERT INTO characters (name, cartoon)' +
// 					 	  'VALUES (?,?);', [name, cartoon]);
// 	const character = { id: result.insertId, name, cartoon }

// 	return character;
// }

const getConnection = require('./mongoConnection');
const { ObjectId } = require('mongodb');

const getAll = async () => {
	const db = await getConnection();
	const characters = await db.collection('characters').find({}).toArray()
	// const characters = await getConnection()
	// 	.then((db) => db.collection('characters').find({}).toArray());
	return characters;
}

const getById = async (id) => {
  if (!ObjectId.isValid(id)) return null;

  return getConnection()
		.then((db) => db.collection('characters')
			.findOne({ _id: ObjectId(id) }));
};

const create = async (name, cartoon) =>
  getConnection()
    .then((db) => db.collection('characters').insertOne({ name, cartoon }))
    .then((result) => ({ id: result.insertedId, name, cartoon }));


module.exports = {
	getAll,
	getById,
	create
}