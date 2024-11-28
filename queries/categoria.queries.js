

const queries = {
    getAllCategorias: `SELECT * FROM categorias`,
    getCategoriaByName: `
    SELECT *
    FROM categorias
    WHERE nombre = $1`,
}

module.exports = queries;