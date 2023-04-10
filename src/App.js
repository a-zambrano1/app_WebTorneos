import './App.css';
import Auth from './logeo';
import React from "react";
import Inicio from './inicio';
import RegistroUser from './registro-user';
import RegistroTorneo from './registroTorneo';
import { Routes, BrowserRouter, Route } from "react-router-dom";
export default App; 



//Conexion a base de datos

const usuario = 'admin'
const password = 'boticol'
const dbName = 'rap-rumble'
const mongoose = require('mongoose');
//const express = require('express')

const port = process.env.PORT || 3000;

const uri = `mongodb+srv://${usuario}:${password}@orion.88flgmz.mongodb.net/${dbName}?retryWrites=true&w=majority`;

async function main() {
  await mongoose.connect(uri, 
    { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(()=> console.log('conectado a la base de datos mongodb')) 
    .catch(e => console.log('error de conexión', e))
}



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Inicio/>} />
          <Route path='/login' element={<Auth/>} />
          <Route path='/registro_torneo' element={<RegistroTorneo/>} />
          <Route path='/registro_usuario' element={<RegistroUser/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

