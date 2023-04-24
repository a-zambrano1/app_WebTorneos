import React from 'react'
import HeaderVotar from './HeaderVotar'
import CerrarVotar from './cerrarVotar'
import Entrada4x4 from './entrada4x4'
import { MDBInput } from 'mdb-react-ui-kit'

const Votacion4x4 = () => {
  return (
    <div>
        <CerrarVotar/>
        <HeaderVotar/>
        <div>
          <span>@MC1 </span>
          <span>@MC2</span>
          <div>
            <MDBInput label='Ingrese número de entradas'></MDBInput>
          </div>
          <div className='separacion-entradas'>

          </div>
        </div>
    </div>
  )
}

export default Votacion4x4
