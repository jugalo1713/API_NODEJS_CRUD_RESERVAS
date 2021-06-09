const { request,response }=require('express');
const ApartamentoModelo = require('../models/ApartamentoModelo')

async function buscarApartamentos(peticion = request, respuesta = response)
{
    let datosApartamento = await ApartamentoModelo.find();
    
    respuesta.json({
        estado: true,
        mensaje: datosApartamento
    });
}

async function buscarxApartamento(peticion = request, respuesta = response)
{
    let id = peticion.params.id;
    let datosApartamento = await ApartamentoModelo.findById(id);
    
    respuesta.json({
        estado: true,
        mensaje: datosApartamento
    });
}

async function crearApartamento(peticion = request, respuesta = response)
{
    let datosPeticion = peticion.body;
    
    let apartamento = new  ApartamentoModelo(datosPeticion);
    await apartamento.save();

    respuesta.json({
        estado: true,
        mensaje: 'Apartamento agregado con éxito!!',
        datos: apartamento
    });
}

async function editarApartamento(peticion = request, respuesta = response)
{
    let id = peticion.params.id;
    let datosPeticion = peticion.body;

    await ApartamentoModelo.findByIdAndUpdate(id, datosPeticion);

    respuesta.json({
        estado: true,
        mensaje: 'Apartamento Actualizado con éxito!!',
        datos: datosPeticion
    });
}

async function eliminarApartamento(peticion = request, respuesta = response)
{
    let id = peticion.params.id;
    await ApartamentoModelo.findByIdAndDelete(id);
    
    respuesta.json({
        estado: true,
        mensaje: 'Apartamento eliminado con exito!!'
    });
}

module.exports={
    buscarApartamentos,
    buscarxApartamento,
    crearApartamento,
    editarApartamento,
    eliminarApartamento
}