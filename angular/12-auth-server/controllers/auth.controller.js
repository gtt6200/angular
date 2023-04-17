const { response } = require('express');
const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt')

const crearUsuario = async (req, res = response) =>{

    const {email, name, password} = req.body;
    try {
        //Verificar el email
        const usuario = await Usuario.findOne({email});
        if (usuario){
            return res.status(400).json({
                ok: false,
                mdg: 'El usuairo ya existe con ese correo'
            });
        }
        //Usuario Modelo
        const dbUser = new Usuario(req.body);
        //Hashear passwrod
        const salt = bcrypt.genSaltSync();
        dbUser.password = bcrypt.hashSync(password, salt);
        //generar jwt
        const token = await generarJWT(dbUser.id, dbUser.name);
        //Crear usuario DB
        await dbUser.save();
        //respuesta exitosa
        return res.status(201).json({
            ok: true,
            uid: dbUser.id,
            name,
            token
        });
        
    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el admin '
        });
    }

    
}
const loginUsuario = async (req, res= response) =>{


    const {email, password} = req.body;

    try {
        const dbUser = await Usuario.findOne({email});
        if(!dbUser){
            return res.status(400).json({
                ok: false,
                mdg: 'Correo o contraseña Incorrectos'
           });
        }

        //confirmar si pass hace mathc
        const validPass = bcrypt.compareSync(password, dbUser.password);
        if(!validPass){
            return res.status(400).json({
                ok: false,
                mdg: 'Correo o contraseña Incorrectos 2'
           });
        }
        
        //generar jwt
        const token = await generarJWT(dbUser.id, dbUser.name);

        //respuesta del servicio
        return res.json({
            ok: true,
            uid: dbUser.id,
            name: dbUser.name,
            token
        });

    } catch (error) {
        console.log(error);
       return res.status(500).json({
            ok: false,
            mdg: 'Por favor hable con el admin'
       });
    }
}
const revalidarToken = async(req, res) =>{

    const { uid, name} = req;
    const token = await generarJWT(uid, name);

    return res.json({
        ok: true,
        uid,
        name,
        token
    });
}

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
}