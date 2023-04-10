import './App.css';
import Auth from './logeo';
import React from "react";
import Inicio from './inicio';
import RegistroTorneo from './registroTorneo';
import { Routes, BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Inicio/>} />
          <Route path='/login' element={<Auth/>} />
          <Route path='/registro_torneo' element={<RegistroTorneo/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
