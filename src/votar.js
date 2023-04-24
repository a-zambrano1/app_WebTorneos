import { MDBBtn } from 'mdb-react-ui-kit'
import React from 'react'

const Votar = () => {
  return (
    <div>
       <br/>
      <div className='frame-votacion'>
        <text className='titulos-inicio'>Votación </text>
        <MDBBtn onClick={()=>window.history.back() } rounded color='success' size='lg' style={{width:100}}> 
        <i class="fas fa-xmark" style={{size:50}}></i>
        </MDBBtn>
      </div>
      <br/>
      <div className= 'header-admin-torneos'>
        <text className='titulo-login'>4x4 <MDBBtn rounded color='success' size='lg' style={{width:50, height:50}}>
        </MDBBtn></text>
        <text className='titulo-login'>8x8 <MDBBtn rounded color='success' size='lg' style={{width:50, height:50}}>
        </MDBBtn></text>
        <text className='titulo-login'>minuto libre <MDBBtn rounded color='success' size='lg' style={{width:50, height:50}}>
        </MDBBtn></text>
        <text className='titulo-login'>acapella <MDBBtn rounded color='success' size='lg' style={{width:50, height:50}}>
        </MDBBtn></text>
        <text className='titulo-login'>kickBack <MDBBtn rounded color='success' size='lg' style={{width:50, height:50}}>
        </MDBBtn></text>
      </div>
    </div>
  )
}

export default Votar