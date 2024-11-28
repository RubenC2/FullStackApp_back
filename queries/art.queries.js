const queries = {
    getAllArticulos: `SELECT * FROM articulos`,
    getArticuloByTitle: `
    SELECT id
    FROM articulos
    WHERE titulo = $1`,
    createArticulo: `INSERT INTO articulos (cat_id, titulo, autoria, contenido, imagen_url) 
    VALUES ($1, $2, $3, $4, $5)`,
    // updateArticulo: `UPDATE articulos
    // SET cat_id = $1 , titulo = $2, autoria = $3, contenido = $4, imagen_url = $4
    // WHERE titulo = $2`,
    deleteArticulo: `DELETE FROM articulos
    WHERE titulo = $1`, 
}
module.exports = queries;