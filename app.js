//importo modelo servidorç

const ServidorModelo = require('./models/ServidorModelo.js');

//----Se trae el paquete .ENV
 
require('dotenv').config()

//Instancio el servidor

let servidor = new ServidorModelo();

//levanto el servidor

servidor.despertarServidor();


//https://travelnowapimoviles.herokuapp.com/
