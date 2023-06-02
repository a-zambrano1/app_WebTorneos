import React from 'react'
import imgBatalla from '../../media/batalla.png'
import { MDBBtn } from 'mdb-react-ui-kit'
import { useNavigate } from 'react-router-dom'
import NavbarAdmin from './navbarAdmin'
import HeaderAdminTorneo from '../../utils/headerAdminTorneo'

const AdminInicio = () => {
  const navigate = useNavigate()
  return (
    <div className='recuadro2 debug'>
        <HeaderAdminTorneo/>
        <NavbarAdmin></NavbarAdmin>
        <div className='titulo-torneo' style={{backgroundImage: `url(${imgBatalla})`,
        backgroundSize: "cover"
      }}>
            <MDBBtn type='button' className='btn btn-success buton-opciones-torneo'  onClick={() => navigate('/tablaParticipantes')}>Competidores</MDBBtn>
            <MDBBtn type='button' className='btn btn-success buton-opciones-torneo' onClick={() => navigate('/tabla')}>Jueces</MDBBtn>
        </div>
    </div>
  )
}

export default AdminInicio