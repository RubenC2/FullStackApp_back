const categoriaModel = require('../models/categoria.model');  // Importación del modelo de la BBDD

//GET
const getAllCategorias = async (req, res) => {
    let categ;

    try {

        if (req.params.nombre) {

            categ = await categoriaModel.getCategoriaByName(req.params.nombre);
        } else {

            categ = await categoriaModel.getAllCategorias();
        }


        res.json({ categorias: categ });
    } catch (err) {

        res.status(500).json({ error: 'Error al obtener categorías: ' + err });
    }
};

const getCategoriaByName = async (req, res) => {
    let categ;

    try {
        categ = await categoriaModel.getCategoriaByName(req.params.nombre);
        res.json({ categorias: categ });
    } catch (err) {

        res.status(500).json({ error: 'Error al obtener categorías: ' + err });
    }
};

module.exports = {
    getAllCategorias,
    getCategoriaByName
}