import React from 'react'
import { useNavigate } from 'react-router-dom'

const HeaderAdminTorneo = () => {
  
    const navigate = useNavigate()
  
  return (
    <div className='header-admin-torneos'>
        <a className='regresar' onClick={()=>navigate('/welcome')}>« Regresar</a>
        <button type="button" class="btn btn-info" onClick={() => navigate('/login')}>Cerrar Sesión</button>
    </div>
  )
}

export default HeaderAdminTorneo