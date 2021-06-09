//importar de express las variables request y response

const { request, response } = require('express');

//importar el modelo

const ClienteModelo = require('../models/ClienteModelo.js')


async function buscarClientes(peticion = request, respuesta = response)
{
    let datosCliente = await ClienteModelo.find();
    
    respuesta.json({
        estado: true,
        mensaje: datosCliente
    });
}

async function buscarxCliente(peticion = request, respuesta = response)
{
    let id = peticion.params.id;
    let datosCliente = await ClienteModelo.findById(id);
    
    respuesta.json({
        estado: true,
        mensaje: datosCliente
    });
}

async function buscarxEmail(peticion = request, respuesta = response)
{
    let emailClient = peticion.params.emailCliente;
    let datosCliente = await ClienteModelo.findOne({emailCliente:emailClient});
    
    respuesta.json({
        estado: true,
        mensaje: datosCliente
    });
}

async function agregarCliente(peticion = request, respuesta = response)
{
    let datosPeticion = peticion.body;
    
    let cliente = new  ClienteModelo(datosPeticion);
    await cliente.save();

    respuesta.json({
        estado: true,
        mensaje: 'Cliente agregado con éxito!!',
        datos: cliente
    });
}

async function editarCliente(peticion = request, respuesta = response)
{
    let id = peticion.params.id;
    let datosPeticion = peticion.body;

    await ClienteModelo.findByIdAndUpdate(id, datosPeticion);

    respuesta.json({
        estado: true,
        mensaje: 'Cliente Actualizado con éxito!!',
        datos: datosPeticion
    });
}

async function eliminarCliente(peticion = request, respuesta = response)
{
    let id = peticion.params.id;
    await ClienteModelo.findByIdAndDelete(id);
    
    respuesta.json({
        estado: true,
        mensaje: 'Cliente eliminado con exito!!'
    });
}



module.exports={eliminarCliente, editarCliente, agregarCliente, buscarClientes, buscarxCliente, buscarxEmail }