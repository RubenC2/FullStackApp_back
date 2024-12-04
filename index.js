const express = require("express"); // Importamos el paquete express
const app = express(); // Inciializar servidor con express
const port = process.env.PORT || 3000; // Puerto a usar por el servidor
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const path = require('path');
 
app.use(cors())

// const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('./swagger.json');


app.use(express.json()); // Middleware para parsear el body de las peticiones
app.use(express.static(path.join(__dirname, 'client', 'dist'))); //Middleware para servir archivos estáticos de front. CSS, JS, assets.

// MiddlewareS                      MANAGE 404 ERROR
const manage404 = require("./middlewares/manage404");

// MiddlewareS                      MORGAN
const morgan = require("./middlewares/morgan");
app.use(morgan(':method :url :status - :response-time ms :body'));

// -- Middleware                    BODY-PARSER
app.use(express.json()); 

// -- JSDOC
// app.use('/api-jsdoc', express.static(path.join(__dirname, '/jsondocs')));
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Importa rutas
const userRoutes = require("./routes/user.routes")
const artRoutes = require("./routes/art.routes")
const suscripRoutes = require("./routes/suscrip.routes")
const categoriaRoutes = require("./routes/categoria.routes")


// Habilitacion de rutas
app.use('/api/user', userRoutes);
app.use('/api/articulos', artRoutes);
app.use('/api/suscrip', suscripRoutes);
app.use('/api/categorias', categoriaRoutes);




app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
  });

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
  });