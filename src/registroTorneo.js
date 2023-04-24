import { MDBBtn, MDBIcon, MDBInput } from 'mdb-react-ui-kit';
import React from 'react';
import { useState } from 'react';

const RegistroTorneo = () => {
  
  const [nombre_competencia, setNombreCompetencia] = useState("");
  const [tipo_competencia, setTipo_Competencia] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [numero_fechas, setNumeroFechas] = useState("");


    const TorneoPost = async (e) =>{
      console.log("Entre al perreo")
      try {
        let result = await fetch(
          'http://localhost:5000/api/competencias', {
              method: "post",
              body: JSON.stringify({descripcion}),
              headers: {
                  'Content-Type': 'application/json'
              }
          })
          console.log(result)
          result = await result.json();
          console.warn(result);
      } catch (error) {
        console.log(error);
      }
    }

    const  TorneoGet = async (e) =>{
      console.log("Entre al perreo")
      try {
        let result = await fetch(
          'http://localhost:5000/api/competencias', {
              method: "get",
              headers: {
                  'Content-Type': 'application/json'
              }
          })
          result = await result.json();
          console.warn(result);
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
          <MDBInput wrapperClass='mb-4' style={{height:25}} label='Nombre del torneo'
          id="nombre_competencia"
          onChange={(e) => setNombreCompetencia(e.target.value)}
          ></MDBInput>
          <select>
              <option>Liga</option>
              <option>Copa</option>
          </select>
      </div>
      <div className='opciones-torneo'>
          <MDBInput wrapperClass='mb-4'
            style={{height:25}} 
            size='lg'
            id="numero_mcs"
            label='Número de MCs'
            >
          </MDBInput>
          <MDBInput wrapperClass='mb-4' 
            style={{height:25}} 
            label='Número de Fechas'
            id="numero_fechas"
            onChange={(e) => setNumeroFechas(e.target.value)}>
          </MDBInput>
          <MDBInput wrapperClass='mb-4' 
            tyle={{height:25}} 
            label='Número de Jueces'
            id="numero_jueces"
            >
            
          </MDBInput>
          <MDBInput wrapperClass='mb-4' 
            style={{height:45}} 
            id="descripcion"
            label='Descripción del Torneo'
            onChange={(e) => setDescripcion(e.target.value)}></MDBInput>
      </div>  
      <MDBBtn onClick={(e) => TorneoPost(e)} rounded color='success' size='lg'>Registrar</MDBBtn>
    </div>
  )
}

export default RegistroTorneo