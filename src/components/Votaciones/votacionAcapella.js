import React from 'react'
import Entrada4x4 from '../../utils/entradas'
import { MDBBtn, MDBInput } from 'mdb-react-ui-kit'
import { useState } from 'react'

const VotacionAcapella = ({mc1,mc2, onSaveEntradas, numEnt = 0, onSaveNEntr, listValuesMC1, listValuesMC2}) => {
  
  const [entradas, setEntradas] = useState(numEnt)

  const renderEntrada = () => {
    onSaveNEntr(entradas)
  }

  const handleChangeEntradas = (idMC, index, value) => {
    onSaveEntradas(idMC, index, value)
  } 

  
  return (
    <div>
      <div className='panel-votacion'>
          <div>
            <MDBInput label='Ingrese número de entradas' type='number' value={entradas} onChange={(e) => setEntradas(e.target.value)}></MDBInput>
            <MDBBtn className='btn btn-success' onClick={renderEntrada}>Iniciar</MDBBtn>
          </div>
          <div className='titulo-mcs'>
            <span>{mc1}</span>
            <span>{mc2}</span>
          </div>
          <div className='entradas-votacion'>
            <div className='separacion-entradas'>
              <Entrada4x4 mc={0} onSaveEntradas={handleChangeEntradas} listValuesMC={listValuesMC1}/>
            </div>
            <div className='separacion-entradas'>
              <Entrada4x4 mc={1} onSaveEntradas={handleChangeEntradas} listValuesMC={listValuesMC2}/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default VotacionAcapella