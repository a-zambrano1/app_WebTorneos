import './App.css';
import Auth from './logeo';
import React from "react";
import Inicio from './inicio';
import RegistroUser from './registro-user';
import RegistroTorneo from './registroTorneo';
import TablaTorneos from './tablaTorneos'
import AdminTorneo from './adminTorneo';
import TablaCompetidores from './tablaCompetidores';
import AdminInicio from './adminInicio'
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Welcome  from './welcome';
import AdminUltimasBatallas from './adminUltimasBatallas';
import AdminInformacion from './adminInformacion';
import InicioVotar from './votar';
import Votacion from './votacion';
import MinutosLibres from './minutosLibres';
export default App; 


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
          <Route path='/tablaParticipantes' element={<TablaCompetidores/>} />
          <Route path='/adminInicio' element={<AdminInicio/>}/>
          <Route path='/adminUltimasBatallas' element={<AdminUltimasBatallas/>}/>
          <Route path='/adminInformacion' element={<AdminInformacion/>}/>
          <Route path='/InicioVotar' element={<InicioVotar/>}/>
          <Route path='/votar' element={<Votacion/>}/>
          <Route path='/votarMinutos' element={<MinutosLibres/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

