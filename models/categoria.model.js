const queries = require('../queries/categoria.queries') // Queries SQL
const pool = require('../config/db_pgsql')

//GET ALL
const getAllCategorias = async () => {
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.getAllCategorias)
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

//GET BY NAME
const getCategoriaByName = async (nombre) => {
    console.log();

    let client, result;
    try {
        client = await pool.connect(); 
        const data = await client.query(queries.getCategoriaByName, [nombre])
        result = data.rows

    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

const categorias = {
    getAllCategorias,
    getCategoriaByName
}

module.exports = categorias;