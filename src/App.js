import './App.css';
import Auth from './logeo';
import React from "react";
import Inicio from './inicio';
import RegistroUser from './registro-user';
import RegistroTorneo from './registroTorneo';
import { Routes, BrowserRouter, Route } from "react-router-dom";
export default App; 



//Conexion a base de datos

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

