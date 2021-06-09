const { request,response }=require('express');
const BookingModelo = require('../models/BookingModelo')


async function buscarReservas(peticion = request, respuesta = response)
{
    let datosReserva = await BookingModelo.find();
    
    respuesta.json({
        estado: true,
        mensaje: datosReserva
    });
}

async function buscarxReserva(peticion = request, respuesta = response)
{
    let id = peticion.params.id;
    let datosReserva = await BookingModelo.findById(id);
    
    respuesta.json({
        estado: true,
        mensaje: datosReserva
    });
}

async function reservar(peticion = request, respuesta = response)
{
    let datosPeticion = peticion.body;
    
    let booking = new  BookingModelo(datosPeticion);
    await booking.save();

    respuesta.json({
        estado: true,
        mensaje: 'Reserva agregada con éxito!!',
        datos: booking
    });
}
  



async function editarReserva(peticion = request, respuesta = response)
{
    let id = peticion.params.id;
    let datosPeticion = peticion.body;

    await BookingModelo.findByIdAndUpdate(id, datosPeticion);

    respuesta.json({
        estado: true,
        mensaje: 'Reserva Actualizada con éxito!!',
        datos: datosPeticion
    });
}

async function eliminarReserva(peticion = request, respuesta = response)
{
    let id = peticion.params.id;
    await BookingModelo.findByIdAndDelete(id);
    
    respuesta.json({
        estado: true,
        mensaje: 'Reserva eliminado con exito!!'
    });
}

module.exports={
    eliminarReserva,
    editarReserva,
    reservar,
    buscarReservas,
    buscarxReserva
}
