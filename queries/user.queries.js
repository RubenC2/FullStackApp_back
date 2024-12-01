const queries = {
    getAllUsers: `SELECT * FROM users`,
    getUSerByEmail: `
    SELECT id
    FROM users
    WHERE email = $1`,
    createUser: `INSERT INTO users (nombre, apellidos, email, password) 
    VALUES ($1, $2, $3, $4)`,
    // updateUser: `UPDATE users
    // SET nombre = $1 , apellidos = $2, password = $3
    // WHERE email = $4`,
    deleteUser: `DELETE FROM users
    WHERE email = $1`, 
}
module.exports = queries;