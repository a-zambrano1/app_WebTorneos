import React, { useId } from 'react'
import imgBatalla from '../../media/batalla.png'
import { MDBBtn } from 'mdb-react-ui-kit'
import { useNavigate } from 'react-router-dom'
import NavbarAdmin from './navbarAdmin'
import HeaderAdminTorneo from '../../utils/headerAdminTorneo'
import { useIdTorneoStore } from '../../utils/EstadosGlobales'


const AdminInicio = ({id_torneo}) => {
  const navigate = useNavigate();
  const {idTorneo} = useIdTorneoStore()

  return (
    <div className='recuadro2 debug'>
        <HeaderAdminTorneo/>
        <NavbarAdmin></NavbarAdmin>
        <div className='titulo-torneo' style={{backgroundImage: `url(${imgBatalla})`,
        backgroundSize: "cover"
      }}>
            <MDBBtn type='button' className='btn btn-success buton-opciones-torneo'  onClick={() => navigate('/tablaParticipantes',  {state:{id_torneo:id_torneo}})}>Competidores</MDBBtn>
            <MDBBtn type='button' className='btn btn-success buton-opciones-torneo' onClick={() => navigate('/tabla')}>Jueces</MDBBtn>
        </div>
    </div>
  )
}

export default AdminInicio