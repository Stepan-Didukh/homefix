let mysql2 = require('mysql2');

const pool = mysql2.createPool({
    host:'localhost',
    user:'root',
    password:'root',
    database:'houses'
});

module.exports = pool;