import React, { useEffect, useState } from 'react'
import HeaderVotar from './HeaderVotar'
import CerrarVotar from './cerrarVotar'
import Entrada4x4 from './entrada4x4'
import { MDBBtn, MDBInput } from 'mdb-react-ui-kit'
import { render } from '@testing-library/react'

const Votacion4x4 = ({mc1 = 'pedro', mc2='pablo'}) => {
  
  const [numEntradas,setNumEntradas] = useState(0)
  const [entradas, setEntradas] = useState(0)

  const renderEntrada = () => {
    setEntradas(numEntradas);
  }

  
  
  return (
    <div>
        <CerrarVotar/>
        <HeaderVotar/>
        <div>
          <span>{mc1}</span>
          <span>{mc2}</span>
          <div>
            <MDBInput label='Ingrese número de entradas' type='number' onChange={(e) => setNumEntradas(e.target.value)}></MDBInput>
            <MDBBtn onClick={renderEntrada}>GO</MDBBtn>
          </div>
          <div>
            {Array.from({length: entradas}, (_,i) => <Entrada4x4 key={i} />)}
          </div>
        </div>
    </div>
  )
}

export default Votacion4x4
