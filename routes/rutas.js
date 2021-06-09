const {Router} = require('express');

//Import

const{buscarClientes}= require('../controllers/clienteController.js');
const{buscarxCliente}= require('../controllers/clienteController.js');
const{eliminarCliente}= require('../controllers/clienteController.js');
const{editarCliente}= require('../controllers/clienteController.js');
const{agregarCliente}= require('../controllers/clienteController.js');
const{buscarxEmail}= require('../controllers/clienteController.js');

const {buscarReservas} = require('../controllers/bookingController');
const {buscarxReserva} = require('../controllers/bookingController');
const {reservar} = require('../controllers/bookingController');
const {editarReserva} = require('../controllers/bookingController.js');
const {eliminarReserva} = require('../controllers/bookingController.js');


const {buscarApartamentos} = require('../controllers/apartamentoController');
const {buscarxApartamento} = require('../controllers/apartamentoController');
const {crearApartamento} = require('../controllers/apartamentoController');
const {editarApartamento} = require('../controllers/apartamentoController');
const {eliminarApartamento} = require('../controllers/apartamentoController');


//importo las validaciones
const {validarPeticion}=require('../validations/validaciones.js');

//importo el metodo check del express validator
const {check}=require('express-validator');

//crear la lista de validaciones en arreglo

let validacionesCliente = Array(
    check('nombreCliente', 'Campo Obligatorio').not().isEmpty(),
    check('emailCliente', 'Campo Obligatorio').not().isEmpty(),
    check('paisCliente', 'Campo Obligatorio').not().isEmpty(),
    check('ciudadCliente', 'Campo Obligatorio').not().isEmpty(),
    check('rol', 'Campo Obligatorio').not().isEmpty(),
    check('contrasenaCliente', 'Campo Obligatorio').not().isEmpty(),
    validarPeticion
);

//validaciones reserva

let validacionesReserva = Array(
    check('fechaInicio', 'Campo Obligatorio').not().isEmpty(),
    check('fechaFinal', 'Campo Obligatorio').not().isEmpty(),
    check('usuario', 'Campo Obligatorio').not().isEmpty(),
    check('apartamento', 'Campo Obligatorio').not().isEmpty(),
    
    validarPeticion
);

//validaciones apartamento

let validacionesApartamento = Array(
    check('direccion', 'Campo Obligatorio').not().isEmpty(),
    check('ciudad', 'Campo Obligatorio').not().isEmpty(),
    check('pais', 'Campo Obligatorio').not().isEmpty(),
    check('urlImagen', 'Campo Obligatorio').not().isEmpty(),
    check('cliente', 'Campo Obligatorio').not().isEmpty(),
    validarPeticion
);


//personalizo rutas

const rutas = Router();

// CLIENTES

rutas.get('/clientes', buscarClientes);
rutas.get('/buscarxCliente/:id', buscarxCliente);
rutas.get('/buscarxEmail/:emailCliente', buscarxEmail);
rutas.post('/cliente', validacionesCliente, agregarCliente);
rutas.put('/actualizarCliente/:id', editarCliente);
rutas.delete('/eliminarCliente/:id', eliminarCliente);


//RESERVAS


rutas.get('/buscarReservas', buscarReservas);
rutas.get('/buscarxReserva/:id', buscarxReserva);
rutas.post('/reservar', validacionesReserva,  reservar);
rutas.put('/editarReserva/:id', editarReserva);
rutas.delete('/eliminarReserva/:id', eliminarReserva);


//APARTAMENTOS

rutas.get('/buscarApartamento', buscarApartamentos);
rutas.get('/buscarxApartamento/:id', buscarxApartamento);
rutas.post('/crearApartamento', validacionesApartamento,   crearApartamento);
rutas.put('/editarApartamento/:id', editarApartamento);
rutas.delete('/eliminarApartamento/:id', eliminarApartamento);

module.exports=rutas;