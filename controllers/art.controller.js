const artModel = require('../models/art.model');  // Importación del modelo de la BBDD

const getAllArticulos = async (req, res) => {
    let arts;

    try {

        if (req.query.titulo) {

            arts = await artModel.getArticuloByTitle(req.query.titulo);
        } else {

            arts = await artModel.getAllArticulos();
        }


        res.json({ articulos: arts });
    } catch (err) {

        res.status(500).json({ error: 'Error al obtener articulos: ' + err });
    }
};

module.exports = {
    getAllArticulos,
}