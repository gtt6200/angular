const  Mongoose  = require("mongoose");



const dbConnection = async() => {
    try {
        await Mongoose.connect(process.env.BD_CNN, {
            useNewUrlParser:true,
            useUnifiedTopology: true
        });
        console.log('DB Online');
    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de inicializar la db');
    }
}

module.exports = {
    dbConnection
}


// BD en Mysql
// 11 votos
// Alvaro Carballo · Clase 347
// · hace 1 año

// Os pongo como quedaría el fichero si usáramos una base de datos en MySQL.


// config.js

//      const dotenv = require('dotenv');
//     dotenv.config();
//     const mysql2 = require('mysql2');
     
//     const dbConnection = async() => {
//         try{
//             await mysql2.createConnection({
//                 host: process.env.DB_HOST,
//                 user:  process.env.DB_USER,
//                 password:  process.env.DB_PASS,
//                 database: process.env.DB_DATABASE
//             });
//             console.log('Base de datos iniciada');
//         } catch(error) {
//             console.log(error);
//             throw new Error('Error a la hora de inicializar la base da datos');
     
//         }
//     }
//     module.exports ={
//         dbConnection
//     }

// .env

//     # DB Configurations
//     DB_HOST=localhost
//     DB_USER=root
//     DB_PASS=
//     DB_DATABASE=proyectoweb1

// Por supuesto durante la instalación deberían haber puesto el siguiente comando.

// npm i bcryptjs cors dotenv express express-validator jsonwebtoken mysql2 