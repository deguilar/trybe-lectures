const { ObjectId } = require('bson');
const getConnection = require('./connection');

const getAll = async () => {
  const db = await getConnection(); 
  const songs = await db.collection('songs').find({}).toArray();
  return songs;
};

const getById = async (id) => {
  if (!ObjectId.isValid(id)) return null;

  const db = await getConnection(); 
  const song = await db.collection('songs').findOne({ _id: ObjectId(id) });
  return song;
};

const create = async (title, album) => {
  const db = await getConnection(); 
  const result = await db.collection('songs').insertOne({ title, album });
  return { id: result.insertedId, title, album };
};

const remove = async (id) => {
  const db = await getConnection(); 
  await db.collection('songs').deleteOne({ _id: ObjectId(id) });
};

const findByTitleAndAlbum = async (title, album) => {
	const db = await getConnection(); 
	const song = await db.collection('songs').findOne({ title, album });

	return song;
};

module.exports = {
  getAll,
  getById,
  create,
	remove,
	findByTitleAndAlbum,
};