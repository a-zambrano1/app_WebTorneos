import React from 'react'
import { MDBBtn, MDBInput } from 'mdb-react-ui-kit'
import { useState } from 'react'
import Entrada4x4 from '../../utils/entradas'

const VotacionKickBack = ({mc1,mc2,  onSaveEntradas, numEnt = 0,onSaveNEntr, listValuesMC1, listValuesMC2}) => {
  
  
  const [entradas, setEntradas] = useState(numEnt)

  const renderEntrada = () => {
    onSaveNEntr(entradas)
  }

const handleChangeEntradas = (idMC, index, value) => {
  onSaveEntradas(idMC, index, value)
}
  
  
  return (
    <div>
      <div className='titulo-mcs'>
        <span>{mc1}</span>
        <span>{mc2}</span>
      </div>
      <div>
        <MDBInput label='Ingrese número de preguntas' type='number' onChange={(e) => setEntradas(e.target.value)}></MDBInput>
        <MDBBtn className='btn btn-success' onClick={renderEntrada}>Iniciar</MDBBtn>
      </div>
      <div>
        <div className='separacion-kickback subtitulo-kickback seccion-ida'>
          <div className='separacion-entradas'>
            <span>Pregunta</span>
             <Entrada4x4 mc={0} onSaveEntradas={handleChangeEntradas} listValuesMC={listValuesMC1}/>
          </div>
          <div className='separacion-entradas'>
            <span>Respuesta</span>
            <Entrada4x4 mc={1} onSaveEntradas={handleChangeEntradas} listValuesMC={listValuesMC2}/>
          </div>
        </div>
        <div className='patrones-kickback'>
            
          </div>
      </div>
      {/* <div>
        <span className='titulo-kickback'>VUELTA</span>
        <div className='separacion-kickback subtitulo-kickback seccion-vuelta'>
        <div className='separacion-entradas'>
            <span>Respuesta</span>
            <Entrada4x4 mc={0} onSaveEntradas={handleChangeEntradas} listValuesMC={listValuesMC1}/>
          </div>
          <div className='separacion-entradas'>
            <span>Pregunta</span>
            <Entrada4x4 mc={1} onSaveEntradas={handleChangeEntradas} listValuesMC={listValuesMC2}/>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default VotacionKickBack