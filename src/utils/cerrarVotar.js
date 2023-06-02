import React from 'react'
import { MDBBtn } from 'mdb-react-ui-kit'
import { useNavigate } from 'react-router-dom/dist'

const CerrarVotar = () => {
  
  const navigate = useNavigate();

  return (
    <div>
      <br/>
      <div className='frame-votacion'>
        <text className='titulos-inicio'>Votación </text>
        <MDBBtn onClick={()=>navigate('/')} rounded color='success' size='lg' style={{width:100}}> 
        <i className="fas fa-xmark" style={{size:50}}></i>
        </MDBBtn>
      </div>
      <br/>
    </div>
  )
}

export default CerrarVotar
