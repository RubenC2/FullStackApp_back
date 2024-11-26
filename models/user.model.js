const queries = require('../queries/user.queries') // Queries SQL
const pool = require('../config/db_pgsql')

//GET ALL
const getAllUsers = async () => {
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.getAllUsers)
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

// GET BY MAIL
const getUserByEmail = async (email) => {
    console.log();

    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.getUSerByEmail, [email])
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
async function createUser({ nombre, apellidos, email, password }) {
    try {

        if (!nombre || !apellidos || !email || !password) {
            console.error("Error: uno o más parámetros están undefined o null.");
            return null;
        }
        // const hashedPassword = await bcrypt.hash(password, 10);
        const values = [nombre, apellidos, email, password,];
        const result = await pool.query(queries.createUser, values);
        return result.data

    } catch (err) {
        console.error("Error ejecutando createUser:", err);
        throw err; // 
    }
}
// POST http://localhost:3000/user 
// {
//     "nombre": "Dida",
//     "apellidos": "Castro",
//     "email": "Didaexample@gmail.com",
//     "password": "123456"
// }

//UPDATE
const updateUser = async (email) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.updateUser, [email])
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
const deleteUser = async (email) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.deleteUser, [email])
        result = data.rows
        
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

// DELETE http://localhost:3000/user 
// {
//     "email": "userexample@gmail.com"
// }


const users = {
    getAllUsers,
    getUserByEmail,
    createUser,
    updateUser,
    deleteUser
}

module.exports = users;