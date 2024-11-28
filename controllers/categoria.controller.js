const categoriaModel = require('../models/categoria.model');  // Importación del modelo de la BBDD

//GET
const getAllCategorias = async (req, res) => {
    let categ;

    try {

        if (req.body.nombre) {

            categ = await categoriaModel.getCategoriaByName(req.body.nombre);
        } else {

            categ = await categoriaModel.getAllCategorias();
        }


        res.json({ categorias: categ });
    } catch (err) {

        res.status(500).json({ error: 'Error al obtener categorías: ' + err });
    }
};

module.exports = {
    getAllCategorias
}