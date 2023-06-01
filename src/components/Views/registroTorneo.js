import { MDBBtn, MDBIcon, MDBInput } from 'mdb-react-ui-kit';
import React from 'react';
import { useState } from 'react';
import { getAuth } from "firebase/auth";

const RegistroTorneo = () => {
  
  const [nombre_competencia, setNombreTorneo] = useState("");
  const [tipo, setTipo_Torneo] = useState("liga");
  const [descripcion, setDescripcion] = useState("");
  const [numero_fechas, setNumeroFechas] = useState("");
  const auth = getAuth();
  const email_admin = auth.currentUser.email;

    const TorneoPost = async (e) =>{  
      console.log("Eviando informacion a la BD...")
      try {
        let result = await fetch(
          'http://localhost:5000/api/torneos', {
              method: "post",
              body: JSON.stringify({nombre_competencia,tipo,numero_fechas, descripcion, email_admin}),
              headers: {
                  'Content-Type': 'application/json'
              }
          })         
          result = await result.json();
      } catch (error) {
        console.log(error);
      }
    }

    

  
  return (
    <div className='pag-torneo'>
      <br/>
      <div>
        <a className='regresar' onClick={()=>window.history.back() }>« Regresar</a>
      </div>
      <br/>
      <div className='opciones-login'>
        <span className='raprumble'>Rap 
          <span className='raprumble1'>Rumble</span>
        </span>
      </div>
      <div className='opciones-login'>
        <span>Registro de Torneo</span>
      </div>
      <br/>
      <div className='nombre-torneo'>
        <MDBInput wrapperClass='mb-4' 
          style={{height:25, width:135}} 
          label='Nombre del torneo'
          type='text'
          id="nombre_torneo"
          onChange={(e) => setNombreTorneo(e.target.value)}
          ></MDBInput>
        <select class="form-select" 
          style={{height:45, width:90}} 
          aria-label="Default select example"
          type='text'
          label='Tipo de torneo'
          id="tipo"
          onChange ={(e) => setTipo_Torneo(e.target.value)}
          >
          <option value='Liga'>Liga</option>
          <option value='Copa'>Copa</option>
        </select>
      </div>
      <div className='numero-mcs'>
          <MDBInput wrapperClass='mb-4'
            style={{height:40}} 
            size='lg'
            type='number'
            id="numero_mcs"
            label='Número de MCs'
            >
          </MDBInput>
          <MDBInput wrapperClass='mb-4' 
            style={{height:40}} 
            label='Número de Fechas'
            type='number'
            id="numero_fechas"
            onChange={(e) => setNumeroFechas(e.target.value)}>
          </MDBInput>
          <MDBInput wrapperClass='mb-4' 
            tyle={{height:40}} 
            type='number'
            label='Número de Jueces'
            id="numero_jueces"
            >
          </MDBInput>
          <MDBInput wrapperClass='mb-4' 
            style={{height:45}} 
            id="descripcion"
            type='text'
            label='Descripción del Torneo'
            onChange={(e) => setDescripcion(e.target.value)}></MDBInput>
      </div>  
      <MDBBtn onClick={(e) => TorneoPost(e)} rounded color='success' size='lg'>Registrar</MDBBtn>
    </div>
  )
}

export default RegistroTorneo