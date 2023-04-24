import React from 'react'
import {MDBInput, MDBBtn} from 'mdb-react-ui-kit'
import { useNavigate } from 'react-router-dom'
import CerrarVotar from './cerrarVotar'
const IngresoMC = () => {
  const navigate = useNavigate()
  return (
    <div>
        <CerrarVotar/>
        <span>Ingrese AKA de los Competidores</span>
        <div>
        <MDBInput
          label="Ingresar MC No.1"
          id="mc1"
          style={{height:40}}
        />
        <MDBInput
          label="Ingresar MC No.2"
          id="mc2"
          style={{height:40}}
        />
        </div>
        <MDBBtn className='titulo-login' 
        rounded color='success' 
        size='lg'
        onClick={() => navigate('/votar')}
        >Iniciar Votación</MDBBtn>
      </div>
  )
}

export default IngresoMC
