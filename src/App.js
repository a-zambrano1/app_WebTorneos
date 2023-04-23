import './App.css';
import Auth from './logeo';
import React from "react";
import Inicio from './inicio';
import RegistroUser from './registro-user';
import RegistroTorneo from './registroTorneo';
import TablaTorneos from './tablaTorneos'
import AdminTorneo from './adminTorneo';
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Welcome  from './welcome';
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
          <Route path='/welcome' element={<Welcome/>} />
          <Route path='/tabla' element={<TablaTorneos/>} />
          <Route path='/adminTorneo' element={<AdminTorneo/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

