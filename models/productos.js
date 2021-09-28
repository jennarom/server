import mongoose from "mongoose";
const Schema=mongoose.Schema;

const productoSchema=new Schema({
    nombre:{type:String, required:[true, 'Este campo es obligatorio']},
    marca:{type:String, required:[true, 'Este campo es obligatorio']},
    date:{type: Date, defaul:Date},    
});



//convertir a modelo

const Producto=mongoose.model('Producto',productoSchema);
export default Producto;
