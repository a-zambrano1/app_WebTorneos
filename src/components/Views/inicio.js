import React from 'react'
import { useNavigate } from 'react-router'
import '../../styles/styles.css'
import Auth from './logeo';
import rapero from '../../media/rapper.png'
import micro from '../../media/micro.png'
import { MDBBtn, MDBIcon, MDBInput } from 'mdb-react-ui-kit';

const Inicio = () => {
  
  const navigate = useNavigate()


  return (
    <div className='pag-bienvenida'>
      <div className='bienvenido'>
        <img src = {micro} width = {96} height = {94}/>
        <span className='titulo-rap-rumble'>Bienvenid@ a
        <span>Rap Rumble! </span>
        </span>         
      </div>
      <div className='busqueda-torneos'>
        <MDBInput
          label=" 🔍︎ Buscar torneo..."
          id="buscar"
          style={{height:25}}
        />
        <MDBBtn rounded color='success' size='lg' style={{width:100}}> 
          <i class="fas fa-filter"></i>
        </MDBBtn>
      </div>
      <div className='seccion-hacer'>
        <div>
          <span className='titulos-inicio'>¿Qué quieres hacer?</span>
        </div>
        <br/>
        <div>
        <MDBBtn onClick={()=>navigate('/InicioVotar')} rounded color='success' size='lg'> ¡Votación Rápida!</MDBBtn>
        </div>
      </div>
      <div className='seccion-hacer'>
        <div>
          <span className='titulos-inicio'>Últimos Torneos!</span>
        </div>
        <div className='bienvenido'>
          <span className='titulos-inicio1'>Lista de Torneos</span>
        </div>
      </div>
      <div className='menu-opciones'>
        <MDBBtn className='titulo-login' rounded color='success' size='lg' onClick={()=>navigate('/login')}>Ingreso Usuario
        <img src = {rapero} width = {72} height = {70}/>
        </MDBBtn>
      </div>
    </div>
  )
}

export default Inicio
