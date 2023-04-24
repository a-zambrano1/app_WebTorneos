import { MDBInput } from 'mdb-react-ui-kit'
import React, { useState } from 'react'

const RegistroTorneo = () => {
  
  const [nombre_competencia, setNombre_Competencia] = useState('')
  const [tipo_competencia, setTipo_Competencia] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [numero_fechas, setNumero_Fechas] = useState('')
  const [jueces, setJueces] = useState([]) 

  const TorneoPost = async (e) =>{
    console.log("Entre al perreo")
    try {
      let result = await fetch(
        'http://localhost:5000/api/competencias', {
            method: "post",
            body: JSON.stringify({ nombre_competencia, descripcion, numero_fechas, jueces}),
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
          <MDBInput wrapperClass='mb-4' style={{height:25}} label='Nombre del torneo'></MDBInput>
          <select>
              <option>Liga</option>
              <option>Copa</option>
          </select>
      </div>
      <div className='opciones-torneo'>
          <MDBInput wrapperClass='mb-4'
            style={{height:25}} 
            size='lg'
            label='Número de MCs'
            onChange={(e) => setNombre_Competencia(e.target.value)}>
          </MDBInput>
          <MDBInput wrapperClass='mb-4' 
            style={{height:25}} 
            label='Número de Fechas'
            onChange={(e) => setNumero_Fechas(e.target.value)}>
          </MDBInput>
          <MDBInput wrapperClass='mb-4' 
          style={{height:25}} 
          label='Número de Jueces'>
          </MDBInput>
          <MDBInput wrapperClass='mb-4' 
          style={{height:45}} 
          label='Descripción del Torneo'
          onChange={(e) => setDescripcion(e.target.value)}></MDBInput>
      </div>
      <button className='boton-registrar' onClick={(e) => TorneoPost(e)}>Registrar</button>    
    </div>
  )
}

export default RegistroTorneo