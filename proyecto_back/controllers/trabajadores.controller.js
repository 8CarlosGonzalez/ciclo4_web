const trabajadoresModel = require("../models/trabajadores.model");
const Trabajador = require("../models/trabajadores.model"); //importamos el modelo
let response ={
    msg: "",
    exito: false
}

//creo un nuevo trabajador con esa funcion
exports.create = function (req,res){ 
    let trabajador = new Trabajador ({
        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        email: req.body.email,
        telefono: req.body.telefono,
        experiencia: req.body.experiencia,
        servicio: req.body.servicio,
        ubicacion: req.body.ubicacion
    })

    trabajador.save(function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al guardar el trabajador" + err
            res.json(msg)
            return;
        }

        response.exito = true,
        response.msg ="El trabajador se guardó correctamente"
        res.json(response)
    })
}


exports.find = function(req, res){
    Trabajador.find(function(err,trabajadores){
        res.json(trabajadores)
    })
}

exports.findOne = function(req,res){
    Trabajador.findOne({_id: req.params.id}, function(err,trabajador){
        res.json(trabajador)
    })
}


exports.update = function(req,res){
    let trabajador ={
        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        email: req.body.email,
        telefono: req.body.telefono,
        experiencia: req.body.experiencia,
        servicio: req.body.servicio,
        ubicacion: req.body.ubicacion
    }

    Trabajador.findByIdAndUpdate(req.params.id, {$set: trabajador} , function(err){
        if (err){
            console.error(err),
            response.exito=false,
            response.msg= "Error al modificar el trabajador"
            res.json(response)
            return;
        }
        response.exito=true,
        response.msg = "El trabajador fue modificado correctamente"
        res.json(response)
    })
}


exports.remove = function(req,res){
    trabajadoresModel.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err){
            console.error(err),
            response.exito=false,
            response.msg = "Error al eliminar el trabajador"
            res.json(response)
            return;
        }

        response.exito=true,
        response.msg = "El trabajador fue eliminado correctamente"
        res.json(response)
    })
}


    