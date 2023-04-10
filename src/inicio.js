import React from 'react'
import { useNavigate } from 'react-router'
import micro from './media/google-logo.png'
import './styles.css'
import Auth from './logeo';

const Inicio = () => {
  
  const navigate = useNavigate()


  return (
    <div className='pag-bienvenida'>
      <div className='debug bienvenido'>
        <span className='titulo-rap-rumble'>Bienvenid@ a Rap Rumble</span>         
      </div>
      <div className='debug busqueda-torneos'>
        <input placeholder='Buscar torneo...'></input>
        <button>Botón de filtros</button>
      </div>
      <div className='debug seccion-hacer'>
        <div>
          <span className='titulos-inicio'>¿Qué quieres hacer?</span>
        </div>
        <div className='bienvenido'>
          <span>Votación Rápida</span>
        </div>
          
      </div>
      <div className='debug seccion-hacer'>
        <div>
          <span className='titulos-inicio'>Últimos Torneos</span>
        </div>
        <div className='bienvenido'>
          <span>Lista de Torneo</span>
        </div>
        
      </div>
      <div className='debug menu-opciones'>
        <button className='card-verde'> Registro Usuario</button>
        <button className='card-gris' onClick={()=>navigate('/registro_torneo')}> Registro Torneo</button>
        <button className='card-verde' onClick={()=>navigate('/login')}>Ingreso Usuario</button>
      </div>
      <div className='debug'>
        <span>Regresar</span>
      </div>
    </div>
  )
}

export default Inicio
