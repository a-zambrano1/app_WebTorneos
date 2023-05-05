import React from 'react'
import { MDBBtn, MDBInput } from 'mdb-react-ui-kit'
import { useState } from 'react'
import Entrada4x4 from '../../utils/entradas'

const VotacionKickBack = ({mc1,mc2}) => {
  
  const [numEntradas,setNumEntradas] = useState(0)
  const [entradas, setEntradas] = useState(0)

  const renderEntrada = () => {
    setEntradas(numEntradas);
  }
  
  
  return (
    <div>
      <div className='titulo-mcs'>
        <span>{mc1}</span>
        <span>{mc2}</span>
      </div>
      <div>
        <MDBInput label='Ingrese número de preguntas' type='number' onChange={(e) => setNumEntradas(e.target.value)}></MDBInput>
        <MDBBtn class='btn btn-success' onClick={renderEntrada}>Iniciar</MDBBtn>
      </div>
      <div>
        <span className='titulo-kickback'>IDA</span>
        <div className='separacion-kickback subtitulo-kickback seccion-ida'>
          <div className='separacion-entradas'>
            <span>Pregunta</span>
            {Array.from({length: entradas}, (_,i) => <Entrada4x4 key={i} />)}
          </div>
          <div className='separacion-entradas'>
            <span>Respuesta</span>
            {Array.from({length: entradas}, (_,i) => <Entrada4x4 key={i} />)}
          </div>
        </div>
        <div className='patrones-kickback'>
            
          </div>
      </div>
      <div>
        <span className='titulo-kickback'>VUELTA</span>
        <div className='separacion-kickback subtitulo-kickback seccion-vuelta'>
        <div className='separacion-entradas'>
            <span>Respuesta</span>
            {Array.from({length: entradas}, (_,i) => <Entrada4x4 key={i} />)}
          </div>
          <div className='separacion-entradas'>
            <span>Pregunta</span>
            {Array.from({length: entradas}, (_,i) => <Entrada4x4 key={i} />)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default VotacionKickBack