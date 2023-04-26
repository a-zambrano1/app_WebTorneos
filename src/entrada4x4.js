import { MDBBtn } from 'mdb-react-ui-kit'
import React, { useState } from 'react'

const Entrada4x4 = () => {
  
  const [valor, setValor] = useState(0.0)
  
  
  return (
    <div>
      <div className='entrada'>
        <span>Patrón</span>       
        <MDBBtn onClick={() => setValor(valor-0.5)} class="btn btn-outline-secondary btn-rounded">-</MDBBtn>
        <span>{valor}</span>
        <MDBBtn onClick={() => setValor(valor+0.5)} class="btn btn-outline-secondary btn-rounded">+</MDBBtn>
      </div>
    </div>
  )
}

export default Entrada4x4
