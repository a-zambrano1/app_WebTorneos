import { MDBBtn } from 'mdb-react-ui-kit'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const HeaderAdminTorneo = () => {
  
    const navigate = useNavigate()
  
  return (
    <div className='header-admin-torneos'>
        <a className='regresar' onClick={()=>navigate('/welcome')}>« Regresar</a>
        <MDBBtn onClick={()=>navigate('/login')} rounded color='success' size='lg'> Cerrar Sesión</MDBBtn>
    </div>
  )
}

export default HeaderAdminTorneo