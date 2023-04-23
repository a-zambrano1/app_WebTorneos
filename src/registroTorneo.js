import { MDBInput } from 'mdb-react-ui-kit'
import React from 'react'

const RegistroTorneo = () => {
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
          <MDBInput wrapperClass='mb-4' style={{height:25}} size='lg' label='Número de MCs'></MDBInput>
          <MDBInput wrapperClass='mb-4' style={{height:25}} label='Número de Fechas'></MDBInput>
          <MDBInput wrapperClass='mb-4' style={{height:25}} label='Número de Jueces'></MDBInput>
          <MDBInput wrapperClass='mb-4' style={{height:25}} label='Descripción del Torneo'></MDBInput>
      </div>
      <button className='boton-registrar'> Registrar</button>    
    </div>
  )
}

export default RegistroTorneo