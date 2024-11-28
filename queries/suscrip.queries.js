
const queries = {
    getAllSuscripts: `SELECT * FROM suscripcion`,
    createSuscrip: `INSERT INTO suscripcion (user_id, cat_id) 
    VALUES ($1, $2)`
}

module.exports = queries;