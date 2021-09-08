const { ObjectId } = require('mongodb');
const connect = require('./connection');

const getAll = async () => {
    const db = await connect();
    const people = await db.collection('people').find().toArray();

    return people;
}

const getById = async (id) => {
    if (!ObjectId.isValid(id))
        return null;
        
    const db = await connect();
    return await db.collection('people').findOne(ObjectId(id))
}

const create = async (name, age) => {
    const db = await connect();
    const person = await db.collection('people').insertOne({ name, age });
    return { id: person.insertedId, name, age };
}

const update = async (id, name, age) => {
    if (!ObjectId.isValid(id))
        return null;

    const db = await connect();
    await db.collection('people')
        .updateOne({ _id: ObjectId(id) }, { $set: { name, age } })

    return { id, name, age };
}

const exclude = async (id) => {
    if (!ObjectId.isValid(id))
        return null;

    const db = await connect();
    await db.collection('people').deleteOne({ _id: ObjectId(id) });
}

module.exports = { create, getAll, getById, update, exclude };