import React, {useState } from 'react'
import CerrarVotar from './cerrarVotar'
import Entrada4x4 from './entradas'
import { MDBBtn, MDBInput } from 'mdb-react-ui-kit'
import { useLocation } from 'react-router-dom'
import MinutosLibres from './minutosLibres'

const Votacion = () => {
  
  const [numEntradas,setNumEntradas] = useState(0)
  const [entradas, setEntradas] = useState(0)
  const [formatoActual, setFormatoActual] = useState(0)

  const location = useLocation();


  const CambioFormato = (param) => {
    switch(param){
      case 0:
        return(<Votacion/>)
      case 2:
        return(<MinutosLibres/>)
    }
  }

  const renderEntrada = () => {
    setEntradas(numEntradas);
  }

  return (
    <div>
        <CerrarVotar/>
        <div className= 'header-admin-torneos'>
            <text className='titulo-login'>4x4 <MDBBtn rounded color='success' size='lg' style={{width:50, height:50}} onClick={() => setFormatoActual(0)}>
          </MDBBtn></text>
            <text className='titulo-login'>8x8 <MDBBtn rounded color='success' size='lg' style={{width:50, height:50}}>
          </MDBBtn></text>
            <text className='titulo-login'>Minuto Libre <MDBBtn rounded color='success' size='lg' style={{width:50, height:50}} onClick={() => setFormatoActual(2)}>
          </MDBBtn></text>
            <text className='titulo-login'>Acapella <MDBBtn rounded color='success' size='lg' style={{width:50, height:50}}>
          </MDBBtn></text>
            <text className='titulo-login'>KickBack <MDBBtn rounded color='success' size='lg' style={{width:50, height:50}}>
        </MDBBtn></text>
      </div>
        <div className='panel-votacion'>
          <div>
            <MDBInput label='Ingrese número de entradas' type='number' onChange={(e) => setNumEntradas(e.target.value)}></MDBInput>
            <MDBBtn class='btn btn-success' onClick={renderEntrada}>Iniciar</MDBBtn>
          </div>
          <div className='titulo-mcs'>
            <span>{location.state.mc1}</span>
            <span>{location.state.mc2}</span>
          </div>
          <CambioFormato param={formatoActual}/>
          <div className='entradas-votacion'>
            <div className='separacion-entradas'>
              {Array.from({length: entradas}, (_,i) => <Entrada4x4 key={i} />)}
            </div>
            <div className='separacion-entradas'>
              {Array.from({length: entradas}, (_,i) => <Entrada4x4 key={i} />)}
            </div>
          </div>
        </div>
    </div>
  )
}

export default Votacion
