import '../../styles/App.css';
import Auth from '../Views/logeo';
import React from "react";
import Inicio from '../Views/inicio';
import RegistroUser from '../Views/registro-user';
import RegistroTorneo from '../Views/registroTorneo';
import TablaTorneos from '../Tables/tablaTorneos'
import AdminTorneo from '../Admin-components/adminTorneo';
import TablaCompetidores from '../Tables/tablaCompetidores';
import AdminInicio from '../Admin-components/adminInicio'
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Welcome  from '../Views/welcome';
import AdminUltimasBatallas from '../Admin-components/adminUltimasBatallas';
import AdminInformacion from '../Admin-components/adminInformacion';
import InicioVotar from '../Views/votar';
import Votacion from '../Views/votacion';
import MinutosLibres from '../Votaciones/minutosLibres';
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

