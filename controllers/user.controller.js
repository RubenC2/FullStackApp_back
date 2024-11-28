const userModel = require('../models/user.model');  // Importación del modelo de la BBDD

//GET
const getUsers = async (req, res) => {
    let users;

    try {

        if (req.query.email) {

            users = await userModel.getUserByEmail(req.query.email);
        } else {

            users = await userModel.getAllUsers();
        }


        res.json({ usuarios: users });
    } catch (err) {

        res.status(500).json({ error: 'Error al obtener los usuarios: ' + err });
    }
};

//CREATE
const createUser = async (req, res) => {
    const newUser = req.body;

    try {

        const response = await userModel.createUser(newUser);


        res.status(201).json({ success: true, user: response });
    } catch (error) {
        console.error("Error al crear el usuario:", error);
        res.status(400).json({ success: false, message: "Usuario ya existe" });
    }
};

//UPDATE
const updateUser = async (req, res) => {
    const updateUserData = req.body
    let user;
    try {
        user = await userModel.updateUser(updateUserData) 
    if (user === 0) {
        return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(user); 
} catch (error) {
    console.error('Error al actualiar user:', error);
    res.status(500).json({ message: 'Error al eliminar user' });
}}  


// DELETE
const deleteUser = async (req, res) => {
    try {
        const email = req.body.email

        if (!email) {
            // Si no se proporciona un email, devuelve un error
            return res.status(400).json({ message: 'Se requiere un email para eliminar user' });
        }
        console.log(`Intentando borrar el usuario con email: ${email}`);

        // Ejecuta la consulta SQL para eliminar user por ID
        const result = await userModel.deleteUser(email);

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
    getUsers,
    createUser,
    updateUser,
    deleteUser
}