const mysql = require('mysql2/promise');

const connection = mysql
  .createPool({
    host: 'localhost',
    user: 'root',
    database: 'cats_api',
    password: 'root',
  });

module.exports = connection;