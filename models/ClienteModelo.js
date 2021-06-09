const {model, Schema}= require ('mongoose');

const clienteSchema = Schema({
    nombreCliente:{
        type:String,
    },
    emailCliente:{
        type:String,
    },
    paisCliente:{
        type:String
    },
    ciudadCliente:{
        type:String 
    },
    contrasenaCliente:{
        type:String
    },
    rol:{
        type:String
    },

});

module.exports=model('Cliente', clienteSchema);