const artModel = require('../models/art.model');  // Importación del modelo de la BBDD

//GET
const getAllArticulos = async (req, res) => {
    let arts;

    try {
        arts = await artModel.getAllArticulos();
        res.json({ articulos: arts });
    } catch (err) {

        res.status(500).json({ error: 'Error al obtener articulos: ' + err });
    }
};

// Get by title
const getArticuloByTitle = async (req, res) => {
   
    const titulo = req.params.titulo;  
    let arts;
    try {

        if (titulo) {
            arts = await artModel.getArticuloByTitle(titulo);
            res.json(arts);
        } else {
            res.status(400).json({ error: 'Introduce título' }); 
        }
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener articulos: ' + err });
    }
};

// Get by cat_id
const getArticulosBycat_id = async (req, res) => {
    const cat_id = req.params.cat_id;
    let arts;
    try {
        if (cat_id) {
            arts = await artModel.getArticulosBycat_id(cat_id);
            res.json({ articulos: arts });
        }
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener articulos: ' + err });
    };
};

// CREATE
const createArticulo = async (req, res) => {
    const newArticulo = req.body;

    try {

        const response = await artModel.createArticulo(newArticulo);
        res.status(201).json({ success: true, articulo: response });

    } catch (error) {
        console.error("Error al crear artículo:", error);
        res.status(400).json({ success: false, message: "Artículo ya existe" });
    }
};

//UPDATE
const updateArticulo = async (req, res) => {
    let articulo;
    if (req.query.titulo) {
        articulo = await artModel.updateArticulo({ message: `Se ha modificado el artículo ${titulo}` }
        );
    }
    else {
        articulo = await artModel.getAllArticulos();
    }
    res.status(200).json(articulo);
}

// DELETE
const deleteArticulo = async (req, res) => {
    try {
        const titulo = req.body.titulo

        if (!titulo) {
            // Si no se proporciona un titulo, devuelve un error
            return res.status(400).json({ message: 'Se requiere un titulo para eliminar el artículo' });
        }
        console.log(`Intentando borrar el artículo: ${titulo}`);

        // Ejecuta la consulta SQL para eliminar articulo por titulo
        const result = await artModel.deleteArticulo(titulo);

        if (result.affectedRows === 0) {
            // Si no se elimina ningún registro, responde con un mensaje apropiado
            return res.status(404).json({ message: `No se encontró artículo: ${titulo}` });
        }

        // Si la eliminación es exitosa
        res.status(200).json({ message: `Se ha borrado el artículo: ${titulo}` });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar articulo' });
    }
};


module.exports = {
    getAllArticulos,
    getArticulosBycat_id,
    getArticuloByTitle,
    createArticulo,
    updateArticulo,
    deleteArticulo
}