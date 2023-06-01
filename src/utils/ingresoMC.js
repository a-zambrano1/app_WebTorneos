
import {MDBInput, MDBBtn} from 'mdb-react-ui-kit'
import { useNavigate } from 'react-router-dom'
import CerrarVotar from './cerrarVotar'
import { useState } from 'react'


const IngresoMC = () => {
  
  const [mc1, setMC1] = useState('')
  const [mc2, setMC2] = useState('')
  
  const navigate = useNavigate()
  return (
    <div className='recuadro2 debug'>
        <CerrarVotar/>
        <span>Ingrese A.K.A de los Competidores</span>
        <br/>
        <div>
        <MDBInput
          label="Ingresar MC No.1"
          id="mc1"
          style={{height:40}}
          onChange={(e) => setMC1(e.target.value)}
        />
        <MDBInput
          label="Ingresar MC No.2"
          id="mc2"
          style={{height:40}}
          onChange={(e) => setMC2(e.target.value)}
        />
        </div>
        <br/>
        <MDBBtn className='titulo-login' 
        rounded color='success' 
        size='lg'
        onClick={() => navigate('/votar',  {state:{mc1: mc1, mc2: mc2}})}
        >Iniciar Votación</MDBBtn>
        <br/>
      </div>
  )
}

export default IngresoMC
