const queries = require('../queries/art.queries') // Queries SQL
const pool = require('../config/db_pgsql')

//GET ALL
const getAllArticulos = async () => {
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.getAllArticulos)
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

const getArticuloByTitle = async (titulo) => {
    console.log();

    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.getArticuloByTitle, [titulo])
        result = data.rows

    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

const articulos = {
    getAllArticulos,
    getArticuloByTitle
}

module.exports = articulos;