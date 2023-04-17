const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./DB/config');
require('dotenv').config();


//crear servidor/aplicacion de express

const app = express();

//connecion db
dbConnection();

//directorio publicp
app.use( express.static('public'))

//CORS
app.use( cors() );

//lectura y parseo del body
app.use( express.json());

//rutas
app.use( '/api/auth', require('./routes/auth') );


app.listen(process.env.PORT, ()=>{console.log(`Servidor corriendo en puerto ${process.env.PORT}`);});
