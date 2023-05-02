import React from 'react'
import { MDBBtn, MDBInput } from 'mdb-react-ui-kit'
import { useState } from 'react'
import Entrada4x4 from '../../utils/entradas'

const Votacion4x4 = ({mc1, mc2}) => {
    
    const [numEntradas,setNumEntradas] = useState(0)
    const [entradas, setEntradas] = useState(0)

    const renderEntrada = () => {
        setEntradas(numEntradas);
    }
  
  
  return (
    <div>
        <div className='panel-votacion'>
          <div>
            <MDBInput label='Ingrese número de entradas' type='number' onChange={(e) => setNumEntradas(e.target.value)}></MDBInput>
            <MDBBtn class='btn btn-success' onClick={renderEntrada}>Iniciar</MDBBtn>
          </div>
          <div className='titulo-mcs'>
            <span>{mc1}</span>
            <span>{mc2}</span>
          </div>
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

export default Votacion4x4