const db = require('../data/dbConfig');

module.exports = {
  insert,
  remove
}

async function insert(singer) {
  const [id] = await db('singers').insert(singer, 'id');
  return db('singers').where({id}).first();
}

function remove(id) {
  return db('singers').where('id', Number(id)).delete()
}

