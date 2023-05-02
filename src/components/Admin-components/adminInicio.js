import React from 'react'
import { MDBBtn } from 'mdb-react-ui-kit'
import { useNavigate } from 'react-router-dom'
import NavbarAdmin from './navbarAdmin'
import HeaderAdminTorneo from '../../utils/headerAdminTorneo'

const AdminInicio = () => {
  const navigate = useNavigate()
  return (
    <div>
        <HeaderAdminTorneo/>
        <NavbarAdmin></NavbarAdmin>
        <div className='titulo-torneo'>
            <MDBBtn type='button' className='btn btn-dark buton-opciones-torneo' onClick={() => navigate('/tablaParticipantes')}>Competidores</MDBBtn>
            <MDBBtn type='button' className='btn btn-dark buton-opciones-torneo'>Fechas</MDBBtn>
            <MDBBtn type='button' className='btn btn-dark buton-opciones-torneo'>Batallas</MDBBtn>
            <MDBBtn type='button' className='btn btn-dark buton-opciones-torneo'>Tabla</MDBBtn>
            <MDBBtn type='button' className='btn btn-dark buton-opciones-torneo' onClick={() => navigate('/tabla')}>Jueces</MDBBtn>
        </div>
    </div>
    
  )
}

export default AdminInicio