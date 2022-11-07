const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TrabajadoresSchema = new Schema ({
    nombre: {type:String, required: true, max:60},
    apellidos: {type:String, required: true, max:60},
    email: {type:String, required: true, max:70},
    telefono: {type:String, required: true, max:15},
    experiencia: {type:String, required: true, max:15},
    servicio: {type:String, required: true, max:30},
    ubicacion: {type:String, required: true, max:30}
})

module.exports=mongoose.model("trabajadores", TrabajadoresSchema);