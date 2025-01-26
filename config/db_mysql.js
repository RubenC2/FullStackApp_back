const mysql = require('mysql2');
require('dotenv').config(); 


const connection = mysql.createConnection({
  host: process.env.DB_HOST, 
  user: process.env.DB_USER, 
  password: process.env.DB_PASSWORD, 
  database: process.env.DB_NAME, 
  port: process.env.DB_PORT || 3306, 
  connectionLimit: 10,
  waitForConnections: true,
  queueLimit: 0
});

// Verificar la conexión
connection.connect((err) => {
    if (err) {
      console.error('Error al conectar con la base de datos: ', err);
    } else {
      console.log('Conectado a la base de datos MySQL');
    }
  });
  
  module.exports = connection; 
