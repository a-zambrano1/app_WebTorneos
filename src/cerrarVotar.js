import React from 'react'
import { MDBBtn } from 'mdb-react-ui-kit'

const CerrarVotar = () => {
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
    </div>
  )
}

export default CerrarVotar
