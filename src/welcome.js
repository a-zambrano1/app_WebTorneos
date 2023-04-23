import React from 'react'
import { useNavigate } from 'react-router-dom/dist';
import tablaTorneos from './tablaTorneos'
import { MDBBtn } from 'mdb-react-ui-kit';
import imgVote from './media/vote.png'
import micro from './media/micro.png'



const Welcome = () => {
    const navigate = useNavigate();

    

  return (
    <div className='pag-bienvenida'>
        <div className='bienvenido'>
        <img src = {micro} width = {96} height = {94}/>
        <span className='titulo-rap-rumble'>Bienvenid@ a Rap Rumble!</span>         
      </div>
        <div className='seccion-hacer'>
            <div>
                <span className='titulos-inicio'>Hola @Admin, ¿Qué quieres hacer el día de hoy?</span>
            </div>
            <div>
                <MDBBtn rounded color='success' size='lg'>
                    Realizar una Votación Rápida
                </MDBBtn>
            </div>
        </div>
        <div className='seccion-hacer'>
            <div>
                <MDBBtn rounded color='success' size='lg' onClick={() => navigate('/tabla')}>Ir a tus Torneos</MDBBtn>
            </div>
         </div>
        <div className='menu-opciones'>
            <button className='card-gris' onClick={()=>navigate('/registro_torneo')}> Registro Torneo</button>
        </div>
    </div>
  )
}

export default Welcome
