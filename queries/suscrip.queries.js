
const queries = {
    getAllSuscripts: `SELECT * FROM suscripcion`,
    createSuscrip: `INSERT INTO suscripcion (user_id, cat_id) 
    VALUES ($1, $2)`,
    updateSuscrip: `UPDATE suscripcion
    SET cat_id = $2
    FROM users
    WHERE suscripcion.user_id = users.id
    AND users.email = $1;`
}

module.exports = queries;