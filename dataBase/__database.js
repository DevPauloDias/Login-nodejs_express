const pg = require('pg');

const client = new pg.Client({
    user: 'postgres',
    host: 'localhost',
    database: "FirstDb",
    password: 'Devpaulo',
    port: '5432'

})
module.exports = client;