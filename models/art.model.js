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

// CREATE
async function createArticulo({ cat_id, titulo, autoria, contenido, imagen_url }) {
    try {

        if (!cat_id || !titulo || !autoria || !contenido || !imagen_url) {
            console.error("Error: uno o más parámetros están undefined o null.");
            return null;
        }
        // const hashedPassword = await bcrypt.hash(password, 10);
        const values = [cat_id, titulo, autoria, contenido, imagen_url];
        const result = await pool.query(queries.createArticulo, values);
        return result.data

    } catch (err) {
        console.error("Error ejecutando createArticulo:", err);
        throw err; // 
    }
}
// POST http://localhost:3000/api/admin
// {
//     "cat_id": "1",
//     "titulo": "Aquí el titulo",
//     "autoria": "Dida Castro",
//     "contenido": "Aquí el texto largo",
//     "imagen_url": "Aquí la url de imagen"
// }

//UPDATE
const updateArticulo = async (titulo) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.updateArticulo, [titulo])
        result = data.rows
        
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

// DELETE
const deleteArticulo = async (titulo) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.deleteArticulo, [titulo])
        result = data.rows
        
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

// DELETE http://localhost:3000/api/articulos 
// {
//     "titulo": "Aquí el titulo"
// }

const articulos = {
    getAllArticulos,
    getArticuloByTitle,
    createArticulo,
    updateArticulo,
    deleteArticulo 
}

module.exports = articulos;