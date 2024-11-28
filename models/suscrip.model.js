const queries = require('../queries/suscrip.queries') // Queries SQL
const pool = require('../config/db_pgsql')

//GET ALL
const getAllSuscripts = async () => {
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.getAllSuscripts)
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

// CREATE
async function createSuscrip({ user_id, cat_id }) {
    try {

        if (!user_id || !cat_id) {
            console.error("Error: uno o más parámetros están undefined o null.");
            return null;
        }
        const values = [user_id, cat_id ];
        const result = await pool.query(queries.createSuscrip, values);
        return result.data

    } catch (err) {
        console.error("Error ejecutando createSuscrip:", err);
        throw err; // 
    }
}

// {
//     "user_id": "2",
//     "cat_id": "1"
// }



const suscripciones = {
    getAllSuscripts,
    createSuscrip
}

module.exports = suscripciones;