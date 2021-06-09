const {model, Schema}= require ('mongoose');

const bookingSchema = Schema({

    fechaInicio:{
        type:String,
    },
    fechaFinal:{
        type:String,
    },
    usuario:{
        type:String,
    },
    apartamento:{
        type:String,
    },
});
console.log("Entra al modelo de booking");
module.exports = model('Booking', bookingSchema);
