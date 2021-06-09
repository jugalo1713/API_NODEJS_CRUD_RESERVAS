const {model, Schema}= require ('mongoose');

const apartamentoSchema = Schema({
    direccion:{
        type:String,
    },
    ciudad:{
        type:String,
    },
    pais:{
        type:String
    },
    urlImagen:{
        type:String
    },
    cliente:{
        type:String
    }


});

module.exports=model('Apartamento', apartamentoSchema);