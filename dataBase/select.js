const db = require('./__database');

async function listarDados(){
    await db.connect();
    var result;

    result = await db.query('select * from users')

    console.log(result.rows)
    await db.end();
}
listarDados();

