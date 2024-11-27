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

// BORRAR
const deleteSuscrip = async (req, res) => {
    try {
        const email = req.body.email

        if (!email) {
            // Si no se proporciona un email, devuelve un error
            return res.status(400).json({ message: 'Se requiere un email para eliminar suscrip' });
        }
        console.log(`Intentando borrar el usuario con email: ${email}`);

        // Ejecuta la consulta SQL para eliminar user por ID
        const result = await suscripModel.deleteSuscrip(email);

        if (result.affectedRows === 0) {
            // Si no se elimina ningún registro, responde con un mensaje apropiado
            return res.status(404).json({ message: `No se encontró user con el email: ${email}` });
        }

        // Si la eliminación es exitosa
        res.status(200).json({ message: `Se ha borrado user con email: ${email}` });
    } catch (error) {
        console.error('Error al eliminar user:', error);
        res.status(500).json({ message: 'Error al eliminar user' });
    }
};

module.exports = {
   getAllSuscripts,
   createSuscrip,
   updateSuscrip
}