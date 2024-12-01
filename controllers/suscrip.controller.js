const suscripModel = require('../models/suscrip.model');  // Importación del modelo de la BBDD

//GET
const getAllSuscripts = async (req, res) => {
    let suscripts;

    try {

        if (req.query.title) {

            suscripts = await suscripModel.getSuscriptsByTitle(req.query.title);
        } else {

            suscripts = await suscripModel.getAllSuscripts();
        }


        res.json({ suscripciones: suscripts });
    } catch (err) {

        res.status(500).json({ error: 'Error al obtener suscripciones: ' + err });
    }
};

// CREATE
const createSuscrip = async (req, res) => {
    const newSuscrip = req.body;

    try {

        const response = await suscripModel.createSuscrip(newSuscrip);
        res.status(201).json({ success: true, suscrip: response });

    } catch (error) {
        console.error("Error al crear suscrip:", error);
        res.status(400).json({ success: false, message: "Suscrip ya existe" });
    }
};




module.exports = {
   getAllSuscripts,
   createSuscrip
}