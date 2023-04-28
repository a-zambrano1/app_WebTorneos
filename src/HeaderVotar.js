import { MDBBtn, MDBInput } from 'mdb-react-ui-kit'
import React from 'react'
import IngresoMC from './ingresoMC'
import { useNavigate } from 'react-router-dom'

const HeaderVotar = () => {
  
  const navigate = useNavigate()
  
  return (
    <div>
      <div className= 'header-admin-torneos'>
        <text className='titulo-login'>4x4 <MDBBtn rounded color='success' size='lg' style={{width:50, height:50}} onClick={() => navigate('/votar')}>
        </MDBBtn></text>
        <text className='titulo-login'>8x8 <MDBBtn rounded color='success' size='lg' style={{width:50, height:50}}>
        </MDBBtn></text>
        <text className='titulo-login'>Minuto Libre <MDBBtn rounded color='success' size='lg' style={{width:50, height:50}} onClick={() => navigate('/votarMinutos')}>
        </MDBBtn></text>
        <text className='titulo-login'>Acapella <MDBBtn rounded color='success' size='lg' style={{width:50, height:50}}>
        </MDBBtn></text>
        <text className='titulo-login'>KickBack <MDBBtn rounded color='success' size='lg' style={{width:50, height:50}}>
        </MDBBtn></text>
      </div>
    </div>
  )
}

export default HeaderVotar