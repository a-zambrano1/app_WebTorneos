import { MDBBtn } from 'mdb-react-ui-kit'
import React from 'react'
import imgBatalla from './media/batalla.png'
import {useNavigate } from 'react-router-dom'

const AdminTorneo = () => {
  
  const navigate = useNavigate();
  
  return (
    <div>
        <div>
            @nombreTorneo
        </div>
        <div className='titulo-torneo'>
            <MDBBtn type='button' className='btn btn-dark buton-opciones-torneo' onClick={() => navigate('/tablaParticipantes')}>Competidores</MDBBtn>
            <MDBBtn type='button' className='btn btn-dark buton-opciones-torneo'>Fechas</MDBBtn>
            <MDBBtn type='button' className='btn btn-dark buton-opciones-torneo'>Batallas</MDBBtn>
            <MDBBtn type='button' className='btn btn-dark buton-opciones-torneo'>Tabla</MDBBtn>
            <MDBBtn type='button' className='btn btn-dark buton-opciones-torneo' onClick={() => navigate('/tabla')}>Jueces</MDBBtn>
        </div>
        <div>
            Ultimas batallas
        </div>
        <div>
            información más actual
        </div>
        <div>
            Descripción de la Liga
            @DescripciónTraidaDeLaBD
        </div>
    </div>
  )
}

export default AdminTorneo