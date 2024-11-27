const suscripModel = require('../models/suscrip.model');  // Importación del modelo de la BBDD


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

// CREAR
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

//ACTUALIZAR
const updateSuscrip = async (req, res) => {
    let suscrip; 
    if (req.query.email) {
        suscrip = await suscripModel.updateSuscrip({message: `Se ha modificado la suscripción de ${email}`}
        );
    }
    else {
        suscrip = await suscripModel.getAllSuscripts();
    }
    res.status(200).json(suscrip); 
}

module.exports = {
   getAllSuscripts,
   createSuscrip,
   updateSuscrip
}